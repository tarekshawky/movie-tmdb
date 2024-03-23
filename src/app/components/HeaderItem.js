'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function HeaderItem({title,param}) {
    const SearchParam = useSearchParams();
    const genre = SearchParam.get('genre');
  return (
    <div>
         <Link className={`hover:text-amber-600 ${genre === param ? 'dark:text-amber-600 underline underline-offset-8 decoration-4 decoration-amber-600': ''}`} href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}
