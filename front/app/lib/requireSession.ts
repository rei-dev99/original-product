"use server";

import { redirect } from "next/navigation";
import { auth } from "@/auth";

export async function requireSession(redirectTo = "/mypage") {
	const session = await auth();
	if (session) {
		redirect(redirectTo);
	}
	return session;
}
