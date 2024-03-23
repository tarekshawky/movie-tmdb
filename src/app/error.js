'use client';
import React from 'react'
import { useEffect } from 'react';

export default function error({error, reset}) {
    useEffect(()=>{
        console.log(error)
    }, [error]);
  return (
    <div className="text-center mt-8">
        <h1>somthing went wrong, Please Try Again Later</h1>
        <button onclick={()=> reset()}>Try Again</button>
    </div>
  )
}
