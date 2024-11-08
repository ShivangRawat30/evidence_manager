import React, { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    VStack,
} from '@chakra-ui/react';

function CaseForm() {
    const [form, setForm] = useState({
        cid: '',
        location: '',
        details: '',
        inspectorName: '',
        victimName: '',
        caseId: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", form);
        // Add your submission logic here
    };

    return (
        <Box maxWidth="500px" mx="auto" p={6} boxShadow="lg" borderRadius="md">
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    <FormControl id="cid" isRequired>
                        <FormLabel>Multiple CID (Link to IPFS)</FormLabel>
                        <Input
                            type="text"
                            name="cid"
                            value={form.cid}
                            onChange={handleChange}
                            placeholder="Enter CID (IPFS link)"
                        />
                    </FormControl>

                    <FormControl id="location" isRequired>
                        <FormLabel>Location</FormLabel>
                        <Input
                            type="text"
                            name="location"
                            value={form.location}
                            onChange={handleChange}
                            placeholder="Enter location"
                        />
                    </FormControl>

                    <FormControl id="details" isRequired>
                        <FormLabel>Details</FormLabel>
                        <Textarea
                            name="details"
                            value={form.details}
                            onChange={handleChange}
                            placeholder="Enter details"
                        />
                    </FormControl>

                    <FormControl id="inspectorName" isRequired>
                        <FormLabel>Inspector Name</FormLabel>
                        <Input
                            type="text"
                            name="inspectorName"
                            value={form.inspectorName}
                            onChange={handleChange}
                            placeholder="Enter inspector name"
                        />
                    </FormControl>

                    <FormControl id="victimName" isRequired>
                        <FormLabel>Victim Name</FormLabel>
                        <Input
                            type="text"
                            name="victimName"
                            value={form.victimName}
                            onChange={handleChange}
                            placeholder="Enter victim name"
                        />
                    </FormControl>

                    <FormControl id="caseId" isRequired>
                        <FormLabel>Case ID</FormLabel>
                        <Input
                            type="text"
                            name="caseId"
                            value={form.caseId}
                            onChange={handleChange}
                            placeholder="Enter case ID"
                        />
                    </FormControl>

                    <Button colorScheme="blue" type="submit" width="full">
                        Submit
                    </Button>
                </VStack>
            </form>
        </Box>
    );
}

export default CaseForm;
