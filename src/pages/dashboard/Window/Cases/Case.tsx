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
            className={`mb-4 p-4 rounded ${
                caseData.ended ? "bg-gray-400 dark:bg-gray-500" : "bg-gray-200 dark:bg-emerald-600"
            }`}
        >
            <h3 className="text-xl font-bold">{caseData.stationName}</h3>
            <p className="text-sm text-gray-200">Assigned Court: {caseData.assignedCourt}</p>
            <p className="text-sm text-gray-200">Location: {caseData.location}</p>
            <p className="text-sm text-gray-200">Inspector: {caseData.inspectorName}</p>
            <p className="text-sm text-gray-200">Victim: {caseData.victimName}</p>
            <p className="text-sm text-gray-200">Case ID: {caseData.caseId}</p>
            <p className="text-sm text-gray-200">Details: {caseData.details}</p>
        </div>
    );
};

export default Case;
