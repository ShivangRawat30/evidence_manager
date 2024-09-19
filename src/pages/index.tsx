import type { NextPage } from "next";
import Image from "next/image";
import Connect from "../components/Connect";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { useUserStore } from "../store";

const Home: NextPage = () => {
	const {authorized} = useUserStore();
	return (
		<div className="text-white selection:bg-cyan-200/10 h-full flex flex-col items-center justify-center">
			<div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full items-center">
				<div className="text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
					<h1 className="text-[10vw] md:text-[7vw] lg:text-[4vw] leading-tight font-bold tracking-tight my-5 text-teal-200 hover:text-cyan-200 transition-colors duration-500">
						Revolutionizing Evidence Storage with Blockchain
					</h1>
					<p className="text-[4vw] md:text-[2.5vw] lg:text-[1vw]">
					Welcome to BlockSafe, a secure and decentralized solution for managing case evidence using blockchain technology. Safeguard justice with tamper-proof, transparent, and reliable evidence storage for legal professionals.
					</p>
					<Connect />
					{authorized && (
						<>
							<Link href={`/dashboard`}>
								<Button colorScheme="teal">Go To Dashboard</Button>
							</Link>
						</>
					)}
				</div>
				<div className="items-center justify-center hidden sm:hidden md:hidden lg:flex xl:flex">
					<Image
						src={"/images/GlobeLock.png"}
						width={500}
						height={500}
						alt="Secure"
						priority
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
