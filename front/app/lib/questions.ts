"use server";

import { getBackendJwt } from "./getBackendJwt";

export default async function fetchQuestions() {
	const jwt = await getBackendJwt();

	const res = await fetch("http://localhost:3001/questions", {
		headers: {
			Authorization: `Bearer ${jwt}`,
		},
		cache: "no-store",
	});
	const questions = await res.json();

	return questions;
}
