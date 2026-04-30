"use server";

import { getBackendJwt } from "./getBackendJwt";

export default async function fetchResult(id: string) {
	const jwt = await getBackendJwt();

	const res = await fetch(`http://localhost:3001/results/${id}`, {
		headers: {
			Authorization: `Bearer ${jwt}`,
		},
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error("データが存在しません。");
	}
	return res.json();
}
