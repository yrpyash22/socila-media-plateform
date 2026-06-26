import React from 'react'
import auth from './../auth/auth-help'
import jwt1 from 'jwt-decode'
import { useEffect } from 'react'
import { findPeoplee } from '../api/api-post'
import { useState } from 'react'
import { follow } from '../api/api-post'
import { useNavigate, useLocation } from 'react-router'
import { toast } from 'react-toastify';

const FindPeople = () => {
  const nav = useNavigate();
  const location = useLocation(); // Extracted route context tracker to sync transitions
  
  const [values, setValues] = useState({
    users: [],
    open: false,
    followMessage: 'ERROR'
  });

  const jwt = auth.isAuthenticated();
  const user1 = jwt1(jwt.token);

  // Core Data Synchronization Pipeline
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    findPeoplee(
      { userId: user1.id },
      { t: jwt.token },
      signal
    ).then((data) => {
      if (data && Array.isArray(data)) {
        setValues({ ...values, users: data });
      }
    });

    return () => {
      abortController.abort();
    };
    // FIX 1: Component location transition listener hooks sync live states cleanly now
  }, [user1.id, jwt.token, location.pathname]); 

  const clickFollow = (user, index) => {
    follow(
      { userId: user1.id },
      { t: jwt.token },
      user._id
    ).then((data) => {
      if (data) {
        let toFollow = [...values.users];
        toFollow.splice(index, 1);
        
        setValues({ ...values, users: toFollow, open: true, followMessage: `Following ${user.name}!` });
        toast.success(`Following ${user.name}!`, { position: toast.POSITION.TOP_RIGHT, autoClose: 1000 });
      }
    });
  };

  return (
    <>
      <div className="right col-lg-4 d-lg-block d-sm-none d-none border rounded border-info border_radius d-flex flex-column p-3 mt-5 white">
        <div>
          <p className="fw-bold fs-5">Suggestions for you</p>
        </div>
        <hr />
        <div className="max_height overflow-auto">
          {values.users.map((user2, idx) => {
            // FIX 2: Dynamic fallback link cache injection layers mapping cleanly
            const userImageUrl = user2.image 
              ? (user2.image.includes('?') ? `${user2.image}&v=${new Date().getTime()}` : `${user2.image}?v=${new Date().getTime()}`)
              : "https://cdn-icons-png.flaticon.com/512/149/149071.png";

            return (
              <div key={user2._id || idx} className="d-flex align-items-center p-2 mb-3 rounded hover" style={{ cursor: 'pointer' }}>
                <div onClick={() => nav('/user/' + user2._id)}>
                  <img
                    src={userImageUrl}
                    alt="profile"
                    style={{ width: 50, height: 50, objectFit: 'cover' }}
                    className="me-3 rounded-circle"
                    onError={(e) => { 
                      e.target.onerror = null; 
                      e.target.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"; 
                    }}
                  />
                </div>
                <h6 
                  onClick={() => nav('/user/' + user2._id)} 
                  className="fw-bold mb-0" 
                  style={{ flexGrow: 1 }}
                >
                  {user2.name}
                </h6>
                <i 
                  onClick={() => clickFollow(user2, idx)} 
                  className="fa-solid fa-user-plus ms-auto fs-4 text-primary blue" 
                />
              </div>
            );
          })}
          {values.users.length === 0 && (
            <p className="text-muted text-center small mt-3">No new suggestions available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default FindPeople;