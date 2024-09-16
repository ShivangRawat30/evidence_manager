import type { NextPage } from "next";
import Image from "next/image";
import Connect from "../components/Connect";

const Home: NextPage = () => {
	return (
			<div className="text-white selection:bg-cyan-200/10 h-screen flex flex-col items-center justify-center">
				<div className="grid grid-cols-2 h-full w-full px-32 items-center">
					<div className="text-center sm:text-center md:text-left lg:text-left flex flex-col pt-20">
            <h1 className="text-6xl font-bold tracking-tight my-5 text-teal-200 hover:text-cyan-200 transition-colors duration-500">
            Revolutionizing Evidence Storage with Blockchain
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quod sequi eligendi expedita at laudantium doloribus veritatis omnis ratione iste labore, fugiat itaque necessitatibus explicabo corporis voluptatibus natus repellat eaque?
              Libero similique esse consectetur, deleniti odit eveniet quidem animi maiores sed aut explicabo eius ut debitis accusamus distinctio veritatis asperiores? Id minima temporibus adipisci delectus fuga aut illum excepturi voluptates?
              Culpa mollitia dolor necessitatibus cupiditate, ipsa doloremque numquam beatae natus repudiandae dolorum dicta recusandae odio earum, voluptas sit asperiores modi incidunt maiores aliquid nisi? Necessitatibus, natus? Facilis praesentium dicta officia!
            </p>
            <Connect/>
					</div>
          <div className="items-center justify-center hidden sm:hidden md:flex lg:flex xl:flex">
            <Image
              src={"/images/GlobeLock.png"}
              width={500}
              height={500}
              alt="Secure"
            />
          </div>
				</div>
			</div>
	);
};

export default Home;
