import React from "react";
import instagram from "../public/assets/instagram-logo.svg";
import home from "../public/assets/home-page.png";
import { SquarePlay } from "lucide-react";
import { TbSend } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { HiOutlinePlus } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { LiaCubesSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
function Sidebar() {
  const navigate = useNavigate()
  return (
    <div className="m-3 fixed cursor-pointer">
      <div className=" flex flex-col gap-6 text-lg">       
          <img src={instagram} alt="" className="insta" />
          <div className="flex items-center gap-3 font-bold">
            <img src={home} alt="" className="insta" />
            Home
          </div>
          <div  className="flex items-center gap-3">
            <SquarePlay className="insta" role="button" />
            Reels
          </div>
          <div  className="flex items-center gap-3">
            <TbSend className="insta" role="button" />
            Messages
          </div>
          <div className="flex items-center gap-3">
            <IoSearch className="insta" role="button" />
            Search
          </div>
          <div  className="flex items-center gap-3">
            <MdExplore className="insta" role="button" />
            Explore
          </div>
          <div  className="flex items-center gap-3">
            <CiHeart className="insta" role="button" />
            Notifications
          </div>
          <div  className="flex items-center gap-3">
            <HiOutlinePlus className="insta" role="button" />
            Create
          </div>
          <div  className="flex items-center gap-3" onClick={()=> {navigate('/profile')}}>
            <CgProfile className="insta" role="button" />
            Profile
          </div>
      </div>

      <div className="fixed bottom-0 flex flex-col gap-6 text-lg mb-3">
        <div className="flex items-center gap-3">
          <IoMdMenu className="insta" role="button" />
          More
        </div>
        <div className="flex items-center gap-3">
          <LiaCubesSolid className="insta" role="button" />
          Also from Meta
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
