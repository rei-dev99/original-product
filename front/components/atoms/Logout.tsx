"use client";
import { handleLogout } from "@/actions/handleLogout";

export default function Logout() {
  return (
    <form
      action={handleLogout}
      onSubmit={(e) => {
        if (!confirm("ログアウトしますか？")) {
          e.preventDefault();
        }
      }}
    >
      <button
        type="submit"
        className="text-black font-bold cursor-pointer border px-3 py-2 rounded-md hover:opacity-70 transition"
      >
        ログアウト
      </button>
    </form>
  );
}