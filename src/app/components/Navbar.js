'use client';

import DarkModeSwitch from "./DarkModeSwitch";

export default function Navbar(){
    return(
       <div className="flex justify-between items-center">
         <h1>Navbar</h1>
        <DarkModeSwitch/>
       </div>
    );
}