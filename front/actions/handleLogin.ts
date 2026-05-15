"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createBackendJwt } from "@/app/lib/createBackendJwt";
import { signIn } from "@/auth";

export async function handleLogin(formData: FormData) {
	const isGuest = formData.get("guest") === "guest";

	let email: string;
	let provider: string;
	let uid: string;

	// ゲストログイン
	if (isGuest) {
		const guestResponse = await fetch(
			`${process.env.NEXT_PUBLIC_API_BASE_URL}/guest_login`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			},
		);

		if (!guestResponse.ok) {
			return;
		}

		const guestData = await guestResponse.json();

		email = guestData.user.email;
		provider = guestData.user.provider;
		uid = guestData.user.uid;

		await signIn("credentials", {
			redirect: false,
			loginType: "guest",
		});
	}
	// emailログイン
	else {
		const emailValue = formData.get("email");
		const password = formData.get("password");

		if (!emailValue || !password) {
			return;
		}

		email = String(emailValue);
		provider = "email";
		uid = email;

		await signIn("credentials", {
			redirect: false,
			loginType: "email",
			email,
			password,
		});
	}

	// Rails JWT作成
	const backendJwt = await createBackendJwt({
		email,
		provider,
		uid,
	});

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/login`,
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${backendJwt}`,
			},
			cache: "no-store",
		},
	);

	if (!response.ok) {
		return;
	}

	const data = await response.json();

	const cookieStore = await cookies();

	cookieStore.set(
		"current_user",
		encodeURIComponent(JSON.stringify(data.user)),
		{
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			path: "/",
		},
	);

	redirect("/mypage");
}
