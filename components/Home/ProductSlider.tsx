"use client";

import SwiperComponent from "@/components/shared/SwiperComponent";
import { Product } from "@/types/product";
import ProductCard from "../shared/ProductCard";

const ProductSlider = () => {
	return (
		<div className="w-full px-4">
			<h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>
			{/* <SwiperComponent
				data={products}
				autoplay={true}
				loop={true}
				spaceBetween={10}
				slidesPerView={4}
				navigation={true}
				pagination={false}
				className="product-slider"
				renderItem={(product: Product) => <ProductCard product={product} />}
				centerInsufficientSlides={true}
			/> */}
		</div>
	);
};

export default ProductSlider;
