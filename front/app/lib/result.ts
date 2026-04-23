export default async function fetchResult(id: string) {
  const res = await fetch(`http://localhost:3001/results/${id}`, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("データが存在しません。")
  }
  return res.json()
}