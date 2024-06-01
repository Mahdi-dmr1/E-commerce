"use client";

import { useGetAllProductsQuery } from "@/slices/productApi";
import Navbar from "../Navbar";
import { MdKeyboardArrowDown } from "react-icons/md";

import ProductsPage from "../ProductsPage";
import Sidebar from "../Sidebar";
import { Suspense, useState } from "react";
import FilterByBrand from "../FilterByBrand";
import FilterByType from "../FilterByType";
import Loading from "../loading";

export default function AllProducts() {
	//sidebar
	const [sidebar, setSidebar] = useState(false);
	const handleSidebar = () => {
		setSidebar(!sidebar);
	};

	const { data, isLoading, isFetching } = useGetAllProductsQuery();

	return (
		<>
			<Navbar handleSidebar={handleSidebar} />

			{sidebar === true ? <Sidebar handleSidebar={handleSidebar} /> : null}

			<div className=" flex justify-center">
				<div className="grid grid-cols-5 gap-3 w-full lg:w-3/4 mt-24 lg:mt-10">
					{/*right side of the page */}
					<div className="hidden lg:flex">
						<div className="w-full">
							<FilterByType />
							{/* filtering the products*/}
							<FilterByBrand />
						</div>
					</div>
					{/*Left side of the page */}

					<div className=" col-span-5 lg:col-span-4 flex justify-center w-full">
						<Suspense fallback={<Loading />}>
							<ProductsPage information={data} title={"تمامی محصولات"} />
						</Suspense>
					</div>
				</div>
			</div>
		</>
	);
}
