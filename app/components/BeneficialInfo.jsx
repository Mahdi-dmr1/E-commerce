import Image from "next/image";

export default function BeneficialInfo({ beneficialInfo }) {
	return (
		<div className="bg-white shadow-lg rounded-lg p-2 mb-2 ">
			<h1 className="text-center text-lg mb-2">مطالب مفید</h1>
			<hr />

			{beneficialInfo.map((data, key) => (
				<div className="grid grid-cols-5" key={key}>
					<Image
						width={100}
						height={100}
						src={data.image}
						className="flex justify-start rounded-full  col-span-2 "
						alt="benefit"
					/>
					<h1 className=" text-gray-500 text-sm items-center flex justify-end col-span-3">
						{data.title}
					</h1>
				</div>
			))}
		</div>
	);
}
