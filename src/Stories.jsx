import React from "react";
import { useNavigate } from "react-router-dom";
import useCoustom from "./Coustom";

function Stories() {
  const stories = useCoustom("http://localhost:3000/stories");
  const navigate = useNavigate()
  let tot;
  return (
    <div className="story flex">
        <div className="hidden">
          {tot = stories.length}
        </div>
      {stories.length > 0 ? (
        stories.map((val) => (
          <div key={val.id} className="mx-2">
            <div>
              <div className=" story_set p-1.5 rounded-full" onClick={()=> {navigate(`/story/${val.id}/${tot}`)}}>
                <img
                  src={val.profilePic}
                  alt=""
                  className="rounded-full border-4 border-black h-11 w-11"
                />
                <h5 className="truncate w-12 text-center mt-2">{val.username}</h5>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}

export default Stories;
