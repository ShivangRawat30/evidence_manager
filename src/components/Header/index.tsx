import Link from "next/link";
import React from "react";
import Ham from "./Ham";
import { GrSecure } from "react-icons/gr";

const Header: React.FC = () => {
	return (
		<header className="py-12 px-32 z-10 absolute w-screen text-white">
			<main className="w-full mx-auto flex justify-between items-center flex-wrap">
				<Link
					href={"/"}
					className="text-4xl mb-2">
					<span className="flex items-center gap-3 font-mono font-bold">
            <span className=" text-teal-300 hover:text-cyan-300 transition-colors duration-200">
						  <GrSecure />
            </span>
						Evidence
					</span>
				</Link>
				<div className="flex justify-end items-center space-x-2 md:space-x-4 mt-2 md:mt-0 "></div>
				<Ham />
			</main>
		</header>
	);
};

export default Header;
