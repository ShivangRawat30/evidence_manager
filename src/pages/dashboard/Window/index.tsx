import { useEffect, useState } from "react";
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
} from "@chakra-ui/react";
import { UserStore } from "../../../store/globalSlices";
import CaseForm from "../CaseForm";
import Cases from "./Cases";
import { faker } from "@faker-js/faker";
import { getAllFirByStation } from "../../../utils/blockchain";
import { useUserStore } from "../../../store";

export default function Page({ user }: { user: UserStore }) {
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
	const authorized = useUserStore();
	const [newCase, setCase] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const generateFakeCases = (numCases: number): CaseData[] => {
		const cases: CaseData[] = [];
		for (let i = 0; i < numCases; i++) {
			cases.push({
				cid: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () =>
					faker.string.uuid()
				),
				id: faker.number.int({ min: 10000, max: 99999 }),
				stationName: `${faker.location.city()}`,
				assignedCourt: `Courtroom ${faker.number.int({ min: 1, max: 5 })}`,
				location: faker.location.streetAddress(),
				submitter: faker.finance.ethereumAddress(),
				time: Math.floor(faker.date.recent().getTime() / 1000),
				inspectorName: `Inspector ${faker.person.lastName()}`,
				victimName: faker.person.fullName(),
				details: faker.lorem.sentence(50),
				caseId: faker.number.int({ min: 2023000000000, max: 2023999999999 }),
				ended: faker.datatype.boolean(),
			});
		}
		return cases;
	};
	useEffect(() => {
		const getCases = async () => {
			const cases = await getAllFirByStation();
			setCase(cases);
		};
		getCases();
	});

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);
	return (
		<div className="col-span-12 grid grid-rows-12 h-[83vh]">
			<div className="text-[200%] font-black flex items-center justify-between">
				{authorized
					? user.details.courtName || user.details.policeStationName
					: "Janakpuri Police Station"}
				<Button
					colorScheme="teal"
					onClick={openModal}>
					Create New Case
				</Button>
				<Modal
					isOpen={isOpen}
					onClose={closeModal}
					closeOnEsc>
					<ModalOverlay />
					<ModalContent
						bgImage="linear-gradient(to right, rgb(0,60,60) , rgb(0,100,100))"
						textColor="rgb(167 243 243 /0.9)"
						minWidth="70vw"
						height="fit-content">
						<ModalHeader>New Case Form</ModalHeader>
						<ModalCloseButton />
						<CaseForm closeForm={closeModal} />
					</ModalContent>
				</Modal>
			</div>
			<div className="bg-emerald-900/10 row-span-11 rounded-[11px] overflow-y-scroll h-[100%] grid grid-cols-2">
				{/* {user.details.publicKey} */}
				<Cases cases={newCase} />
			</div>
		</div>
	);
}
