import slider1 from "../server/public/assets/slider/1.jpg";
import slider2 from "../server/public/assets/slider/2.jpg";
import slider3 from "../server/public/assets/slider/3.jpg";
import slider4 from "../server/public/assets/slider/4.jpg";
import slider5 from "../server/public/assets/slider/5.jpg";

import secondSlider1 from "../server/public/assets/secondSlider/secondSlider1.jpg";
import secondSlider2 from "../server/public/assets/secondSlider/secondSlider2.jpg";
import secondSlider3 from "../server/public/assets/secondSlider/secondSlider3.jpg";
import secondSlider4 from "../server/public/assets/secondSlider/secondSlider4.jpg";

import today1 from "../server/public/assets/sendToday/today1.jpg";
import today2 from "../server/public/assets/sendToday/today2.jpg";
import today3 from "../server/public/assets/sendToday/today3.jpg";
import today4 from "../server/public/assets/sendToday/today4.jpg";
import today5 from "../server/public/assets/sendToday/today5.jpg";

import {
	FaChartPie,
	FaCreditCard,
	FaRegCalendarAlt,
	FaNewspaper,
} from "react-icons/fa";
import { CiStar, CiLocationOn } from "react-icons/ci";

import GraphicsCard from "../server/public/assets/mofid/graphicsCard.jpg";

import { MdKeyboardArrowDown } from "react-icons/md";

export const navLinks = [
	{
		title: "همه محصولات",
		icon: <MdKeyboardArrowDown />,
		link: "/allProducts",
	},
	{
		title: "لپتاپ",
		icon: <MdKeyboardArrowDown />,
		link: "/laptops",
	},
	{
		title: "کارت گرافیک",
		icon: <MdKeyboardArrowDown />,
		link: "/graphicsCard",
	},
	{
		title: "لوازم جانبی",
		icon: <MdKeyboardArrowDown />,
		link: "/accessories",
	},
	{
		title: "کنسول بازی",
		icon: <MdKeyboardArrowDown />,
		link: "/console",
	},
	{
		title: "موبایل",
		icon: <MdKeyboardArrowDown />,
		link: "/phone",
	},
	{
		title: "دوربین",
		icon: <MdKeyboardArrowDown />,
		link: "/camera",
	},
	{
		title: "لوازم خانگی",
		icon: <MdKeyboardArrowDown />,
		link: "/appliance",
	},
];

export const images = [
	{ url: slider1.src },
	{ url: slider2.src },
	{ url: slider3.src },
	{ url: slider4.src },
	{ url: slider5.src },
];

export const secondSliderImages = [
	{ url: secondSlider1.src },
	{ url: secondSlider2.src },
	{ url: secondSlider3.src },
	{ url: secondSlider4.src },
];

export let sendTodayTitle = "ارسال های امروز";
export let laptopSale = "بیشترین تخفیف های لپتاپ";
export const sendToday = [
	{
		image: today1.src,
		description:
			"کارت گرافیک زوتک مدل GeForce RTX 4090 Trinity OC حافظه 24 گیگابایت",
		price: "29,290,000 تومان",
	},
	{
		image: today2.src,
		description:
			"کارت گرافیک زوتک مدل GeForce RTX 4090 Trinity OC حافظه 24 گیگابایت",
		price: "29,290,000 تومان",
	},
	{
		image: today3.src,
		description:
			"کارت گرافیک زوتک مدل GeForce RTX 4090 Trinity OC حافظه 24 گیگابایت",
		price: "29,290,000 تومان",
	},
	{
		image: today4.src,
		description:
			"کارت گرافیک زوتک مدل GeForce RTX 4090 Trinity OC حافظه 24 گیگابایت",
		price: "29,290,000 تومان",
	},
	{
		image: today5.src,
		description:
			"کارت گرافیک زوتک مدل GeForce RTX 4090 Trinity OC حافظه 24 گیگابایت",
		price: "29,290,000 تومان",
	},
];

export const beneficialInfo = [
	{ image: GraphicsCard.src, title: "بهترین کارت گرافیک امسال کدام است؟" },
	{ image: GraphicsCard.src, title: "بهترین کارت گرافیک امسال کدام است؟" },
	{ image: GraphicsCard.src, title: "بهترین کارت گرافیک امسال کدام است؟" },
	{ image: GraphicsCard.src, title: "بهترین کارت گرافیک امسال کدام است؟" },
	{ image: GraphicsCard.src, title: "بهترین کارت گرافیک امسال کدام است؟" },
];

export const trust = [
	{
		icon: (
			<FaChartPie className="text-5xl text-gray-500 opacity-80 text-center" />
		),
		title: "مقایسه",
	},
	{
		icon: (
			<FaCreditCard className="text-5xl text-gray-500 opacity-80 text-center" />
		),
		title: "خرید اقساطی",
	},
	{
		icon: <CiStar className="text-5xl text-gray-500 opacity-80 text-center" />,
		title: "تضمین اصالت",
	},
	{
		icon: (
			<FaRegCalendarAlt className="text-5xl text-gray-500 opacity-80 text-center" />
		),
		title: "7 روز ضمانت",
	},
	{
		icon: (
			<CiLocationOn className="text-5xl text-gray-500 opacity-80 text-center" />
		),
		title: "ارسال سریع",
	},
	{
		icon: (
			<FaNewspaper className="text-5xl text-gray-500 opacity-80 text-center" />
		),
		title: "راهنما",
	},
];
