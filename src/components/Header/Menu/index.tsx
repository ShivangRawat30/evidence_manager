"use client"
import { GiHamburgerMenu } from "react-icons/gi";
import { MenuOverlay } from "./MenuOverlay";
import { useState } from "react";

export default function Menu() {
    const [menu,setMenu]=useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
        return menu;
    }
	return (
        <>
            <div className="p-3 hover:bg-blue-300/10 rounded-full transition-colors duration-100 cursor-pointer text-2xl underline" onClick={toggleMenu}>
                <GiHamburgerMenu />
            </div>
            <MenuOverlay toggle={toggleMenu}/>    
        </>
	);
}
