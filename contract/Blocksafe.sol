//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


contract BlockSafe  {
    uint256 public _totalfir;
    address public owner;


    mapping(uint256 => FirStruct) public Firs;
    mapping(address => string) public policestations;
    mapping(address => string) public courts;
    mapping(uint256 => FirStruct) public firByCaseId; 
    mapping(address =>  FirStruct[]) public firsByAddress;

    struct FirStruct {
        string[] cid;
        uint256 id;
        string stationName;
        string assignedCourt;
        string location;
        address submitter;
        uint256 time;
        string inspectorName;
        string victimName;
        string details;
        uint256 caseId;
        bool ended;
    }

    constructor(){
    }

    function addPoliceStation(string memory stationName, address _add) public {
        policestations[_add] = stationName;
    }

    function addCourt(string memory coutName) public {
        courts[msg.sender] = coutName;
    }

    function createFir(
        string[] memory _cid,
        string memory _location,
        string memory _details,
        string memory _Iname,
        string memory _Vname,
        uint256 _caseId
    ) public {

        _totalfir++;
        FirStruct memory newFir = FirStruct({
            cid:  _cid,
            id: _totalfir,
            stationName: policestations[msg.sender],
            assignedCourt: "",
            location: _location,
            submitter: msg.sender,
            time: currentTime(),
            inspectorName: _Iname,
            victimName: _Vname,
            details: _details,
            caseId: _caseId,
            ended: false
        });
        Firs[newFir.id] = newFir;
        firByCaseId[newFir.caseId] = newFir;
        firsByAddress[msg.sender].push(newFir);
    }

    function assignCourt(
        string memory _courtName,
        uint256 _id
    ) public {
        Firs[_id].assignedCourt = _courtName;
    }

    function addMoreEvidences(
        string memory _cid,
        uint256 _id
    ) public {
        require(Firs[_id].submitter == msg.sender, "You are Not Authorized to Add more evidences");
        Firs[_id].cid.push(_cid);
    }

    function getAllFirs() public view returns (FirStruct[] memory firs) {
        firs = new FirStruct[](_totalfir);
        uint256 index=0;
        for(uint256 i=1; i<20; i++) {
            firs[index++]= Firs[i];
        }
        return firs;

    }

    function getFir(uint256 _id) public view returns (FirStruct memory) {
        require(bytes(courts[msg.sender]).length > 0, "You are Not Authorized to get evidences");
        // require(Firs[_id].assignedCourt == msg.sender, "You are not authorized to get evidences");
        return Firs[_id];
    }


    function getAllFirByStation() public view returns (FirStruct[] memory){
        return firsByAddress[msg.sender];
    }


    function currentTime() internal view returns(uint256) {
        return (block.timestamp * 1000) + 1000;
    }

    function payTo(address to, uint256 amount) internal {
        (bool success, ) = payable(to).call{value: amount}('');
        require(success);
    }

}