import React from 'react'
import { useState } from 'react';
import auth from './../auth/auth-help'
import jwt1 from 'jwt-decode' // import dependency
import { useEffect } from 'react';
import {create} from "../api/api-post"
import {toast} from 'react-toastify';
import PulseLoader from "react-spinners/PulseLoader";
import BarLoader from "react-spinners/PulseLoader";
import axios from 'axios';
import { useReducer } from 'react';

const Post = (props1) => {

  const [Text, setText] = useState('');
  const [pic, setPic] = useState('');
  const [image,setImage]=useState()
  const [picLoading, setPicLoading] = useState(false);
  const [picLoading1, setPicLoading1] = useState(false);
  const jwt = auth.isAuthenticated()
  const user = (jwt1(jwt.token))

  const submitHandler = async (e) => {
    e.preventDefault(); // Form submit par page refresh hone se rokne ke liye
    setPicLoading(true);

    if(!Text && !pic) {
      toast.warning('Please Type anything ',{position: toast.POSITION.TOP_LEFT,autoClose:1000})
      setPicLoading(false);
      return; 
    }

    try {
      const PostData = {
        Text,
        pic, // Isme ab humare backend se aayi hui Cloudinary URL jayegi
        user,
      } 
      
      create({
        userId: user.id
      }, {
        t: jwt.token
      }, PostData).then((d) => {
        setPic('')
        setText('')
        setImage(null)
        props1.onAdd1(d)
      })

      setText('')
      // Sahi ID use kari hai yahan input clear karne ke liye
      if(document.getElementById('file-input')) {
        document.getElementById('file-input').value = "";
      }
      setPicLoading(false);
    } catch (error) {
      setPicLoading(false);
      console.log(error)
      toast.error('Something Went Wrong',{position: toast.POSITION.TOP_LEFT,autoClose:1000})
    };
    setPicLoading(false);
  };

  // Naya Image Handler jo tumhare backend ke naye route ko hit karega
  const ImageHander=(pics)=> {
    setPicLoading1(true)
    
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      setImage(pics)
      const data = new FormData();
      // 'image' field name match hona chahiye backend ke upload.single("image") se
      data.append("image", pics); 

      // Tumhare local Node.js server ka upload route
      fetch("http://localhost:4000/api/upload", {
        method: "POST",
        body: data,
        // Headers me Content-Type mat lagana, browser boundary khud sambhalega
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Upload failed on server");
          }
          return res.json();
        })
        .then((data) => {
          // Backend se response me milne waali secure url ko pic state me set karo
          setPic(data.url);
          console.log("Uploaded Post Image URL:", data.url);
          setPicLoading1(false);
          return 
        })
        .catch((err) => {
          console.error(err);
          toast.error('Something went wrong with upload',{position: toast.POSITION.TOP_LEFT,autoClose:1000})
          setPicLoading1(false);
        });
    } else {
      toast.error('Photo is invalid',{position: toast.POSITION.TOP_LEFT,autoClose:1000})
      setPicLoading1(false);
      return;
    }
  };
    
  return (
    <section className="post border_radius border-info border_radius white overflow-hidden pb-4 border position-relative">
      <div className="d-flex align-items-center p-3 ps-4  mb-0"></div>
      <div className="">
        <form action="" className=" d-flex flex-column ms-4 ">
          <div>
            <textarea
              value={Text}
              name=""
              id=""
              cols={30}
              rows={2}
              onChange={(e)=>setText(e.target.value)}
              className="outline w-75 "
              placeholder={"Share your thoughts "+user.name}
            />
            <button  onClick={submitHandler} className="btn btn-primary btn-md ms-4 px-4 b-post">
              Post
            </button>
            <PulseLoader  loading={picLoading} size={15} />
          </div>
          <div className="image-upload">
            <label htmlFor="file-input">
              <i className="fa-solid fa-camera-retro fs-3 mt-2 blue" />
            </label>
            <input id="file-input"  onChange={(e)=>ImageHander(e.target.files[0])} 
              name="photo" accept="image/*" type="file" className="d-none" />
            <BarLoader loading={picLoading1} size={15} />
          </div>
          {pic && image && <p className='mb-0 mt-0'>{image.name}</p>}
        </form>
      </div>
    </section>
  )
}
export default Post