import { Button, Input, Stack } from "@chakra-ui/react";
import { MdEmail,MdCall } from "react-icons/md";
export default function ContactPage() {
	return (
		<div className=" text-center select-none overflow-y-hidden flex flex-col items-center justify-center h-screen">
			<h1 className="text-cyan-200 hover:text-teal-200 transition-colors duration-200 text-7xl text-center py-7 font-bold">
				Contact Us
			</h1>
			<p className="px-52">
				At BlockSafe, we’re here to help you with any questions or support you
				may need regarding our blockchain-based evidence management platform.
				Whether you’re looking for more information, need assistance with your
				account, or want to explore how BlockSafe can benefit your organization,
				we’re just a message away. Reach out to us through the form below, and
				our team will respond promptly. We value your feedback and are committed
				to ensuring that your experience with BlockSafe is smooth and secure.
				Let’s connect and work together to revolutionize evidence management for
				a more transparent and trusted justice system.
			</p>
			<Stack
				className="mt-10"
				direction="row"
				spacing={4}>
				<Button
					leftIcon={< MdEmail/>}
					colorScheme="teal"
					variant="solid">
					Email
				</Button>
				<Button
					rightIcon={<MdCall />}
					colorScheme="teal"
					variant="outline">
					Call us
				</Button>
			</Stack>
		</div>
	);
}
