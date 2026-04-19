'use client'

import { Category } from "@/types/category"
import fetchCategories from "../lib/categories"
import { useEffect, useState } from "react"
import submitAnswers from "../lib/answers"
import { useRouter } from "next/navigation"

export default function Question() {
  const [categories, setCategories] = useState<Category[]>([])
  const [answers, setAnswers] = useState<{ [key: number]: number }>({})

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCategories()
      setCategories(data)
    }

    fetchData()
  }, [])

  const handleChange = (questionId: number, choiceId: number) => {
    setAnswers({
      ...answers,
      [questionId]: choiceId
    })
  }

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const result = await submitAnswers(answers)
      router.push(`/results/${result.id}`)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="text-center flex flex-col gap-6 py-15">
      {categories.map((category) => (
        <div className="flex flex-col gap-2" key={category.id}>
          <h2 className="text-3xl font-bold mb-4">{category.name}</h2>

          {category.questions.map(question => (
            <div key={question.id}>
              <h3 className="text-2xl font-bold mb-2">{question.content}</h3>

              <div className="flex flex-col gap-2">
                {question.choices.map(choice => (
                  <label key={choice.id}>
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={choice.id}
                      onChange={() =>
                        handleChange(question.id, choice.id)
                      }
                    />
                    {choice.content}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
      <div>
        <button className="px-6 py-2 bg-sky-500 hover:bg-sky-700 rounded-2xl text-white" type="submit">送信</button>
      </div>
    </form>
  )
}