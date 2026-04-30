import Link from "next/link";
import { signIn } from "@/auth";
import Login from "@/components/atoms/Login";

export default function SignupPage() {
	return (
		<div className="py-12 flex justify-center h-screen">
			<div className="w-full max-w-lg bg-white shadow-md rounded px-8 py-8">
				<form
					className="border-b border-dashed pb-6"
					action={async (formData) => {
						"use server";

						const email = formData.get("email");
						const password = formData.get("password");

						const res = await fetch("http://localhost:3001/signup_email", {
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({ email, password }),
						});

						if (res.ok) {
							await signIn("credentials", {
								email,
								password,
								redirectTo: "/api/auth/callback",
							});
						} else {
							console.error("Signup failed");
						}
					}}
				>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							メールアドレス
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="email"
							placeholder="メールアドレス"
							name="email"
						/>
					</div>
					<div className="mb-6">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							パスワード
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							placeholder="パスワード"
							name="password"
						/>
					</div>
					<div className="flex justify-center">
						<button
							className="cursor-pointer bg-blue-500 hover:bg-blue-700 transition text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							登録する
						</button>
					</div>
				</form>
				<div className="flex justify-center mt-6">
					<Login />
				</div>
				<div className="flex justify-center mt-10">
					<Link
						href="/login"
						className="rounded px-4 py-2 text-blue-500 transition-all hover:opacity-70"
					>
						すでに登録済みの方はこちらから
					</Link>
				</div>
			</div>
		</div>
	);
}
