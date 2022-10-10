import React, { useEffect, useState } from "react";
import {SearchIcon} from '@heroicons/react/outline'
import {BellIcon} from '@heroicons/react/outline'
import { Link } from "react-router-dom";
import Image from 'next/image'


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
    <header className={`${isScrolled &&'bg-red-500'}`}>
      <div className="flex items-center justify-between p-1 pr-4 space-x-2 md:space-x-10">
        <Image
          src="./logo3.png"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt=""
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">
            New <span>&</span> Popular
          </li>
          <li className="headerLink">My List</li>
        </ul>
        <div className="flex items-center space-x-4 text-sm font-light">
          <SearchIcon className="sm hidden h-6 w-6 sm:inline "/>
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
