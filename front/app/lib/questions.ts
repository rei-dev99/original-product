export default async function fetchQuestions() {
  const res = await fetch("http://localhost:3001/questions", {
    cache: "no-store"
  });
  const questions = await res.json();

  return questions
}