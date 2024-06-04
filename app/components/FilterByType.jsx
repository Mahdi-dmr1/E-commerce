import { MdKeyboardArrowDown } from "react-icons/md";

export default function FilterByType() {
	return (
		<div className="w-full bg-white rounded-lg shadow-lg p-4 mb-2">
			<h1 className=" text-gray-900">دسته بندی های مختلف</h1>
			<hr className="mt-2" />
			<div className="mt-4 inline-flex font-bold text-gray-600">
				<MdKeyboardArrowDown className="mt-1" /> تمامی محصولات(not active)
			</div>
			<div className="pr-4 mt-2">
				<h1 className="mb-1 text-gray-500">کامپیوتر</h1>
				<h1 className="mb-1 text-gray-500">لپتاپ</h1>
				<h1 className="mb-1 text-gray-500">کارت گرافیک</h1>
				<h1 className="mb-1 text-gray-500">لوازم جانبی</h1>
			</div>
		</div>
	);
}
