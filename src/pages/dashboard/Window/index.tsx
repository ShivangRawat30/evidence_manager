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

export default function Page({ user }: { user: UserStore }) {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	return (
		<div className="col-span-9 grid grid-rows-12">
			<div className="text-[200%] font-black bg-white/10 flex items-center justify-between">
				{user.details.courtName || user.details.policeStationName}
				<Button
					colorScheme="teal"
					onClick={openModal}
					>
					Create New Case
				</Button>
			</div>
			<div className="bg-emerald-900/5 row-span-11 rounded-[11px]">
				{user.details.publicKey}
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
		</div>
	);
}
