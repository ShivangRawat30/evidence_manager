"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { checkAuth } from "../../api/auth";
import { useUserStore } from "../../store";


export default function Connect() {
	const {setUser,authorized} = useUserStore();
	const { address } = useAccount();
	
	const fetchAuth = async (address: string) => {
		try {
			if (address) {
				const response = await checkAuth(address);
				setUser(response);
			}
			else {
                setUser({ authorized: false, address: "", type: "" });
            }
		} catch (error) {
			console.error("Error in authorization:", error);
		}
	};
	const AuthMessage = ()=>{
		if (address){
			if (authorized) {
                return <p className="font-bold text-emerald-500 hover:text-teal-500 transition-colors duration-200 cursor-alias">Authorized</p>;
            } else {
                return <p className="font-bold text-red-600 hover:text-red-500 transition-colors duration-200 cursor-not-allowed">Not authorized</p>;
            }
		}
		else {
            return <p className="text-gray-300 hover:text-gray-500 transition-colors duration-200">Connect to access Dashboard</p>;
        }
	}
	useEffect(() => {
		if (address) {
			fetchAuth(address);
		}
		else {
			fetchAuth("");
		}
	}, [address]);
	return (
		<>
			<div className="mt-10 mb-5 flex items-center gap-3">
				<ConnectButton />
				<AuthMessage/>
			</div>
		</>
	);
}
