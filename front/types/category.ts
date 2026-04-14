export interface Category {
  id: number,
  name: string,
  questions: [{
    id: number,
    content: string
  }]
}