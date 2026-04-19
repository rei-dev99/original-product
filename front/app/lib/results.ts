export default async function fetchResults() {
  const res = await fetch(`http://localhost:3001/results`, {
    cache: "no-store"
  })
  return res.json()
}
