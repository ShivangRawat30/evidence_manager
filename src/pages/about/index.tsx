export default function AboutPage() {
	return (
		<div className=" text-center select-none overflow-y-hidden flex flex-col items-center justify-center h-screen">
			<h1 className="text-cyan-200 hover:text-teal-200 transition-colors duration-200 text-7xl text-center py-7 font-bold">
				About Us
			</h1>
            <div className="px-52">
			<p>
				At BlockSafe, we are dedicated to transforming the way evidence is
				stored, managed, and accessed in the justice system. Leveraging the
				power of blockchain technology, we provide a decentralized and secure
				platform that ensures the integrity, transparency, and confidentiality
				of critical legal evidence.{" "}
				Our mission is to offer a reliable solution to police stations, courts,
				and legal professionals, enabling them to connect their blockchain
				wallets and store evidence in an immutable and tamper-proof environment.
				By decentralizing the storage of case evidence, we aim to eliminate the
				risks associated with traditional centralized databases, such as
				tampering, loss, or unauthorized access.
				With blockchain's ability to create a transparent and verifiable chain
				of custody, we ensure that all evidence is preserved in its original
				state and can be easily traced and authenticated when needed. Our
				platform is designed to support the growing demand for digital security
				in legal processes, empowering authorities with tools that promote
				trust, accountability, and fairness.
				We believe that the future of justice lies in technology that not only
				enhances security but also streamlines the entire evidence management
				process. Your Company Name is committed to making the legal system more
				efficient, transparent, and secure, one blockchain transaction at a
				time.
				Join us on this journey to modernize evidence management and protect the
				integrity of legal systems worldwide.
			</p>
            </div>
		</div>
	);
}
