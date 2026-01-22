// import { useWishlistContext } from "@/providers/WishlistProvider";
import NotificationBadge from "@/components/UI/NotificationBadge";
import Link from "next/link";
import HeaderWishIcon from "@/components/UI/HeaderIcons/HeaderWishIcon";

const HeaderWishlistButton = () => {
	// const { wishlistItems } = useWishlistContext();
	return (
		<Link
			href="/account/wishlist"
			className="flex flex-row justify-center gap-1">
			<span className="hidden md:block capitalize">Wishlist</span>
			<div className="relative">
				<HeaderWishIcon />
				<NotificationBadge count={2} />
			</div>
		</Link>
	);
};

export default HeaderWishlistButton;
