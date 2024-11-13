import { ethers } from "ethers";
import abi from "../../contract/abi.json";
import { address } from "../../contract/address.json";

const toWei = (num: number) => ethers.parseEther(num.toString());
const fromWei = (num: number) => ethers.formatEther(num);

let ethereum: any;
let tx: any;

if (typeof window !== "undefined") ethereum = window.ethereum;

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

const getEthereumContracts = async () => {
  const accounts = await ethereum?.request?.({ method: "eth_accounts" });

    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(address, abi, signer);
    return contract;
};

const getAllFirs = async () => {
  const contract = await getEthereumContracts();
  const firs = await contract.getAllFirs();
  console.log(structuredFirs(firs));
  return structuredFirs(firs);
};

const getAllFirByStation = async () => {
  const contract = await getEthereumContracts();
  const firs = await contract.getAllFirByStation();
  console.log(structuredFirs(firs));
  return structuredFirs(firs);
};

const createFir = async (
  cid: string,
  location: string,
  details: string,
  Iname: string,
  Vname: string,
  caseId: number
) => {
  if (!ethereum) {
    reportError("Please install a browser provider");
    return Promise.reject(new Error("Brower provider not installed"));
  }
  try {
    const contract = await getEthereumContracts();
    tx = await contract.createFir(
        cid,
        location,
        details,
        Iname,
        Vname,
        caseId
    );
    await tx.wait()
    return Promise.resolve(tx)
  } catch (error) {
    console.log(error);
    return Promise.reject(error)
  }
};

const structuredFirs = (firs: CaseData[]): CaseData[] =>
  firs.map((fir) => ({
    cid: fir.cid,
    id: fir.id,
    stationName: fir.stationName,
    assignedCourt: fir.assignedCourt,
    location: fir.location,
    submitter: fir.submitter,
    time: fir.time,
    inspectorName: fir.inspectorName,
    victimName: fir.victimName,
    details: fir.details,
    caseId: fir.caseId,
    ended: fir.ended,
  }));


  export {
    getAllFirs,
    getAllFirByStation,
    createFir
  }
