"use client";
import { useRouter } from "next/router";

export default function Ham() {
	const router = useRouter();
	const MenuItems = [
		{ path: "/", label: "Home" },
		{ path: "/about", label: "About" },
		{ path: "/contact", label: "Contact" }
	];
	return (
		<div className="flex items-center justify-end gap-2">
			<div className="border-cyan-100/20 border-[1px] rounded-full bg-gradient-to-r from-cyan-900/20 to-cyan-900/60 flex items-center w-fit cursor-pointer ">
				{MenuItems.map((link, index) => (
					<div
						key={index}
						className={`px-5 py-3 m-2 h-full rounded-full font-medium " ${
							router.pathname == link.path &&
							" bg-gradient-to-r from-cyan-500/90 to-cyan-600/30 hover:from-cyan-500/90 hover:via-teal-600/90 hover:to-teal-600/30"
						} `}
						onClick={() => {
							router.push(link.path);
						}}>
						{link.label}
					</div>
				))}
			</div>
			{/* <div className="px-10 py-3 h-full underline">Menu</div> */}
			{/* <div className="p-3 hover:bg-blue-300/10 rounded-full transition-colors duration-100 cursor-pointer text-2xl underline">
				<GiHamburgerMenu />
			</div> */}
		</div>
	);
}
