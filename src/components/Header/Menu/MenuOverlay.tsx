"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Link from "next/link";
import { LegacyRef, useEffect, useRef, useState } from "react";
import { GrSecure } from "react-icons/gr";
const menuLinks = [
	{ path: "/", label: "Home" },
	{ path: "/about", label: "About" },
	{ path: "/contact", label: "Contact" },
];
export const MenuOverlay: React.FC<{ toggle: () => void }> = ({ toggle }) => {
	const container = useRef<HTMLDivElement | null>(null);
	const tl1 = useRef<GSAPTimeline>();
	const tl2 = useRef<GSAPTimeline>();
	useGSAP(
		() => {
			tl1.current = gsap
				.timeline({ paused: true })
				.from(".menu", {
					duration: 0.7,
					scale: 0,
					x:1000,
					y:-1000,
					backgroundColor: "black",
					borderRadius:"100%",
					ease: "power4.inOut",
				})
				.from(".letters", {
					duration: 0.5,
					opacity: 0,
					stagger: 0.1,
					ease: "power4.inOut",
				})
				.from(".blob", {
					duration: 5,
					opacity: 0,
					scale: 0.2,
				});
			tl2.current = gsap.timeline().from(".menu-copy", {
				duration: 1.25,
				y: -100,
				opacity: 0,
				ease: "power4.inOut",
				stagger: 0.2,
			}).from(".menu-links",{
				duration: 1,
                opacity: 0,
                stagger: 0.1,
                ease: "power4.inOut",
			}).to(".blob",{
				scale:0.8,
				duration:5,
				repeat:-1,
				ease: "power1",
				yoyo: true,
                delay: 4.5,
			})
		},
		{ scope: container }
	);

	const exitOverlay = ()=>{
		
        setTimeout(toggle,9000)
        tl2.current?.reverse();
		tl1.current?.reverse();
	}

	useEffect(()=>{
		tl1.current?.play();
		tl2.current?.play();
	},[])

	return (
		<div
			className="absolute z-10"
			ref={container}>
			<div className="menu fixed bg-black h-screen w-screen top-0 left-0 text-white px-8 md:px-24 lg:px-32 py-12 flex flex-col">
				<header className="header w-full mx-auto flex justify-between items-center flex-wrap z-10 relative">
					<Link
						href={"/"}
						className="text-4xl mb-2">
						<span className="flex items-center font-sans tracking-tighter font-bold">
							<span className=" text-teal-300 hover:text-cyan-300 transition-colors duration-200 pr-3">
								<GrSecure />
							</span>
							Block
							<span className="text-teal-300 hover:text-cyan-300 transition-colors duration-200">
								Safe{" "}
								<sup className="font-extralight text-xl self-start">&#169;</sup>
							</span>
						</span>
					</Link>
					<span
						className="text-3xl cursor-pointer hover:underline"
						onClick={exitOverlay}>
						Close &#x2715;
					</span>
				</header>
				<main className="menu-copy flex-4 flex flex-col justify-between md:pt-[2em] sm:pt-[8em] h-full z-20 relative">
					<div className="menu-links flex flex-col items-center justify-between py-[15vh] h-full">
						{menuLinks.map((link, index) => (
							<div
								className="menu-link-item w-max clip-path-rectangle"
								key={index}>
								<div
									className="menu-link-item-holder relative"
									onClick={toggle}>
									<Link
										href={link.path}
										className="menu-links text-white/60 hover:text-cyan-200 font-bold tracking-tight leading-[85%] text-[15vw] lg:text-[5vw] transition-colors duration-500">
										{link.label}
									</Link>
								</div>
							</div>
						))}
					</div>
					<div className="menu-info flex">
						<div className="menu-info-col flex-1 flex flex-col content-end">
							<a href="/">X &#8599;</a>
							<a href="">Instagram &#8599;</a>
							<a href="">Linkedin &#8599;</a>
							<a href="">Github &#8599;</a>
						</div>
						<div className="menu-info-col text-right flex flex-col items-end justify-end">
							<p>info@ramneek.com</p>
							<p>828 77 34 576</p>
						</div>
					</div>
				</main>
				<div className="title h-full w-full flex items-center justify-center text-[40vw] text-teal-900/5 absolute top-0 left-0 z-0 cursor-default select-none">
					<span className="letters">M</span>
					<span className="letters">e</span>
					<span className="letters">n</span>
					<span className="letters">u</span>
				</div>
				<div className="blob absolute bg-teal-700/50 h-full w-1/2 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full blur-[300px]"></div>
			</div>
		</div>
	);
};
