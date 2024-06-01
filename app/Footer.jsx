import { FaOpencart } from "react-icons/fa6";
import { FaTwitter, FaLinkedin, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const mmdIt = [
	{ title: "مجوز و گواهینامه‌ها" },
	{ title: "قوانین و مقررات" },
	{ title: "حریم خصوصی" },
	{ title: "گارانتی در مقداد آی تی" },
	{ title: "گارانتی لپ تاپ" },
	{ title: "تماس با ما" },
	{ title: "استخدام" },
];

const guide = [
	{ title: "تضمین اصالت کالا" },
	{ title: "شرایط عودت کالا" },
	{ title: "نحوه ارسال کالا" },
	{ title: "راهنمای خرید" },
	{ title: "تخفیف‌ها" },
];

const benefit = [
	{ title: "قیمت گوشی سامسونگ" },
	{ title: "قیمت گوشی شیائومی" },
	{ title: "آیفون 13 پرو مکس" },
	{ title: "آیفون 13" },
	{ title: "قیمت لپ تاپ" },
	{ title: "کارت گرافیک rtx 3060" },
	{ title: "قیمت ساعت هوشمند" },
	{ title: "لیست بهترین های تکنولوژی" },
];

const services = [
	{ title: "مشاوره رایگان" },
	{ title: "پشتیبانی" },
	{ title: "تبلیغات" },
	{ title: "اعتبار سنجی خریداران" },
	{ title: "اسمبل آنلاین" },
	{ title: "خرید سازمانی" },
];

const contactIcons = [
	{ icon: <FaTwitter style={{ color: "#1DA1F2" }} /> },
	{ icon: <FaWhatsapp style={{ color: "#25D366" }} /> },
	{ icon: <FaLinkedin style={{ color: "#0077B5" }} /> },
	{ icon: <FaTelegram style={{ color: "#0088cc" }} /> },
];

export default function Footer() {
	return (
		<>
			<div className="flex justify-center">
				<div className="w-3/4 mt-20 inline-flex items-center justify-center  ">
					<div className="border-double border-t-4 w-full border-gray-500 inline-flex "></div>
					<FaOpencart className=" text-8xl mx-8 text-red-400" />
					<div className="border-double border-t-4 w-full border-gray-500 inline-flex"></div>
				</div>
			</div>

			<div className="w-full flex justify-center items-center mb-20">
				<div className="  lg:mx-96 mt-8">
					<p className="text-center">
						مجموعه My-freakin-shop در نظر دارد با استفاده از همفکری هموطنان
						گرامی در سرتاسر ایران امکانات منحصر به فردی را در سایت راه‌اندازی و
						اجرا نماید، لذا نظرات، ایده‌ها و ابزارهای مورد نظر خود را به ایمیل
						info@ThisIsFake.com ارسال نمایید.
					</p>
				</div>
			</div>
			<div className="w-full mt-8">
				<div className="hidden md:flex justify-center items-center">
					<div className="grid grid-cols-5 ">
						<div>
							<h1 className="text-md font-bold mb-3">مطالب مفید</h1>
							{mmdIt.map((data, key) => (
								<h1 key={key} className="text-gray-500 hover:text-red-400 mb-1">
									<GoDotFill className="inline-flex text-xs" />
									{data.title}
								</h1>
							))}
						</div>
						<div>
							<h1 className="text-md font-bold mb-3">مطالب مفید</h1>
							{guide.map((data, key) => (
								<h1 key={key} className="text-gray-500 hover:text-red-400 mb-1">
									<GoDotFill className="inline-flex text-xs" />
									{data.title}
								</h1>
							))}
						</div>
						<div>
							<h1 className="text-md font-bold mb-3">مطالب مفید</h1>
							{benefit.map((data, key) => (
								<h1 key={key} className="text-gray-500 hover:text-red-400 mb-1">
									<GoDotFill className="inline-flex text-xs" />
									{data.title}
								</h1>
							))}
						</div>
						<div>
							<h1 className="text-md font-bold mb-3">مطالب مفید</h1>
							{services.map((data, key) => (
								<h1 key={key} className="text-gray-500 hover:text-red-400 mb-1">
									<GoDotFill className="inline-flex text-xs" />
									{data.title}
								</h1>
							))}
						</div>
						<div className="flex justify-center ">
							<div className="grid grid-cols-2 lg:grid-cols-4">
								{contactIcons.map((data, key) => (
									<a
										key={key}
										href="#"
										className="mx-3 text-4xl hover:scale-105 duration-300">
										{data.icon}
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
