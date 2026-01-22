"use client";

import HeaderCartIcon from "@/components/UI/HeaderIcons/HeaderCartIcon";
import NotificationBadge from "@/components/UI/NotificationBadge";
// import { useBootstrap } from "@/contexts/LayoutContext";
import Link from "next/link";

const HeaderCartButton = () => {
	// const { cart } = useBootstrap();
	return (
		<Link href="/cart" className="flex flex-row justify-center gap-1">
			<span className="hidden md:block capitalize whitespace-nowrap">
				my Cart
			</span>
			<div className="relative">
				<HeaderCartIcon />
				<NotificationBadge count={1} />
			</div>
		</Link>
	);
};

export default HeaderCartButton;
