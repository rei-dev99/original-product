"use server";
import { cookies } from "next/headers";
import { signOut } from "@/auth";

export async function handleLogout() {
	const cookieStore = await cookies();
	cookieStore.delete("current_user");
	await signOut({ redirectTo: "/login" });
}
