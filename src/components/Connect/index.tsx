"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { checkAuth, printNew } from "../../api/auth";
import { useUserStore } from "../../store";
import { UserStore } from "../../store/globalSlices";

export default function Connect() {
	const [res, setRes] = useState<Partial<UserStore>>(); // Directly store the response data
	const { address } = useAccount();
	const setUser = useUserStore(state=>state.setUser)

	const fetchAuth = async (address: string) => {
		try {
			const response = await checkAuth(address);
			setRes(response); // Set the response directly
		} catch (error) {
			console.error("Error in authorization:", error);
		}
	};

	useEffect(() => {
		if (address) {
			fetchAuth(address);
		}
	}, [address]);

	useEffect(() => {
		if (res) {
			console.log(res);
			setUser(res);
		}
	}, [res]);

	return (
		<>
			<div className="mt-10">
				{JSON.stringify(res)} {/* Display the response */}
				<ConnectButton />
			</div>
		</>
	);
}
