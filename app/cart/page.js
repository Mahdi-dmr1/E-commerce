"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaInfoCircle } from "react-icons/fa";

import { FaX } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
	addToCart,
	decreaseCart,
	getTotals,
	removeFromCart,
	selectAll,
} from "@/slices/cartSlice";
import { useEffect, useState } from "react";
import CustomNumeralNumericFormat from "../components/Price";
import Sidebar from "../components/Sidebar";

export default function Cart() {
	//sidebar
	const [sidebar, setSidebar] = useState(false);
	const handleSidebar = () => {
		setSidebar(!sidebar);
	};

	const cart = useSelector(selectAll);
	const { cartTotalAmount } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTotals());
	}, [cart, dispatch]);

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};

	const handleDecreaseCart = (product) => {
		dispatch(decreaseCart(product));
	};
	const handleRemoveFromCart = (product) => {
		dispatch(removeFromCart(product));
	};
	return (
		<>
			<Navbar handleSidebar={handleSidebar} />

			{sidebar === true ? <Sidebar handleSidebar={handleSidebar} /> : null}
			<div className="w-full">
				<div className="flex justify-center mt-24 lg:mt-6 w-full">
					<div className="grid grid-cols-10 gap-4 w-full md:w-3/5">
						<div className="lg:col-span-7 col-span-10">
							<div className="grid grid-cols-10 bg-white shadow-lg rounded-lg px-5">
								{cart.length === 0 ? (
									<div className="flex justify-center p-16 items-center col-span-10">
										<h1 className="text-2xl">سبد خرید شما خالی است😥🤷‍♂️</h1>
									</div>
								) : (
									cart.map((item) => (
										<>
											<div className="col-span-10 md:col-span-3 flex justify-center items-center">
												<button onClick={() => handleRemoveFromCart(item)}>
													<FaX className=" absolute text-red-500 ml-44 mb-40 " />
												</button>
												<img
													loading="lazy"
													className="p-10"
													src={`http://localhost:9000/assets/${item.image}`}
												/>
											</div>
											<div className="col-span-7 mt-5 ">
												<h1 className="">{item.description}</h1>
												<h1 className="text-gray-500 mt-12">{item.warranty}</h1>
												<div className="flex items-center">
													<button
														onClick={() => handleAddToCart(item)}
														className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
														+
													</button>
													<input
														value={item.cartQty}
														type="number"
														name="quantity"
														onChange={() => {}}
														className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-1/6 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
													/>
													<button
														onClick={() => handleDecreaseCart(item)}
														className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
														-
													</button>
												</div>
												<h1 className="text-red-500 text-end mt-12">
													<CustomNumeralNumericFormat
														value={item.price}
														thousandSeparator=","
														suffix={` تومان `}
													/>
												</h1>
											</div>
										</>
									))
								)}
							</div>
						</div>
						<div className="lg:col-span-3 col-span-10">
							<div className=" bg-gray-100 p-6 sticky top-0">
								{cartTotalAmount === 0 ? null : (
									<>
										<div className="flex justify-between mb-4 text-gray-700">
											<h1>مبلغ:</h1>
											<CustomNumeralNumericFormat
												value={cartTotalAmount}
												thousandSeparator=","
												suffix={` تومان `}
											/>
										</div>
										<div className="flex justify-between mb-4 text-gray-700">
											<h1>هزینه بسته یندی:</h1>
											<h1>وابسنه به آدرس</h1>
										</div>
										<hr className="mb-4" />
										<div className="flex justify-between mb-4">
											<h1>قابل پرداخت:</h1>
											<h1 className="text-lg">
												<CustomNumeralNumericFormat
													value={cartTotalAmount}
													thousandSeparator=","
													suffix={` تومان `}
												/>
											</h1>
										</div>
									</>
								)}

								<button
									style={{ backgroundColor: "#FFCF09" }}
									className="w-full rounded-md shadow-lg py-2">
									تکمیل خرید
								</button>
								<div className="px-5 py-4 flex">
									<FaInfoCircle className="text-5xl text-gray-600" />
									<h1 className=" text-gray-500 text-xs mt-3 mx-2">
										کالاهای موجود در سبد خرید شما ثبت و رزرو نشده‌اند، برای ثبت
										سفارش مراحل بعدی را تکمیل کنید.
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
