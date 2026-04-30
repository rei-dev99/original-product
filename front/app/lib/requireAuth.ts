"use server";

import { redirect } from "next/navigation";
import { auth } from "@/auth";

export async function requireAuth(redirectTo = "/login") {
	const session = await auth();
	if (!session) {
		redirect(redirectTo);
	}
	return session;
}
