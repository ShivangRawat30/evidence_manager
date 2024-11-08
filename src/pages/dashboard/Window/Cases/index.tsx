import React from 'react'
import Case from './Case';

const Cases = () => {
    const cases=[
        {
          "cid": ["C123", "C456"],
          "id": 12345,
          "stationName": "Central Police Station",
          "assignedCourt": "Courtroom 1",
          "location": "City Center",
          "submitter": "0x1234567890abcdef",
          "time": 1688265600,
          "inspectorName": "Inspector Jones",
          "victimName": "John Doe",
          "details": "Theft of a wallet from a local market.",
          "caseId": 2023070212345,
          "ended": false
        },
        {
          "cid": ["C789"],
          "id": 67890,
          "stationName": "North Police Station",
          "assignedCourt": "Courtroom 2",
          "location": "North Suburb",
          "submitter": "0xabcdef1234567890",
          "time": 1688352000,
          "inspectorName": "Inspector Davis",
          "victimName": "Jane Smith",
          "details": "Assault at a local bar.",
          "caseId": 2023070367890,
          "ended": true
        },
        {
          "cid": ["C101", "C102"],
          "id": 11111,
          "stationName": "South Police Station",
          "assignedCourt": "Courtroom 3",
          "location": "South Suburb",
          "submitter": "0x90abcdef1234567890",
          "time": 1688438400,
          "inspectorName": "Inspector Lee",
          "victimName": "Michael Lee",
          "details": "Vandalism of a public park.",
          "caseId": 2023070411111,
          "ended": false
        }
      ];
  return (
    <div>
        {cases.map((caseItem, index) => (
            <Case caseData={caseItem}/>
        ))}
      </div>
  )
}

export default Cases