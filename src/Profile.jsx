import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
function Profile() {
  const [profile , setProfile] = useState(null)
  const [followers , setFollowers] = useState([])
  const [unfollowed , setUnfollowed] = useState(0)

  useEffect(()=>{     
            axios.get("http://localhost:3000/profile")
            .then((response) => {setProfile(response.data)})
            .catch((error) => {
                console.log(error)                
            })   
            
            axios.get("http://localhost:3000/followers")
            .then((data) => {setFollowers(data.data)})
             .catch((error) => {
                console.log(error)                
            })   
  },[unfollowed])

  function handleOnChange(e){
        setProfile(
          prev =>({
              ...prev , [e.target.name] : e.target.value
          })
        )
  }

  const handleUpdate = async () => {
      await axios.put("http://localhost:3000/profile", profile)
      .then(console.log("Updateed"))
      .catch(err => console.log(err))
  }

  const handleUnfollow = async (id) => {
      await axios.delete(`http://localhost:3000/followers/${id}`)
      .then(alert("Unfollowed"))
      .then(setUnfollowed(!unfollowed))
      .catch((err) => console.log(err))
  }
  return (
    <div className='m-5'>
      {profile ? (
        <div>
            <img src={profile.profilePic} alt="" className=' w-20 h-20 rounded-full'/>
            <h5>{profile.username}</h5>
            <input 
            type="text"  
                name='username' 
                value={profile.username}
                 className="w-full px-3 py-2 border rounded-md my-4"
                 onChange={handleOnChange}
            />

            <input 
            type="text" 
            name='profilePic'
            value={profile.profilePic}
             className="w-full px-3 py-2 border rounded-md my-4"
                 onChange={handleOnChange}
            />
            
            <button className='bg-blue-500 text-white border rounded-md' onClick={handleUpdate}>
                  Update
            </button>
        </div>
      ):
        (
          <div>
              Loading...
          </div>
        )
        }

        {followers.length > 0 ? (
            followers.map((follower) => (
                <div key={follower.id} className='flex my-2'>
                {follower.username}
                    <button className='bg-gray-800 text-white rounded-md mx-auto' onClick={()=> handleUnfollow(follower.id)}>Unfollow</button>
                </div>
            ))
        )
        : (
            <div>Loading Followers</div>
        )}
    </div>
  )
}

export default Profile