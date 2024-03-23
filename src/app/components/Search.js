'use client';
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Search() {
    const [search, setSearch] = useState();
    const router = useRouter();
    const handleSubmit = (e)=>{
        e.preventDefault();
        router.push(`/search/${search}`);
    };
  return (
    <div className="max-w-6xl mx-auto px-8">
        <form className="my-8 flex flex-auto gap-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search..." className="w-full h-14 placeholder-gray-500 outline-none bg-transparent border border-gray-500 rounded-lg p-8"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            />
            <button className="text-amber-600 border border-gray-500 p-4 rounded-lg disabled:text-gray-400" disabled={!search}>Search</button>
        </form>
    </div>
  )
}
