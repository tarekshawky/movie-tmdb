'use client'
import React from 'react';
import {MdLightMode, MdDarkMode} from 'react-icons/md';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
export default function DarkModeSwitch() {
    const {theme, setTheme, systemTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === 'system' ? systemTheme : theme;
    useEffect(() => setMounted(true), []);
  return (
    <div>
        {
           mounted && (currentTheme === 'dark' ? (
                 <MdLightMode className="cursor-pointer" onClick={()=> setTheme('light')}/>
            ) : (
                <MdDarkMode className="cursor-pointer" onClick={()=> setTheme('dark')}/> 
          ))}
    </div>
  );
}
