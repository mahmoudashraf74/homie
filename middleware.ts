import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ar"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
	// Check if locale is in pathname
	const pathname = request.nextUrl.pathname;
	const pathnameLocale = locales.find(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
	);

	if (pathnameLocale) return pathnameLocale;

	// Check referer to preserve current locale when navigating
	const referer = request.headers.get("referer");
	if (referer) {
		try {
			const refererUrl = new URL(referer);
			const refererLocale = locales.find(
				(locale) =>
					refererUrl.pathname.startsWith(`/${locale}/`) ||
					refererUrl.pathname === `/${locale}`,
			);
			if (refererLocale) return refererLocale;
		} catch (e) {
			// Invalid referer URL, continue
		}
	}

	// Check Accept-Language header
	const acceptLanguage = request.headers.get("accept-language");
	if (acceptLanguage) {
		const preferredLocale = acceptLanguage
			.split(",")
			.map((lang) => lang.split(";")[0].trim().split("-")[0])
			.find((lang) => locales.includes(lang));

		if (preferredLocale) return preferredLocale;
	}

	return defaultLocale;
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Check if pathname already has a locale
	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
	);

	// Redirect root to default locale
	if (pathname === "/") {
		const locale = getLocale(request);
		request.nextUrl.pathname = `/${locale}`;
		return NextResponse.redirect(request.nextUrl);
	}

	// If no locale in pathname, redirect to appropriate locale
	if (!pathnameHasLocale) {
		const locale = getLocale(request);
		request.nextUrl.pathname = `/${locale}${pathname}`;
		return NextResponse.redirect(request.nextUrl);
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		// Skip all internal paths (_next, api, assets)
		"/((?!api|_next/static|_next/image|assets|favicon.ico).*)",
	],
};
