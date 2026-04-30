"use server"

import { getBackendJwt } from "./getBackendJwt"

export default async function submitAnswers(answers: { [key: number]: number }) {
  const jwt = await getBackendJwt()

  const res = await fetch("http://localhost:3001/results", {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${jwt}`,
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