'use client'

import { Result } from "@/types/result";
import fetchResult from "../../lib/result"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

export default function ResultDetail() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<Result | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const data = await fetchResult(id as string)
        setResult(data)
      } catch (e) {
        console.error(e)
        setResult(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  if (isLoading) return <p>loading...</p>
  if (result === null) return <p>データが存在しません。</p>

  const data = [
  {
    category: "AI活用習慣",
    score: result.ai_score
  },
  {
    category: "アルゴリズム基礎",
    score: result.algorithm_score
  },
  {
    category: "データベース",
    score: result.db_score
  },
  {
    category: "Web基礎",
    score: result.web_score
  }
  ];

  return (
    <div className="text-center py-15">
      <h2 className="text-3xl font-bold mb-2">診断結果ページです。</h2>
      <div className="flex justify-center items-center gap-6">
        <RadarChart
          cx={300}
          cy={250}
          outerRadius={150}
          width={600}
          height={600}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="category" />
          <PolarRadiusAxis />
          <Radar
            name="result"
            dataKey="score"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
        <div key={result.id}>
          <p>AI依存度は{result.dependency_score}%です。</p>
          <p>{result.advice}</p>
        </div>
      </div>
    </div>
  )
}