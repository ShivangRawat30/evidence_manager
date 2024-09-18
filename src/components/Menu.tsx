"use client";
import Link from "next/link";
import { LegacyRef, RefObject, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
const menuLinks = [
	{ path: "/", label: "Home" },
	{ path: "/about", label: "About" },
	{ path: "/contact", label: "Contact" },
];
export default function Menu() {
	const container = useRef<LegacyRef<HTMLDivElement> | undefined>(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const tl = useRef<GSAPTimeline>();
	const toggleMenu = () => {
		console.log(isMenuOpen);
		
		setIsMenuOpen(!isMenuOpen);
	};

	useGSAP(
		() => {
			gsap.set(".menu-link-item-holder", { y: 75 });
			tl.current = gsap
				.timeline({ paused: true })
				.from(".menu-overlay", {
					duration: 1.25,
					clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
					ease: "power4.inOut",
				})
				.to(".menu-link-item-holder", {
					y: 0,
					duration: 1,
					stagger: 0.1,
					ease: "power4.inOut",
					delay: -0.75,
				});
		},
		{ scope: container }
	);

	useEffect(() => {
		if (isMenuOpen) {
			tl.current?.play();
		} else {
			tl.current?.reverse();
		}
	}, [isMenuOpen]);
	return (
		<div
			className="menu-container z-50 text-white">
			<div className="menu-bar fixed top-0 left-0 w-screen p-[2em] flex justify-between items-center z-1">
				<div className="menu-logo">
					<Link
						href="/"
						className="text-white cursor-pointer">
						Evidence
					</Link>
				</div>
				<div
					className="menu-open"
					onClick={toggleMenu}>
					<p className="text-white cursor-pointer text-9xl">Menu</p>
				</div>
			</div>
			<div className="menu-overlay fixed top-0 left-0 w-screen h-screen p-[2em] bg-blue-200/5 flex z-2">
				<div className="menu-overlay-bar">
					<div className="menu-logo">
						<Link href="/">Evidence</Link>
					</div>
					<div
						className="menu-close"
						onClick={toggleMenu}>
						<p className="text-black cursor-pointer">Close</p>
					</div>
				</div>
				<div className="menu-close-icon lg:flex md:flex flex-2 items-end cursor-pointer sm:hidden">
					<p className=" text-[100px] stroke-[3px] stroke-[#c5fb45] leading-[70%]">
						&#x2715;
					</p>
				</div>
				<div className="menu-copy flex-4 flex flex-col justify-between md:pt-[2em] sm:pt-[8em]">
					<div className="menu-links">
						{menuLinks.map((link, index) => (
							<div
								className="menu-link-item w-max clip-path-rectangle"
								key={index}>
								<div
									className="menu-link-item-holder relative"
									onClick={toggleMenu}>
									<Link
										href={link.path}
										className="menu-link text-black text-[60px] md:text-[80px] lg:text-[80px] font-bold tracking-tight leading-[85%] sm:text-[60px]">
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
						<div className="menu-info-col">
							<p>info@ramneek.com</p>
							<p>828 77 34 576</p>
						</div>
					</div>
				</div>
				<div className="menu-preview flex-4 flex content-end items-end">
					<p>View Showreel</p>
				</div>
			</div>
		</div>
	);
}
