"use server";

import { getBackendJwt } from "./getBackendJwt";

export default async function fetchQuestions() {
	const jwt = await getBackendJwt();

	const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/questions`, {
		headers: {
			Authorization: `Bearer ${jwt}`,
		},
		cache: "no-store",
	});
	const questions = await res.json();

	return questions;
}
