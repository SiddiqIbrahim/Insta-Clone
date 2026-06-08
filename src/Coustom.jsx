import React, { useEffect, useState } from 'react'
function useCoustom(url) {
     const [user , setUser] = useState([])   
    const [post , setPost] = useState([])
    const [suggestion , setSuggestion] = useState([])
    const [stories , setStories] = useState(null)    
    useEffect(()=>{
            fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => setUser(data))
            .then((val) => setPost(val))
            .then((sugg) => setSuggestion(sugg))
            .then((story) => setStories(story))          
            .catch((err) => console.log(err))

           
    },[url])
  return user
}

export default useCoustom