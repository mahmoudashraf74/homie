import Link from "next/link";
import HeaderGlobalIcon from "@/components/UI/HeaderIcons/HeadersGlobalIcon";
import { useLanguageSwitch } from "@/hooks/useLanguageSwitch";

const HeaderLocalizeButton = () => {
	const { getLanguageSwitchUrl, isEnglish } = useLanguageSwitch();

	return (
		<Link
			href={getLanguageSwitchUrl()}
			className="flex flex-row justify-center gap-1">
			{isEnglish ? "العربيه" : "EN"}

			<HeaderGlobalIcon className="hidden md:block" />
		</Link>
	);
};

export default HeaderLocalizeButton;
