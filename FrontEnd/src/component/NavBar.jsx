import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';

import auth from './../auth/auth-help'
import jwt1 from 'jwt-decode' // import dependency
import { read } from '../api/api-post';

import "./chat.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { searchuser } from "../api/api-post";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    id: "",
    name: "",
    email: "",
    image: "",
    about: "",
    update: ""
  });

  const open1 = Boolean(anchorEl);
  const loading = searchResult.length !== 0 && open;
  const nav = useNavigate();
  
  // Authenticated user metrics from JWT token
  const jwt = auth.isAuthenticated();
  const user1 = jwt1(jwt.token);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  // 1. Search Hook Logic
  useEffect(() => {
    if (search !== "") {
      searchuser(
        { userId: user1.id },
        { t: jwt.token },
        { search: search }
      ).then((data) => {
        if (data) setSearchResult(data);
      });
    } else {
      setSearchResult([]);
    }
  }, [search, user1.id, jwt.token]);

  // 2. Initial Profile Mount Fetching Hook
  useEffect(() => {
    read(
      { userId: user1.id },
      { t: jwt.token }
    ).then((data) => {
      if (data) {
        setValues({
          id: data._id,
          name: data.name,
          email: data.email,
          image: data.image,
          about: data.about,
          update: data.updated
        });
      }
    });
  }, [user1.id, jwt.token]);

  return (
    <div>
      <nav className="py-2 position-fixed top-0 pr-4 start-0 w-100 shadow-sm">
        <div className="container d-flex justify-content-between align-items-center w-100 bg-white">
          <a style={{ textDecoration: "none", color: "black" }}>
            <h1 onClick={() => { nav('/s') }} className="logo fs-3 fw-bold" style={{ cursor: "pointer" }}>Piqosocial</h1>
          </a>
          
          <div className="mr-5 position-relative d-flex">
            <Stack sx={{ width: 100 }}> 
              <Autocomplete
                className="rounded"
                size="small"
                id="asynchronous-demo"
                sx={{ width: 200 }}
                options={searchResult}
                loading={loading}
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                onChange={(event, value) => {
                  if (value && value._id) nav("/user/" + value._id);
                }}
                autoHighlight
                getOptionLabel={(option) => option.name || ""}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      className="rounded-circle me-3"
                      loading="lazy"
                      width="30"
                      height="30"
                      src={option.image || "images/user (3).png"}
                      alt=""
                    />
                    {option.name}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    className="rounded bg-white"
                    sx={{ p: '0px' }}
                    size="small"
                    onChange={(e) => setSearch(e.target.value)}
                    {...params}
                    placeholder="Search To Chat"
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <React.Fragment>
                          {loading ? <CircularProgress color="inherit" size={20} /> : null}
                          {params.InputProps.endAdornment}
                        </React.Fragment>
                      ),
                    }}
                  />
                )}
              />
            </Stack>
          </div>
          
          <div className="logo rounded-circle d-flex align-items-center">
            <i className="fa-solid fa-right-to-bracket fs-3 me-4" style={{ cursor: "pointer" }} onClick={() => {
              localStorage.removeItem("userInfo1");
              nav('/');
            }} />
            <i className="fa fa-paper-plane me-4 fs-3" style={{ cursor: "pointer" }} onClick={() => { nav('/chat/join') }} />
            
            {/* FIX: Using reliable user1.id directly from JWT instead of waiting for async state */}
            <div onClick={() => { nav('/user/' + user1.id) }} style={{ cursor: "pointer" }}>
              <img
                src={values.image || "images/user (3).png"}
                alt="profile"
                width="40px"
                height="40px"
                className="rounded-circle"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;