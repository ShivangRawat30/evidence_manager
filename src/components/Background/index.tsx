import Image from "next/image";
import Header from "../Header";

export default function Background({ children }: { children: React.ReactNode }) {
    return (
        <div className="absolute h-screen bg-black text-white -z-10 w-full">
            <Header/>
            <div className="absolute">
                <Image src="/images/Vector.png" height={1500} width={2500} alt="Vector" className="relative  -translate-x-[49%] -translate-y-[50%]"/>
            </div>
                <div className="h-[90vh] w-[90vh] bg-cyan-500/5 absolute right-0 top-1/2 -translate-y-[47%] rounded-full blur-3xl">
                </div>
                <div className="h-[90vh] w-[90vh] bg-teal-500/5 absolute right-10 top-1/2 -translate-y-[47%] rounded-full blur-3xl">
                </div>
            <div className="relative w-full mt-32 h-[80%]">
                {children}
            </div>
        </div>
    );
}