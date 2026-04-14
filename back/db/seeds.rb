ai = Category.create!(name: "AI活用習慣")
algo = Category.create!(name: "アルゴリズム基礎")
db = Category.create!(name: "データベース")
web = Category.create!(name: "Web基礎")

Question.create!([
  { content: "エラーが出た時、まず何をしますか？", category: ai },
  { content: "AIの回答をそのまま使いますか？", category: ai },
  { content: "AIを1日回答を何回使っていますか？", category: ai },

  { content: "for文の役割を説明できますか？", category: algo },
  { content: "if文とfor文を組み合わせて書けますか？", category: algo },
  { content: "fizzbuzzの処理を自力で書けそうですか？", category: algo },

  { content: "N+1問題を知っていますか？", category: db },
  { content: "JOINの役割は説明できますか？", category: db },
  { content: "ORMについて説明できますか？", category: db },

  { content: "GETとPOSTの違いは？", category: web },
  { content: "404エラーとは何ですか？", category: web },
  { content: "HTTP通信を知っていますか？", category: web }
])
