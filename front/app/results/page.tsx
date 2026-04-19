'use client'

import fetchResults from "../lib/results"
import type { Result } from "@/types/result"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Result() {
  const [results, setResults] = useState<Result[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchResults()
      setResults(data)
    }

    fetchData()
  }, [])

  if (results.length === 0) return <p>結果はありません。</p>

  return (
    <div className="min-h-screen bg-gray-50 py-16">
    <h2 className="text-4xl font-bold text-center mb-10">診断結果一覧</h2>
      <div className="max-w-4xl mx-auto grid gap-6 px-4">
        {results.map((result) => (
          <Link
            key={result.id}
            href={`/results/${result.id}`}
            className="block"
          >
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-200 border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-gray-400">
                  {new Date(result.created_at).toLocaleDateString()}
                </p>

                <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                  ID: {result.id}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2">
                AI依存度：{result.dependency_score}%
              </h3>

              <p className="text-gray-600">
                {result.advice}
              </p>

              <p className="mt-4 text-blue-500 text-sm font-medium">
                詳細を見る →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}