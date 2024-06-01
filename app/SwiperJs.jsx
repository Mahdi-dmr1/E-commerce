import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
	Navigation,
	Pagination,
	Mousewheel,
	Keyboard,
	Autoplay,
} from "swiper/modules";
import Image from "next/image";

export default function SwiperJs({ images }) {
	return (
		<Swiper
			cssMode={true}
			navigation={true}
			pagination={{ clickable: true }}
			mousewheel={true}
			keyboard={true}
			modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			className="mySwiper  shadow-lg ">
			{images.map((data, key) => (
				<SwiperSlide key={key}>
					<Image width={800} height={200} loading="lazy" src={data.url} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
