export const API_ENDPOINTS = {
	// Products
	PRODUCTS: `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`,
	PRODUCT_BY_ID: (id: number | string) =>
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`,
	PRODUCTS_CATEGORIES: `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/categories`,
	PRODUCTS_BY_CATEGORY: (category: string) =>
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/category/${category}`,
	PRODUCTS_LIMIT: (limit: number) =>
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/products?limit=${limit}`,
	PRODUCTS_SORT: (sort: "asc" | "desc") =>
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/products?sort=${sort}`,

	// Carts
	CARTS: `${process.env.NEXT_PUBLIC_API_BASE_URL}/carts`,
	CART_BY_ID: (id: number | string) =>
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/carts/${id}`,
	CARTS_BY_USER: (userId: number | string) =>
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/carts/user/${userId}`,
	CARTS_LIMIT: (limit: number) =>
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/carts?limit=${limit}`,
	CARTS_SORT: (sort: "asc" | "desc") =>
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/carts?sort=${sort}`,
	CARTS_DATE_RANGE: (startDate: string, endDate: string) =>
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/carts?startdate=${startDate}&enddate=${endDate}`,

	// Users
	USERS: `${process.env.NEXT_PUBLIC_API_BASE_URL}/users`,
	USER_BY_ID: (id: number | string) =>
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${id}`,
	USERS_LIMIT: (limit: number) =>
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/users?limit=${limit}`,
	USERS_SORT: (sort: "asc" | "desc") =>
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/users?sort=${sort}`,

	// Auth
	AUTH_LOGIN: `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
} as const;
