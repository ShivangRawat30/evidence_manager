import { useState } from "react";
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
} from "@chakra-ui/react";
import { UserStore } from "../../../store/globalSlices";
import CaseForm from "../CaseForm";
import Cases from "./Cases";
import { faker } from "@faker-js/faker";

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
	const [isOpen, setIsOpen] = useState(false);
	const generateFakeCases = (numCases: number): CaseData[] => {
		const cases: CaseData[] = [];
		for (let i = 0; i < numCases; i++) {
			cases.push({
				cid: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () =>
					faker.string.uuid()
				),
				id: faker.number.int({ min: 10000, max: 99999 }),
				stationName: `${faker.location.city()} Police Station`,
				assignedCourt: `Courtroom ${faker.number.int({ min: 1, max: 5 })}`,
				location: faker.location.streetAddress(),
				submitter: faker.finance.ethereumAddress(),
				time: Math.floor(faker.date.recent().getTime() / 1000),
				inspectorName: `Inspector ${faker.person.lastName()}`,
				victimName: faker.person.fullName(),
				details: faker.lorem.sentence(),
				caseId: faker.number.int({ min: 2023000000000, max: 2023999999999 }),
				ended: faker.datatype.boolean(),
			});
		}
		return cases;
	};

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);
	const cases = generateFakeCases(5);
	return (
		<div className="col-span-12 grid grid-rows-12 h-[83vh]">
			<div className="text-[200%] font-black flex items-center justify-between">
				{user.details.courtName || user.details.policeStationName}
				<Button
					colorScheme="teal"
					onClick={openModal}>
					Create New Case
				</Button>
				<Modal
					isOpen={isOpen}
					onClose={closeModal}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Case Form</ModalHeader>
						<ModalCloseButton />
						<CaseForm />
					</ModalContent>
				</Modal>
			</div>
			<div className="bg-emerald-900/10 row-span-11 rounded-[11px] overflow-y-scroll h-[100%]">
				{/* {user.details.publicKey} */}
				<Cases cases={cases} />
			</div>
		</div>
	);
}
