import React, { useState } from "react";
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	VStack,
} from "@chakra-ui/react";
import { createFir } from "../../utils/blockchain";

function CaseForm({ closeForm }: { closeForm: () => void }) {
	const [form, setForm] = useState({
		cid: "",
		location: "",
		details: "",
		inspectorName: "",
		victimName: "",
		caseId: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prevForm) => ({
			...prevForm,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		try {
			e.preventDefault();
			console.log(
				"Form Data Submitted:",
				form.cid,
				form.location,
				form.details,
				form.inspectorName,
				form.victimName,
				Number(form.caseId)
			);

			createFir(
				form.cid,
				form.location,
				form.details,
				form.inspectorName,
				form.victimName,
				Number(form.caseId)
			);
			closeForm();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Box
			minWidth="100%"
			mx="auto"
			py={6}
			px={14}
			boxShadow="lg"
			borderRadius="md">
			<form onSubmit={handleSubmit}>
				<VStack spacing={4}>
					<FormControl
						id="cid"
						isRequired>
						<FormLabel>Evidence IPFS Link</FormLabel>
						<Input
							type="text"
							name="cid"
							value={form.cid}
							onChange={handleChange}
							placeholder="Enter valid IPFS link"
							border="1px solid rgb(167 243 243 /0.9)"
						/>
					</FormControl>

					<FormControl
						id="location"
						isRequired>
						<FormLabel>Location</FormLabel>
						<Input
							type="text"
							name="location"
							value={form.location}
							onChange={handleChange}
							placeholder="Enter location"
							border="1px solid rgb(167 243 243 /0.9)"
						/>
					</FormControl>

					<FormControl
						id="details"
						isRequired>
						<FormLabel>Details</FormLabel>
						<Textarea
							name="details"
							value={form.details}
							onChange={handleChange}
							placeholder="Enter details"
							border="1px solid rgb(167 243 243 /0.9)"
						/>
					</FormControl>

					<FormControl
						id="inspectorName"
						isRequired>
						<FormLabel>Inspector Name</FormLabel>
						<Input
							type="text"
							name="inspectorName"
							value={form.inspectorName}
							onChange={handleChange}
							placeholder="Enter inspector name"
							border="1px solid rgb(167 243 243 /0.9)"
						/>
					</FormControl>

					<FormControl
						id="victimName"
						isRequired>
						<FormLabel>Victim Name</FormLabel>
						<Input
							type="text"
							name="victimName"
							value={form.victimName}
							onChange={handleChange}
							placeholder="Enter victim name"
							border="1px solid rgb(167 243 243 /0.9)"
						/>
					</FormControl>

					<FormControl
						id="caseId"
						isRequired>
						<FormLabel>Case ID</FormLabel>
						<Input
							type="text"
							name="caseId"
							value={form.caseId}
							onChange={handleChange}
							placeholder="Enter case ID"
							border="1px solid rgb(167 243 243 /0.9)"
						/>
					</FormControl>

					<Button
						colorScheme="teal"
						type="submit"
						width="full">
						Submit
					</Button>
				</VStack>
			</form>
		</Box>
	);
}

export default CaseForm;
