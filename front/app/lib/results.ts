"use server";

import { getBackendJwt } from "./getBackendJwt";

export default async function fetchResults() {
	const jwt = await getBackendJwt();

	const res = await fetch(`http://localhost:3001/results`, {
		headers: {
			Authorization: `Bearer ${jwt}`,
		},
		cache: "no-store",
	});
	return res.json();
}
