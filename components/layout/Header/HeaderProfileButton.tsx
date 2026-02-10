"use client";

import HeaderProfileIcon from "@/components/UI/HeaderIcons/HeaderProfileIcon";
import { useAuthPopup } from "@/providers/AuthPopupProvider";

const HeaderProfileButton = () => {
	const { openAuthPopup } = useAuthPopup();

	return (
		<button
			onClick={openAuthPopup}
			className="flex flex-row justify-center gap-1 hover:opacity-80 transition-opacity">
			<span className="hidden md:block capitalize whitespace-nowrap">
				Sign up
			</span>
			<HeaderProfileIcon />
		</button>
	);
};

export default HeaderProfileButton;
