"use server";

import { WithGraphQLErrors } from "@/types/utilTypes";
import { getTokenFromCookies } from "../utils/getTokenFromCookies";

export type NextFetchRequestInit = RequestInit & {
	next?: {
		revalidate?: false | 0 | number;
		tags?: string[];
	};
	cache?: "force-cache" | "no-store";
};

export type FetcherOptions = {
	nextOptions?: NextFetchRequestInit;
	headers?: Record<string, string>;
};

export async function graphqlFetcher<TData = any, TVariables = any>(
	query: string,
	variables: TVariables,
	options?: FetcherOptions,
	needAuthToken?: boolean,
): Promise<WithGraphQLErrors<TData>> {
	const token = needAuthToken ? await getTokenFromCookies() : null;

	const fetchOptions: NextFetchRequestInit = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			...(token ? { Authorization: `Bearer ${token}` } : {}),
			...(options?.headers || {}),
		},
		body: JSON.stringify({ query, variables }),
		// Spread Next.js specific options
		...(options?.nextOptions || {}),
	};

	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/graphql`,
			fetchOptions,
		);

		const json = await res.json();

		return json;
	} catch (error) {
		throw new Error("GraphQL Fetcher Error: " + (error as Error).message);
	}
}
