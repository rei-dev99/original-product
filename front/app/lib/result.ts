export default async function fetchResult(id: string) {
  const res = await fetch(`http://localhost:3001/results/${id}`, {
    cache: "no-store"
  })
  return res.json()
}