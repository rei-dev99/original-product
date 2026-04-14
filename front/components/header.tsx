import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <h1 className="text-center text-3xl font-bold text-white">理解負債チェッカー</h1>
      <p className="text-center text-xl text-white">〜わかるコード診断〜</p>
      <nav className="mt-4 text-center space-x-4">
        <Link
          href="/"
          className="rounded px-4 py-2 text-white transition-all hover:bg-blue-700"
        >
          トップ
        </Link>
        <Link
          href="/question"
          className="rounded px-4 py-2 text-white transition-all hover:bg-blue-700"
        >
          質問
        </Link>
        <Link
          href="/result"
          className="rounded px-4 py-2 text-white transition-all hover:bg-blue-700"
        >
          診断結果
        </Link>
      </nav>
    </header>
  )
}