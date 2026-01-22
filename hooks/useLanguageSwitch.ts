"use client";

import "client-only";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const LOCALES = ["en", "ar"] as const;
type Locale = (typeof LOCALES)[number];

export const useLanguageSwitch = () => {
	const params = useParams();
	const locale = (params?.locale as Locale) ?? "en";

	const pathname = usePathname();
	const searchParams = useSearchParams();

	const getLanguageSwitchUrl = useCallback(() => {
		if (!pathname) return "/";

		const segments = pathname.split("/").filter(Boolean);

		// Remove locale only if it is the first segment
		if (LOCALES.includes(segments[0] as Locale)) {
			segments.shift();
		}

		const newLocale: Locale = locale === "en" ? "ar" : "en";

		const searchString = searchParams?.toString();
		const newPath = `/${newLocale}/${segments.join("/")}`.replace(/\/$/, "");

		return `${newPath}${searchString ? `?${searchString}` : ""}`;
	}, [locale, pathname, searchParams]);

	return {
		currentLocale: locale,
		getLanguageSwitchUrl,
		isEnglish: locale === "en",
		isArabic: locale === "ar",
	};
};
