"use server";

import { getBackendJwt } from "./getBackendJwt";

export default async function fetchResults() {
	const jwt = await getBackendJwt();

	const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/results`, {
		headers: {
			Authorization: `Bearer ${jwt}`,
		},
		cache: "no-store",
	});
	return res.json();
}
