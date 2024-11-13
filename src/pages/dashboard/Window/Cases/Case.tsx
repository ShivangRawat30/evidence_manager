"use client";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";

interface CaseProps {
	caseData: {
		cid: string;
		id: number;
		stationName: string;
		assignedCourt: string;
		location: string;
		submitter: string;
		time: number;
		inspectorName: string;
		victimName: string;
		details: string;
		caseId: number;
		ended: boolean;
	};
}
const Case: React.FC<CaseProps> = ({ caseData }) => {
	const router = useRouter();
	console.log(caseData);
	const detailHeading = "font-bold";
	const spanStyle = "font-light ml-1";
	return (
		<div
			key={caseData.id}
			className={`p-4 space-y-1 m-2 flex flex-col justify-between items-center h-[55vh] rounded-xl cursor-pointer transition-colors duration-100 border border-white/10 text-gray-200 hover:text-gray-100 bg-gray-600/40 hover:bg-gray-500/40 dark:bg-gray-600/20 select-none
            `}>
			<div className="flex flex-col gap-3">
				<h3 className="text-xl font-bold hover:underline text-center mb-4">
					{JSON.stringify(caseData.stationName)}
				</h3>
				<p className={detailHeading}>
					Assigned Court:
					<span className={spanStyle}>{caseData.assignedCourt}</span>
				</p>
				<p className={detailHeading}>
					Location:<span className={spanStyle}>{caseData.location}</span>
				</p>
				<p className={detailHeading}>
					Inspector:<span className={spanStyle}>{caseData.inspectorName}</span>
				</p>
				<p className={detailHeading}>
					Victim:<span className={spanStyle}>{caseData.victimName}</span>
				</p>
				<p className={detailHeading}>
					Case ID:<span className={spanStyle}>{Number(caseData.caseId)}</span>
				</p>
				<p className={detailHeading}>
					Details:<span className={spanStyle}>{caseData.details}</span>
				</p>
			</div>
			<div className="mt-10 flex items-center gap-20">
				{caseData.ended && (
					<div className="text-white cursor-not-allowed border border-red-600/70 text-red-600/70 font-bold p-3 rounded-xl">
						Case Completed
					</div>
				)}
				<a
					href={`https://ipfs.io/ipfs/${caseData.cid}`}
					target="_blank">
					<Button colorScheme="teal">Show Evidence</Button>
				</a>
			</div>
		</div>
	);
};

export default Case;
