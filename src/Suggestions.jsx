import React from 'react'
import useCoustom from './Coustom'
import axios from 'axios'

function Suggestions() {
  const suggested = useCoustom("http://localhost:3000/suggestion")
  const profile = suggested[0]
  const handleFollow = async (id , username) => {
     axios.post("http://localhost:3000/followers",  {"id": id ,"username" : username})
      .then(alert("Followed"))
      .catch(err => console.log(err))
  }
  return (
    <div className='suggestion'>
       {profile ? (
          <div>
                <div className='flex gap-2 items-center'>
                  <img src={profile.profilePic} alt="" className='w-10 h-10 rounded-full'/>
                   <h5>{profile.username}</h5>
                   <small className='text-blue-700 mx-auto'>Switch</small>
                </div>
                <div className='flex'>
                    <p>Suggested for you</p>
                    <b className='mx-auto text-sm'>See All</b>
                </div>
          </div>
          
       ) 
        :(
            <div>Loading...</div>
        )
        }

          <div>
  {suggested.slice(1).map((item) => (
    <div
      key={item.id}
      className=' wid flex items-center justify-between my-2'
    >
      <div className='flex items-center gap-2'>
        <img
          src={item.profilePic}
          alt=""
          className='w-10 h-10 rounded-full'
        />

        <h5>{item.username}</h5>
      </div>

      <a className='text-blue-700 cursor-pointer' onClick={()=> handleFollow(item.id , item.username)}>
        Follow
      </a>
    </div>
  ))}
</div>
    </div>
  )
}

export default Suggestions