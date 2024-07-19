import React from 'react'
import dynamic from 'next/dynamic';

const HeaderItem = dynamic(() => import('./HeaderItem'), { ssr: false });

export default function Header() {
  return (
    <div className="flex items-center justify-center gap-4 dark:bg-gray-600 p-4">
        <HeaderItem title='Trendeing' param='fetchTrending'/>
        <HeaderItem title='Top Rated' param='fetchTopRtated'/>
    </div>
  )
}
