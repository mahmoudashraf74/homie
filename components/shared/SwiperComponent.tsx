"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { twMerge } from "tailwind-merge";
import { SwiperProps } from "@/interfaces/components/SwiperPropsComponentInterfaces";

const SwiperComponent = <T,>({
	data,
	autoplay = true,
	loop = false,
	spaceBetween = 30,
	slidesPerView = 1,
	navigation = true,
	pagination = true,
	className,
	swiperWrapperClassName,
	swiperSlideClassName,
	renderItem,
	direction,
	centerInsufficientSlides,
}: SwiperProps<T>) => {
	return (
		<Swiper
			modules={[Autoplay, Navigation, Pagination]}
			autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
			loop={loop}
			spaceBetween={spaceBetween}
			slidesPerView={slidesPerView}
			navigation={navigation ? { enabled: true } : false}
			pagination={pagination ? { clickable: true } : false}
			className={className}
			wrapperClass={swiperWrapperClassName}
			direction={direction ? direction : "horizontal"}
			centerInsufficientSlides={centerInsufficientSlides}>
			{data?.map((item, index) => (
				<SwiperSlide
					key={index}
					className={twMerge("relative", swiperSlideClassName)}>
					{renderItem && item ? renderItem(item, index) : <>{item}</>}
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SwiperComponent;
