import { Category } from "@/types/category"
import fetchCategories from "../lib/categories"

export default async function Question() {
  const categories = await fetchCategories()

  return (
    <div className="text-center flex flex-col gap-6 py-15">
      {categories.map((category: Category) => (
        <div className="flex flex-col gap-2" key={category.id}>
          <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
          {category.questions.map(question => (
            <p key={question.id}>{question.content}</p>
          ))}
        </div>
      ))}
    </div>
  )
}