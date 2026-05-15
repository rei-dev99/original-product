import Link from "next/link";
import { handleLogin } from "@/actions/handleLogin";
import Login from "@/components/atoms/Login";

export default function LoginPage() {
	return (
		<div className="py-12 flex justify-center h-screen">
			<div className="w-full max-w-lg bg-white shadow-md rounded px-8 py-8">
				<form className="border-b border-dashed pb-6" action={handleLogin}>
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
							ログイン
						</button>
					</div>
				</form>
				<div className="flex justify-center mt-6">
					<Login />
				</div>
				<div className="flex justify-center mt-10">
					<Link
						href="/signup"
						className="rounded px-4 py-2 text-blue-500 transition-all hover:opacity-70"
					>
						新規登録はこちらから
					</Link>
				</div>
			</div>
		</div>
	);
}
