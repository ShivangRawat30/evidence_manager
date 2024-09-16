"use client"
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Connect() {
    const { address } = useAccount();
    const router = useRouter();
    useEffect(()=>{
        if (address) {
            console.log(address);

            // check auth from server... if authorized, redirect to /id
			//router.push("/",address);


        }
    },[address])
	return (
		<>
			{JSON.stringify(address)}
			<div className="py mt-20">
				<ConnectButton />
			</div>
		</>
	);
}
