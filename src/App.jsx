import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestions from './Suggestions'
import { Route, Routes } from 'react-router-dom'
import ViewStory from './ViewStory'
import Profile from './Profile'
import { Moon, Sun } from 'lucide-react'

function App() {
    const [toggle , setToggle] = useState(false)    
   
  return (
      <div className={`${toggle ? "text-white , bg-black" : "bg-white , text-black"} cursor-pointer`}>
          
           {toggle? 
             <Sun
                onClick={()=> setToggle(false)}
              />
              :              
               <Moon 
                onClick={()=> setToggle(true)}
              />
          }
          <div className='flex'>        
        <Routes>
            <Route path='/' element={
              <div className='flex w-full'>
                    <div className='w-[20%]'><Sidebar/></div>
                    <div className='w-1/2'><Feed/></div>
                    <div className='w-[30%]'><Suggestions/></div>
              </div>
              }/>
            <Route path='/story/:id/:tot' element={<ViewStory/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
        
    </div>
      </div>    
  )
}

export default App