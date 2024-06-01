import { FaX } from "react-icons/fa6";
import { navLinks } from "@/data/data";
import Link from "next/link";

export default function Sidebar({ handleSidebar }) {
	return (
		<div className="fixed lg:hidden right-0 h-full w-2/3 md:w-1/3 top-0  bg-gray-100 z-50 shadow-xl overflow-y-scroll ">
			<button onClick={() => handleSidebar()} className="absolute left-5 top-5">
				<FaX className="text-gray-400 hover:text-gray-600" />
			</button>

			<div className="mt-16  mr-10">
				{navLinks.map((info, key) => (
					<div key={key} className="my-3  text-gray-600">
						<Link href={info.link}>-{info.title}</Link>
					</div>
				))}
				<Link href={"/cart"} className="text-gray-600">
					سبد خرید{" "}
				</Link>
			</div>
			<h1 className="mt-10 text-center">
				Created with love by <span className="text-red-700">Damirchi</span>
			</h1>
		</div>
	);
}
