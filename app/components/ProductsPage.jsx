import Link from "next/link";

import { FaShoppingBasket } from "react-icons/fa";
import CustomNumeralNumericFormat from "./Price";

export default function ProductsPage({ information, title }) {
	return (
		<div className=" shadow-lg rounded-lg bg-white ">
			<h1 className="text-start p-4 text-gray-700 font-bold text-lg ">
				{title}
			</h1>
			<div className="flex justify-center items-center">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
					{information?.map((info, key) => (
						<div key={key} className="border p-2">
							<Link href={`/allProducts/${info.id}`}>
								<div className="flex justify-center p-5 h-1/2 overflow-hidden">
									<img
										loading="lazy"
										className="hover:scale-110 duration-150"
										alt="image"
										src={`http://localhost:9000/assets/${info.image}`}
									/>
								</div>

								<p className="text-sm text-gray-700 mt-10">
									{info.description}
								</p>
								<div className="flex justify-between mt-6">
									<FaShoppingBasket className="text-xl text-green-600" />
									<h1 className="text-end">
										<CustomNumeralNumericFormat
											value={info.price}
											thousandSeparator=","
											suffix={` تومان `}
										/>
									</h1>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
