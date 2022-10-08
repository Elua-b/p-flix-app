import React, { useEffect, useState } from "react";
import {SearchIcon} from '@heroicons/react/outline'
import {BellIcon} from '@heroicons/react/outline'
import { Link } from "react-router-dom";

function Header() {
  const [isScrolled,setIsScrolled]=useState(false)
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>0){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll',handleScroll)
    return ()=>{window.removeEventListener('scroll',handleScroll)}
  },[])
  return (
    <header>
      <div className="flex justify-between items-center space-x-2 md:space-x-10">
        <img
          src="./logo1.png"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt=""
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">
            New <span>&</span> Popular
          </li>
          <li className="headerLink">My List</li>
        </ul>
        <div className="flex items-center space-x-4 text-sm">
          <SearchIcon className="hidden h-6 w-6 sm:inline font-light "/>
          <p className="hidden lg:inline">Kids</p>
          <BellIcon className="h-6 w-6"/>
          {/* <Link  href="/account">
            <img src="" alt="" />
          </Link> */}
          
        </div>
      </div>
    </header>
  );
}

export default Header;
