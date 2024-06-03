export default function FilterByBrand() {
	return (
		<div className="w-full bg-white rounded-lg shadow-lg p-4">
			<h1 className="text-gray-600">بر اساس شرکت سازنده (not active)</h1>
			<hr className="mt-2 mb-4" />
			<div>
				<input type="checkbox" className="ml-2" />
				<label className="text-gray-600 text-sm">Asus</label>
			</div>

			<div>
				<input type="checkbox" className="ml-2" />
				<label className="text-gray-600 text-sm">Samsung</label>
			</div>
			<div>
				<input type="checkbox" className="ml-2" />
				<label className="text-gray-600 text-sm">Sony</label>
			</div>
			<div>
				<input type="checkbox" className="ml-2" />
				<label className="text-gray-600 text-sm">Acer</label>
			</div>
			<div>
				<input type="checkbox" className="ml-2" />
				<label className="text-gray-600 text-sm">Adata</label>
			</div>
			<hr className="mt-1" />
			<button
				className="w-full rounded-md py-1 mt-2"
				style={{ backgroundColor: "#FFCF09" }}>
				<h1 className="text-center">جستجو</h1>
			</button>
		</div>
	);
}
