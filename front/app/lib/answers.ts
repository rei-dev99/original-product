export default async function submitAnswers(answers: { [key: number]: number }) {
  const res = await fetch("http://localhost:3001/results", {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        answers: answers
    })
  })

  if (!res.ok) {
    throw new Error("送信失敗")
  }

  const data = await res.json()
  return data
}