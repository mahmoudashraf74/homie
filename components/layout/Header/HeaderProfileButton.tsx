import Link from "next/link";
import HeaderProfileIcon from "@/components/UI/HeaderIcons/HeaderProfileIcon";

const HeaderProfileButton = () => {
	return (
		<Link href="/profile" className="flex flex-row justify-center gap-1">
			<span className="hidden md:block capitalize whitespace-nowrap">
				Sign up
			</span>
			<HeaderProfileIcon />
		</Link>
	);
};

export default HeaderProfileButton;
