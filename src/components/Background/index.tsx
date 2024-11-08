import Image from "next/image";
import Header from "../Header";

export default function Background({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="fixed bg-black text-white -z-10 w-full h-screen grid grid-rows-12 px-12 lg:px-32 pt-[3vh]">
			<div className="absolute">
				<Image
					src="/images/Vector.png"
					height={1500}
					width={2500}
					alt="Vector"
					className="relative  -translate-x-[49%] -translate-y-[50%]"
				/>
			</div>
			<div className="blob1 h-[90vh] w-[90vh] bg-cyan-500/5 absolute right-0 top-1/2 -translate-y-[47%] rounded-full blur-3xl"></div>
			<div className="blob2 h-[100vh] w-[100vh] bg-teal-500/5 absolute right-10 top-1/3 -translate-y-[47%] rounded-full blur-3xl"></div>
            <div className="relative row-span-1"><Header/></div>
            <div className="relative row-span-11">{children}</div>
		</div>
	);
}
