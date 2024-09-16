"use client"
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Ham() {
    const [menu,setMenu]=useState(false);
    const toggleMenu = ()=>{
        setMenu(!menu);
    }
    const MenuItems= [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/contact", label: "Contact" },
    ];
    return (
        <div className="flex items-center justify-between gap-2 w-1/3">
            <div className="border-cyan-100/20 border-[1px] px-5 py-2 rounded-full bg-cyan-900/20 flex items-center justify-between w-[200%] ">
                {MenuItems.map((link,index)=>(
                    <div
                    className="menu-link-item w-max clip-path-rectangle"
                    key={index}>
                    <div
                        className="menu-link-item-holder relative"
                        onClick={toggleMenu}>
                        <Link
                            href={link.path}
                            className="menu-link font-bold tracking-tight leading-[85%] ">
                            {link.label}
                        </Link>
                    </div>
                </div>
                ))}
                <div className="menu-link font-bold tracking-tight leading-[85%]">Menu</div>
            </div>
        <div className="p-3 hover:bg-blue-300/10 rounded-full transition-colors duration-100 cursor-pointer text-2xl">
          <GiHamburgerMenu/>
        </div>
        </div>
    );
}