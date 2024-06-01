"use client";

import { useGetAllProductsQuery } from "@/slices/productApi";
import Navbar from "../Navbar";
import { MdKeyboardArrowDown } from "react-icons/md";

import ProductsPage from "../ProductsPage";
import Sidebar from "../Sidebar";
import { useState } from "react";
import FilterByBrand from "../FilterByBrand";
import FilterByType from "../FilterByType";

export default function Accessories() {
	//sidebar
	const [sidebar, setSidebar] = useState(false);
	const handleSidebar = () => {
		setSidebar(!sidebar);
	};

	const { data } = useGetAllProductsQuery();
	var accessories = data?.filter((element) => element.type === "accessory");

	return (
		<>
			<Navbar handleSidebar={handleSidebar} />

			{sidebar === true ? <Sidebar handleSidebar={handleSidebar} /> : null}
			<div className=" flex justify-center ">
				<div className="grid grid-cols-5 gap-3 w-full lg:w-3/4 mt-24 lg:mt-10">
					{/*right side of the page */}
					<div className="hidden lg:flex">
						<div className="w-full">
							{/* filtering the products by type*/}
							<FilterByType />
							{/* filtering the products by brand*/}
							<FilterByBrand />
						</div>
					</div>
					{/*Left side of the page */}
					<div className=" col-span-5 lg:col-span-4 flex justify-center w-full">
						<ProductsPage information={accessories} title={"لوازم جانبی"} />
					</div>
				</div>
			</div>
		</>
	);
}
