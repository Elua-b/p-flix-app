import React from 'react'
import Image from 'next/image'
import { Movie } from '../typings'
interface Props{
    movie:Movie
}
function ThumbNail({movie}:Props) {
  return (
    <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:min-w-[260px] md:hover:scale-100'>
     <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        
        alt=''
      />
    </div>
  )
}

export default ThumbNail
