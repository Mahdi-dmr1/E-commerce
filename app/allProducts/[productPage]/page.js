"use client";

import Navbar from "@/app/components/Navbar";
import { useGetProductQuery } from "@/slices/productApi";
import { useRouter, useParams } from "next/navigation";

import { SlHandbag, SlBadge } from "react-icons/sl";
import { IoIosLink } from "react-icons/io";
import { IoStatsChartSharp } from "react-icons/io5";
import { CiStar, CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import Footer from "@/app/components/Footer";

//swiper tryOut
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useDispatch } from "react-redux";
import { addToCart } from "@/slices/cartSlice";
import CustomNumeralNumericFormat from "@/app/components/Price";
import Sidebar from "@/app/components/Sidebar";

export default function ProductPage() {
	//sidebar
	const [sidebar, setSidebar] = useState(false);
	const handleSidebar = () => {
		setSidebar(!sidebar);
	};
	//add to cart
	const [qty, setQty] = useState(1);

	const dispatch = useDispatch();
	const router = useRouter();

	const handleAddToCart = (item) => {
		dispatch(addToCart(item));
		router.push("/cart");
	};

	//swiper tryOut
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	const params = useParams();

	console.log(params.productPage);

	const { data } = useGetProductQuery(params.productPage);

	return (
		<>
			<Navbar handleSidebar={handleSidebar} />

			{sidebar === true ? <Sidebar handleSidebar={handleSidebar} /> : null}
			<div className="w-full ">
				<div className="flex justify-center mt-24 lg:mt-8">
					<div className="grid grid-cols-10 gap-8 w-3/4 bg-white shadow-lg rounded-lg p-4 mb-2">
						<div className=" col-span-10 lg:col-span-4   ">
							<Swiper
								style={{
									"--swiper-navigation-color": "#fff",
									"--swiper-pagination-color": "#fff",
								}}
								spaceBetween={10}
								thumbs={{ swiper: thumbsSwiper }}
								modules={[FreeMode, Navigation, Thumbs]}
								className="mySwiper2">
								{data?.exteraImages.map((info, key) => (
									<SwiperSlide key={key}>
										<img
											alt="product"
											loading="lazy"
											src={`https://shopapi.mahdisportfolio.ir/assets/${info}`}
										/>
									</SwiperSlide>
								))}
							</Swiper>
							<Swiper
								onSwiper={setThumbsSwiper}
								spaceBetween={10}
								slidesPerView={4}
								freeMode={true}
								watchSlidesProgress={true}
								modules={[FreeMode, Navigation, Thumbs]}
								className="mySwiper mt-2">
								{data?.exteraImages.map((info, key) => (
									<SwiperSlide key={key}>
										<img
											alt="product-under"
											loading="lazy"
											src={`https://shopapi.mahdisportfolio.ir/assets/${info}`}
										/>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
						<div className="col-span-10 lg:col-span-6 ">
							<h1>{data?.description}</h1>
							<h1 className="text-gray-500">{data?.subDescription}</h1>
							<hr className="mt-2 mb-6" />
							<div className="flex mb-2">
								<SlBadge className="mt-1 text-blue-500" />
								نوع گارانتی:
							</div>
							<div className="text-gray-500 flex mb-2">
								{data?.warranty}
								<IoIosLink />
							</div>
							<h1 className="mb-2">نوع کالا:</h1>
							<h1 className="text-gray-500 mb-4">سفارشی</h1>
							<h1 className="mb-2">تعداد:</h1>
							<div className="mb-6">
								<CustomNumeralNumericFormat
									value={data?.price}
									thousandSeparator=","
									suffix={` تومان `}
									prefix={`قیمت: `}
								/>
							</div>
							<div className="flex mb-4">
								<button
									onClick={() => handleAddToCart({ ...data, cartQty: qty })}
									style={{ backgroundColor: "#FFCF09" }}
									className=" py-3  px-6 rounded-md flex text-gray-800">
									<SlHandbag className="ml-3  text-xl" />
									افزودن به سبد خرید
								</button>
								<button className="border-2 px-6 py-3 border-gray-400 rounded-md mx-4 flex text-gray-500 hover:text-gray-700">
									<IoStatsChartSharp className="ml-2" />
									مقایسه کن
								</button>
							</div>

							<h1 className="text-gray-500 text-sm mb-10">
								راهنما خرید اقساطی
							</h1>

							<div className="flex items-center justify-between px-10">
								<div>
									<div className="flex justify-center items-center">
										<CiStar className="text-4xl text-gray-500" />
									</div>
									<h1 className="text-gray-500">گارانتی اصالت</h1>
								</div>
								<div>
									<div className="flex justify-center items-center">
										<FaRegCalendarAlt className="text-4xl text-gray-500" />
									</div>
									<h1 className="text-gray-500">گارانتی اصالت</h1>
								</div>
								<div>
									<div className="flex justify-center items-center">
										<CiLocationOn className="text-4xl text-gray-500" />
									</div>
									<h1 className="text-gray-500">گارانتی اصالت</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className=" w-full flex justify-center">
					<div className="w-3/4 bg-white rounded-lg shadow-lg p-6">
						<h1 className="text-xl text-gray-900 mb-5">{data?.description}</h1>
						<h1 className="text-sm text-gray-800">{data?.aboutProductTitle}</h1>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
