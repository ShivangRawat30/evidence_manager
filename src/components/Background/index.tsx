import Image from "next/image";

export default function Background({ children }: { children: React.ReactNode }) {
    return (
        <div className="absolute h-screen bg-black text-white -z-10 w-full">
            <div className="absolute">
                <Image src="/images/Vector.png" height={1500} width={2500} alt="Vector" className="relative  -translate-x-[49%] -translate-y-[50%]"/>
                <div className="h-[90vh] w-[90vh] bg-cyan-500/10 absolute right-[3%] top-1/2 -translate-y-[47%] rounded-full blur-3xl">
                </div>
            </div>
            <div className="relative w-full">
                {children}
            </div>
        </div>
    );
}