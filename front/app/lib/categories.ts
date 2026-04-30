"use server";

import { getBackendJwt } from "./getBackendJwt";

export default async function fetchCategories() {
	const jwt = await getBackendJwt();

	const res = await fetch("http://localhost:3001/categories", {
		headers: {
			Authorization: `Bearer ${jwt}`,
		},
		cache: "no-store",
	});
	const categories = await res.json();

	return categories;
}
