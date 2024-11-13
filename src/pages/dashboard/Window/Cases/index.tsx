"use client"

import React from 'react';
import Case from './Case';

interface CaseData {
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
}

const Cases= ({cases}:{cases:CaseData[]}) => {
    console.log(cases);
    return (
        <>
            {cases.length > 0 ? (
                cases.map((caseItem) => (
                    <Case caseData={caseItem} />
                ))
            ) : (
                <div>No Cases Yet</div>
            )}
        </>
    );
};

export default Cases;
