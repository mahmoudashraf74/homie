"use client";
import MenuIcon from "@/components/UI/HeaderIcons/MenuIcon";
import Link from "next/link";
import HeaderWishlistButton from "./HeaderWishlistButton";
import HeaderCartButton from "./HeaderCartButton";
import HeaderLocalizeButton from "./HeaderLocalizeButton";
import { useParams } from "next/navigation";
import HeaderProfileButton from "./HeaderProfileButton";

const Header = () => {
	return (
		<header className="sticky top-0 z-50 bg-white lg:py-3 max-lg:pt-[18px] max-lg:pb-3 border-b border-border-secondary">
			<section className="flex items-center lg:2xl:justify-between lg:gap-6 gap-5 justify-between section-inline-padding lg:px-[inherit] px-0">
				{/* Logo & Search Section - Desktop */}
				<section className="lg:flex items-center gap-7 w-[70%] hidden">
					<Link href="/" className="flex-shrink-0">
						<img
							src="/assets/images/HOMIE-logo.jpeg"
							alt="Homie Logo"
							className="w-50 "
						/>
					</Link>
					{/* <HeaderSearch /> */}
				</section>
				<div className="flex items-center md:gap-5 lg:hidden">
					<button
						aria-label="menu-nav"
						type="button"
						className="cursor-pointer"
						// onClick={() => setIsMobileMenuOpen(true)}
					>
						<MenuIcon width={20} height={20} />
					</button>
					<Link href="/" className="flex-shrink-0">
						<img
							src="/assets/images/HOMIE-logo.jpeg"
							alt="homie Logo"
							className="w-35 h-15"
							object-fit="contain"
						/>
					</Link>
				</div>
				<section className="flex items-center gap-2 md:gap-4 h-full">
					<HeaderLocalizeButton />
					<HeaderWishlistButton />
					<HeaderCartButton />
					<HeaderProfileButton />
				</section>
			</section>
		</header>
	);
};

export default Header;
