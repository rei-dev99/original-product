export interface Result {
  id: number,
  ai_score: number,
  algorithm_score: number,
  db_score: number,
  web_score: number,
  dependency_score: number,
  advice: string,
  created_at: Date
}