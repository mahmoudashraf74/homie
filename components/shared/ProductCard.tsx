"use client";

import React from "react";
// import EmptyHreartIcon from "../UI/Icons/EmptyHreartIcon";
// import FilledHeartIcon from "../UI/Icons/FilledHeartIcon";
// import Rating from "../UI/Rating";
import { IProductCardProps } from "@/interfaces/components/ProductCard";
import CustomLinkComponent from "./CustomLinkComponent";

const ProductCard: React.FC<IProductCardProps> = ({
	id,
	slug,
	title,
	description,
	image,
	price,
	oldPrice,
	// isWishlisted: _isWishlisted,
	outOfStock = false,
	discountPercent,
	currency,
	rating,
	resources,
}) => {
	// const { isInWishlist, toggleWishlist } = useWishlistContext();
	// const isWishlisted = isInWishlist(String(id));

	return (
		<CustomLinkComponent href={`/${slug}`}>
			<div className="relative flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer h-[340px] md:h-[430px]">
				{outOfStock && (
					<div className="absolute top-3 left-3 bg-error-bg text-error-text text-xs font-semibold px-3 py-2 rounded-[8px] z-10">
						{resources?.Compare_nostock_button || "Out Of Stock"}
					</div>
				)}
				{/* <button
          aria-label="Add to wishlist"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(String(id));
          }}
          className="absolute top-3 right-3  cursor-pointer z-10"
        >
          {isWishlisted ? (
            <FilledHeartIcon className="w-5 h-5 fill-primary stroke-primary" />
          ) : (
            <EmptyHreartIcon className="w-5 h-5 stroke-foreground" />
          )}
        </button>{" "} */}
				<div className="relative w-full h-[250px] flex items-center justify-center overflow-hidden">
					<img
						src={image}
						alt={title}
						title={title}
						className="w-full h-full object-contain p-4"
					/>
				</div>
				<div className="flex flex-col p-4 flex-grow">
					{rating !== undefined && rating > 0 && (
						<section className="bg-secondary w-14 h-7 rounded-[50px] py-1.5 px-2 flex items-center gap-1 shadow-sm mb-4">
							{/* <Rating value={rating} readOnly size="sm" max={1} /> */}
							<span className="text-sm font-medium text-gray-800">
								{rating.toFixed(1)}
							</span>
						</section>
					)}
					<h3 className="text-sm sm:text-base font-medium text-black line-clamp-2 mb-1">
						{title}
					</h3>

					{description ? (
						<p className="text-xs text-gray-500 line-clamp-2 mb-2">
							{description}
						</p>
					) : null}

					<div className="mt-auto">
						<div className="flex flex-col gap-1 items-start justify-start">
							<span className="text-lg font-semibold text-foreground">
								{currency} {price?.toLocaleString()}
							</span>
							<div className="flex items-center gap-2 flex-wrap">
								{oldPrice ? (
									<span className="text-sm text-dark-gray line-through">
										{currency} {oldPrice?.toLocaleString()}
									</span>
								) : null}
								{discountPercent ? (
									<span className="text-xs text-red-400 font-medium">
										{resources?.Save} {(discountPercent * 100).toFixed(1)}%
									</span>
								) : null}
							</div>
						</div>
					</div>
				</div>
			</div>
		</CustomLinkComponent>
	);
};

export default ProductCard;
