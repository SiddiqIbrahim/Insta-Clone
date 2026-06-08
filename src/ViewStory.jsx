import {useParams, Link, useNavigate} from 'react-router-dom'
import useCoustom from './Coustom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
function ViewStory() {
  const [story , setStory] = useState(null)
  const {id,tot} = useParams()
  const navigate = useNavigate()


  useEffect(() => {
        fetch(`http://localhost:3000/stories/${id}`)
        .then((response) => response.json())
        .then((data) => setStory(data))
        .catch((error) => console.log(error))
  },[id])


  if( id > tot ||  id<=0){
      navigate('/')
  }

  return (
    <div>       
          {story ?
           <div className='SI ml-125'>
                 <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}> <ChevronLeft/></Link>
                <img src={story.image} alt="story" className='si'/>
                 <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}> <ChevronRight/></Link>
           </div> 
           :
            <div>Loading...</div>}      
    </div>
  )
}

export default ViewStory