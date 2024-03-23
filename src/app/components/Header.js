import React from 'react'
import HeaderItem from './HeaderItem'

export default function Header() {
  return (
    <div className="flex items-center justify-center gap-4 dark:bg-gray-600 p-4">
        <HeaderItem title='Trendeing' param='fetchTrending'/>
        <HeaderItem title='Top Rated' param='fetchTopRtated'/>
    </div>
  )
}
