"use client";

import {
	images,
	secondSliderImages,
	sendToday,
	sendTodayTitle,
	laptopSale,
	trust,
	beneficialInfo,
} from "../data/data";

import contact from "../server/public/assets/contact/contact.jpg";

import Assemble from "../server/public/assets/onlineAssemble/gamingPc.webp";

import Navbar from "./components/Navbar";
import SwiperJs from "./components/SwiperJs";
import BestDeal from "./components/BestDeal";
import SendToday from "./components/SendToday";
import BeneficialInfo from "./components/BeneficialInfo";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Image from "next/image";

export default function HomePage() {
	const [sidebar, setSidebar] = useState(false);
	const handleSidebar = () => {
		setSidebar(!sidebar);
	};
	return (
		<>
			<Navbar handleSidebar={handleSidebar} />
			{/* products banner */}
			{sidebar === true ? <Sidebar handleSidebar={handleSidebar} /> : null}

			<div className="w-full ">
				<div className="flex items-center justify-center mt-28 lg:mt-4">
					<div className="w-full lg:w-3/4 rounded-lg overflow-hidden">
						<SwiperJs images={images} />
					</div>
				</div>
				<div className="mt-4 flex justify-center">
					<div className="grid grid-cols-5  gap-3 w-full lg:w-3/4">
						{/*right side of the page */}
						<div className="hidden lg:flex">
							<div className="w-full">
								<div
									className="w-full shadow-lg rounded-lg py-4 text-center  mb-2 hover:scale-105 duration-300 "
									style={{ backgroundColor: "#17B5B5" }}>
									<div className="text-white text-lg flex justify-center">
										خرید جنس{" "}
										<h1 className="text-black mr-2 font-bold">استوک</h1>
									</div>
								</div>
								{/*matalebe mofid*/}
								<BeneficialInfo beneficialInfo={beneficialInfo} />

								<div
									style={{
										backgroundImage: `url(${Assemble.src})`,
										backgroundPosition: "center",
										objectFit: "fill",
									}}
									className=" mb-2 bg-white shadow-lg rounded-lg h-64 flex justify-center items-center hover:scale-105 overflow-hidden duration-300">
									<h1 className=" text-3xl text-white">اسمبل آنلاین</h1>
								</div>
								<Image
									alt="contact"
									src={contact}
									loading="lazy"
									width={400}
									height={400}
									className="mb-2 rounded-lg shadow-lg hover:scale-105  duration-300"
								/>

								{/*matalebe mofid*/}
								<BeneficialInfo beneficialInfo={beneficialInfo} />
							</div>
						</div>

						{/*left side of the page */}

						<div className=" lg:col-span-4 col-span-5 ">
							<BestDeal />
							{/*trust signs */}
							<div className="p-10 bg-white rounded-lg shadow-lg hidden lg:flex justify-center items-center mb-4">
								{trust.map((data, key) => (
									<div className="mx-10" key={key}>
										{data.icon}
										<p className="text-gray-500 text-center">{data.title}</p>
									</div>
								))}
							</div>

							<div className="w-full p-4 bg-white shadow-lg rounded-lg mb-4">
								<SendToday sendToday={sendToday} title={sendTodayTitle} />
							</div>
							{/*slider*/}
							<div className="rounded-lg overflow-hidden mb-4 shadow-lg">
								<SwiperJs images={secondSliderImages} />
							</div>

							<div className="w-full p-4 bg-white shadow-lg rounded-lg mb-4">
								<SendToday sendToday={sendToday} title={laptopSale} />
							</div>
						</div>
					</div>
				</div>
				<div className="w-full">
					<Footer />
				</div>
			</div>
		</>
	);
}
