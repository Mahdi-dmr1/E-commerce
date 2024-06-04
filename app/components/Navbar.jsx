import Link from "next/link";
import logo1 from "../../server/public/assets/logo1.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { selectAll } from "@/slices/cartSlice";
import CustomNumeralNumericFormat from "./Price";
import { RxHamburgerMenu } from "react-icons/rx";
import { navLinks } from "@/data/data";
import Image from "next/image";

export default function Navbar({ handleSidebar }) {
	const cart = useSelector(selectAll);

	return (
		<nav className="bg-white shadow-lg   w-full px-44 z-10 top-0 fixed lg:static">
			<button
				onClick={() => handleSidebar()}
				className="absolute right-7 top-7 lg:hidden">
				<RxHamburgerMenu className="text-4xl" />
			</button>
			<div className="flex justify-center lg:justify-between">
				<div className="hidden lg:flex items-center justify-center text-gray-600 ">
					<Link href={"/cart"}>
						<h1 className="inline-flex text-lg border-2 p-3 rounded-lg">
							<TiShoppingCart className="text-4xl text-gray-500" />
							<div className="absolute px-1 text-xs -translate-y-1 translate-x-1 rounded-full bg-red-500">
								<h1 className="font-bold text-gray-200">
									{cart.length === 0 ? null : (
										<CustomNumeralNumericFormat
											value={cart.length}
											thousandSeparator=","
										/>
									)}
								</h1>
							</div>{" "}
							سبد خرید
						</h1>
					</Link>
				</div>
				<form className="hidden lg:flex items-center justify-center">
					<label
						htmlFor="default-search"
						className="mb-2 text-sm font-medium text-gray-900 sr-only ">
						Search
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
							<svg
								className="w-4 h-4 text-gray-500 hover:text-blue-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20">
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
						</div>
						<input
							type="search"
							className="block w-3/4 focus:w-full hover:w-full duration-700 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
							placeholder="محصول مورد نظر را پیدا کنید..."
						/>
					</div>
				</form>
				<div className="">
					<Link href={"/"} className="flex justify-center items-center">
						<h1 className="hidden lg:flex md:text-2xl">My Shop</h1>
						<Image
							alt="logo"
							src={logo1}
							className="rounded-full w-24 h-24 lg:flex"
						/>
					</Link>
				</div>
			</div>
			<div className="hidden lg:flex  items-center pb-2">
				{navLinks.map((info, key) => (
					<Link
						key={key}
						href={info.link}
						className="ml-3 text-gray-600 inline-flex">
						{info.title}
						<MdKeyboardArrowDown className="mt-1" />
					</Link>
				))}
			</div>
		</nav>
	);
}
