"use server";
import { signIn } from "@/auth";

export async function handleLogin(formData: FormData) {
	const loginType = formData.get("guest");
	await signIn("credentials", { redirectTo: "/api/auth/callback", loginType });
}
