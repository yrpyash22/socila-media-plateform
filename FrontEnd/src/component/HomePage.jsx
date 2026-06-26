import React from 'react'
import Post from './Post'
import Posts from './Posts'
import auth from './../auth/auth-help'
import jwt1 from 'jwt-decode' 
import { useEffect } from 'react';
import {getFeed} from "../api/api-post"
import FindPeople from "./FindPeople"
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import MoonLoader from 'react-spinners/MoonLoader'
import {toast} from 'react-toastify';
import NavBar from './NavBar'

const HomePage = () => {
  const [posts, SetPosts] = useState([]);
  const [isnew , setnew] = useState(false);
  const nav = useNavigate();

  function Addone(data1) {
    setnew(true)
    const updatedPosts = [...posts]
    updatedPosts.splice(0, 0, data1);
    
    setTimeout(function() {
      SetPosts(updatedPosts)
    }, 500);

    setTimeout(function() {
      toast.success('Post Upload',{position: toast.POSITION.TOP_LEFT,autoClose:1500}) 
      SetPosts(updatedPosts)
      setnew(false);
      nav('/'); 
    }, 700);
  }  

  const jwt = auth.isAuthenticated();
  const user1 = jwt1(jwt.token);

  useEffect(()=>{
    getFeed({
      userId: user1.id
    },{
      t: jwt.token
    }).then((data) => {
      if (data && Array.isArray(data)) {
        SetPosts(data);
      }
    });
  }, [user1.id, jwt.token]);

  const updata = (post)=>{
    let updated = [...posts].filter(item => item._id !== post._id);
    
    setTimeout(function() {
      toast.success('Post Deleted',{position: toast.POSITION.TOP_LEFT,autoClose:1500}) 
      SetPosts(updated)
      nav('/'); 
    }, 100);
  }

  return (
    <div style={{backgroundColor : "#fafafa "}}>
      <NavBar/>
      <section className= "p-lg-0 p-md-3 p-3 mb-3 mt-5 container ">
        <div className="d-flex overflow-hidden justify-content-evenly m-auto align-items-start px-5" >
          <div className="left col-lg-7 col-sm-12 h-100 border_radius mt-5" >
            <Post onAdd1={Addone}/>
            {isnew ? (
              <div className="d-flex justify-content-center my-3">
                <MoonLoader color="#077ce8" loading size={60} />
              </div>
            ) : null}
            {posts.map((post,idx)=>{
              return (
                <Posts updatePosts={updata} key={post._id || idx} post={post}/>
              )
            })}
          </div>
          <FindPeople/>
        </div>
      </section>
    </div>
  )
}

export default HomePage