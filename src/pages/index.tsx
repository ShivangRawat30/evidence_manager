import type { NextPage } from "next";
import Image from "next/image";
import Connect from "../components/Connect";

const Home: NextPage = () => {
	return (
		<div className="text-white selection:bg-cyan-200/10 h-screen flex flex-col items-center justify-center">
			<div className="grid grid-cols-2 h-full w-full px-32 items-center">
				<div className="text-center sm:text-center md:text-left lg:text-left flex flex-col pt-20">
					<h1 className="text-6xl font-bold tracking-tight my-5 text-teal-200 hover:text-cyan-200 transition-colors duration-500">
						Revolutionizing Evidence Storage with Blockchain
					</h1>
					<p>
          Welcome to BlockSafe, your trusted solution for secure and decentralized evidence management. Using blockchain technology, we provide police stations, courts, and legal professionals with tamper-proof storage for critical case evidence. Our platform ensures that every piece of evidence is immutable, traceable, and protected from unauthorized access or tampering. By decentralizing storage, BlockSafe enhances transparency and accountability in legal proceedings, ensuring the integrity of the justice process. Experience the power of blockchain as we transform evidence management into a secure, seamless, and reliable process for safeguarding justice.
					</p>
					<Connect />
				</div>
				<div className="items-center justify-center hidden sm:hidden md:flex lg:flex xl:flex">
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
