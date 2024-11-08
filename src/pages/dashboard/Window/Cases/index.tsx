"use client"

import React from 'react';
import Case from './Case';

interface CaseData {
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
}

const Cases= ({cases}:{cases:CaseData[]}) => {
    return (
        <div className='overflow-y-scroll h-full'>
            {cases.map((caseItem, index) => (
                <Case key={index} caseData={caseItem} />
            ))}
        </div>
    );
};

export default Cases;
