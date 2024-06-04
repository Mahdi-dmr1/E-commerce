import Image from "next/image";

export default function SendToday({ sendToday, title }) {
	return (
		<>
			<div className="inline-flex w-full ">
				<h1>{title}</h1>
				<div className="flex-grow border-t-2 mt-3 border-dotted mx-4 "></div>
				<h1 className=" text-xs text-gray-500 mt-1">مشاهده همه</h1>
			</div>
			<div className="mt-3">
				<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
					{sendToday.map((data, key) => (
						<div key={key}>
							<div className="flex justify-center h-1/2">
								<Image
									loading="lazy"
									alt="send-today"
									width={100}
									height={100}
									src={data.image}
								/>
							</div>

							<h1 className="text-xs mt-5 mx-4 text-gray-600">
								{data.description}
							</h1>
							<h1 className="mt-2 text-center text-sm">27,290,000 تومان</h1>
							<h1 className="mb-2 text-center line-through text-gray-400 text-sm">
								{data.price}
							</h1>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
