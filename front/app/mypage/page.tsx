import Link from "next/link";
import Logout from "@/components/atoms/Logout";
import { requireAuth } from "../lib/requireAuth";

export default async function Mypage() {
	const session = await requireAuth();

	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50">
			<main className="flex flex-1 w-full max-w-3xl flex-col py-32 px-16 bg-white">
				<h2 className="text-3xl font-bold mb-6 border-b-2 pb-4">マイページ</h2>
				<p className="mt-2 text-slate-600">
					こんにちは、{session.user?.email}さん
				</p>
				<div className="mt-6 flex flex-col md:flex-row gap-4">
					<Link
						href="/question"
						className="rounded-2xl bg-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600"
					>
						診断を始める
					</Link>
					<Link
						href="/results"
						className="rounded-2xl bg-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
					>
						診断結果を見る
					</Link>
				</div>
				<div className="mt-10">
					<Logout />
				</div>
			</main>
		</div>
	);
}
