import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {FiThumbsUp} from 'react-icons/fi' 
export default function Card({result}) {
  return (
    <div>
        <Link href={`/movie/${result.id}`}>
            <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} width={500} height={300} className="w-full rounded-lg" alt="Images"/>
            <div>
                <p className="line-clamp-2	">{result.overview}</p>
                <h2 className="text-lg font-bold">{result.title || result.name}</h2>
                <p>{result.release_date || result.first_air_date}</p>
               <div className="flex items-center gap-2">
               <FiThumbsUp/>
                {result.vote_count}
               </div>
            </div>
        </Link>
    </div>
  )
}
