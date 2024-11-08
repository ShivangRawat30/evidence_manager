"use client"
import React from "react";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";

interface CaseProps {
    caseData: {
        cid: string[];
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
    return (
        <div
            key={caseData.id}
            className={`p-4 space-y-1 my-2 rounded cursor-pointer transition-colors duration-100 hover:text-gray-900 ${
                caseData.ended ? "bg-gray-400 dark:bg-gray-500/90 hover:bg-gray-500" : "bg-gray-200/90 hover:bg-emerald-500 dark:bg-emerald-600/90"
            }`}
        >
            <h3 className="text-xl font-bold hover:underline">{JSON.stringify(caseData.stationName)}</h3>
            <p className="text-sm ">Assigned Court: {caseData.assignedCourt}</p>
            <p className="text-sm ">Location: {caseData.location}</p>
            <p className="text-sm ">Inspector: {caseData.inspectorName}</p>
            <p className="text-sm ">Victim: {caseData.victimName}</p>
            <p className="text-sm ">Case ID: {caseData.caseId}</p>
            <p className="text-sm ">Details: {caseData.details}</p>
        </div>
    );
};

export default Case;
