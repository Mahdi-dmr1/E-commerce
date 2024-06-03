import gamingPcAs from "../../server/public/assets/pishnahadVizhe/gamingPcAs6.jpg";
import GraphicsCard from "../../server/public/assets/mofid/graphicsCard.jpg";
import Image from "next/image";
export default function BestDeal() {
	return (
		<div className="w-full mb-4">
			<div className="bg-white rounded-lg w-full shadow-lg ">
				<div className="grid grid-cols-3 md:col-span-1">
					<div className="border-l-2 col-span-3 md:col-span-1">
						<h1 className="text-3xl text-red-400 my-4 text-center">
							پیشنهاد ویژه
						</h1>
						<div className="flex justify-center">
							<Image
								width={300}
								height={150}
								loading="lazy"
								src={GraphicsCard.src}
							/>
						</div>

						<h1 className="text-sm mx-10 text-center">
							کارت گرافیک Geforce RTX 4080 Trincy OC حافظه 12G
						</h1>
						<h1 className="mt-4 text-center">27,290,000 تومان</h1>
						<h1 className="mb-4 text-center line-through text-gray-400">
							29,290,000 تومان
						</h1>
					</div>
					<div className="hidden md:flex justify-center items-center col-span-2 overflow-hidden">
						<div
							style={{
								backgroundImage: `url(${gamingPcAs.src})`,
								backgroundPosition: "center",
								objectFit: "fill",
								borderRadius: "10px",
							}}
							className=" w-full h-full hover:scale-105 duration-500 flex items-center justify-center">
							<div className=" border-8 p-16">
								<h1 className="text-white text-5xl">بهترین معامله!!!</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
