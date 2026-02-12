import { Product } from "@/types/product";

interface ProductCardProps {
	product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
			<div className="relative w-full h-64 mb-4">
				<img
					src={product?.image}
					alt={product?.title}
					className="object-contain w-full h-full"
				/>
			</div>
			<h3 className="text-lg font-semibold mb-2 line-clamp-2">
				{product.title}
			</h3>
			<p className="text-gray-600 text-sm mb-2 line-clamp-3 flex-grow">
				{product.description}
			</p>
			<div className="flex justify-between items-center mt-auto">
				<span className="text-2xl font-bold text-blue-600">
					${product.price.toFixed(2)}
				</span>
				<div className="flex items-center">
					<span className="text-yellow-400 mr-1">⭐</span>
					<span className="text-sm text-gray-700">
						{product.rating.rate} ({product.rating.count})
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
