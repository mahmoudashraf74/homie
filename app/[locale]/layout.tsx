import Header from "@/components/layout/Header/Header";

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	const isArabic = locale === "ar";
	const direction = isArabic ? "rtl" : "ltr";
	return (
		<>
			<div
				dir={direction}
				className="min-h-screen bg-background text-foreground">
				<Header />
				<main className="min-h-screen-minus-header section-inline-padding">
					{children}
				</main>
			</div>
		</>
	);
}
