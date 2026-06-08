import React, { useEffect, useState } from "react";
import useCoustom from "./Coustom";
import {Heart, IterationCcw, MessageCircle, Send} from 'lucide-react'
import axios from "axios";
const Posts = () => {
  const user = useCoustom("http://localhost:3000/users");
  const post = useCoustom("http://localhost:3000/posts") 
  const [comment , setComment] = useState([])
  const [isTrue , setIsTrue] = useState(false)

useEffect(()=>{
        axios.get("http://localhost:3000/comments")
    .then((res) => setComment(res.data))
    .catch((err) => console.log(err))
},[])  

const handleClick = () => {
    setIsTrue(true)    
}
    
  return (
    <>
      {
        isTrue && (
              comment.map((item) => (
          <div key={item.id}>
               <img src={item.profilePic} alt="" className="w-10 h-10 rounded-full"/>
                <h6>{item.username}</h6>
                <p>{item.body}</p>
                {console.log(item.body)}
                
          </div>
      ))
        )
      }            
    <div className="ml-32 mt-10">
          {post.map((posts) => {
            const users = user.find((val) => (
                val.id === posts.id
            ))           
            return (
                  <div key={posts.id}>
                      <div className="flex gap-3 my-3 items-center">
                             <img src={users.profilePic} alt="" className="w-10 h-10 rounded-full"/>
                            <h6>{users.username}</h6>
                      </div>                       
                      {posts ? (
                        <>
                          <div>
                                <img src={posts.image} alt="" className="image"/>                                  
                            </div>

                            <div className="flex gap-2">
                                <Heart role="button"/> 
                                    <MessageCircle role="button" onClick={()=>setIsTrue(handleClick)}/>
                                <div>{isTrue}</div> 
                                <Send role="button"/>
                            </div>
                              <div>
                                  {posts.likes} <b>Likes</b>
                                  <p>{posts.caption}</p>
                              </div>
                        </>                            
                      )
                      :                      
                      (
                          <div>Loading...</div>
                      )
                      }
                  </div>
            )
          })}
    </div>
    </>
  );
};

export default Posts;
