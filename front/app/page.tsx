import Login from "@/components/atoms/Login";
import Logout from "@/components/atoms/Logout";
import { requireAuth } from "./lib/requireAuth";

export default async function Home() {
  const session = await requireAuth()

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col py-32 px-16 bg-white dark:bg-black sm:items-start">
        <p>こんにちは、{session.user?.email}さん</p>
        {session ? <Logout /> : <Login />}
      </main>
    </div>
  );
}
