"use client";
import { handleGoogleLogin } from "@/actions/handleGoogleLogin";

export default function Login() {
	return (
		<form action={handleGoogleLogin}>
			<button
				type="submit"
				className="cursor-pointer border px-3 py-2 rounded-md hover:opacity-70 transition"
			>
				Google でログイン
			</button>
		</form>
	);
}
