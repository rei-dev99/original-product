ai = Category.create!(name: "AI活用習慣")
algo = Category.create!(name: "アルゴリズム基礎")
db = Category.create!(name: "データベース")
web = Category.create!(name: "Web基礎")

q1 = Question.create!(content: "エラーが出た時、まず何をしますか？", category: ai)
q2 = Question.create!(content: "AIの回答に対してどうしますか？", category: ai)
q3 = Question.create!(content: "AIを1日何回使っていますか？", category: ai)

q4 = Question.create!(content: "for文の役割を説明できますか？", category: algo)
q5 = Question.create!(content: "if文とfor文を組み合わせて書けますか？", category: algo)
q6 = Question.create!(content: "fizzbuzzの処理を自力で書けそうですか？", category: algo)

q7 = Question.create!(content: "N+1問題を知っていますか？", category: db)
q8 = Question.create!(content: "JOINの役割は説明できますか？", category: db)
q9 = Question.create!(content: "ORMについて説明できますか？", category: db)

q10 = Question.create!(content: "GETとPOSTの違いは？", category: web)
q11 = Question.create!(content: "404エラーとは何ですか？", category: web)
q12 = Question.create!(content: "HTTP通信を知っていますか？", category: web)

Choice.create!([
  { content: "エラー文を読み、原因を考えて検索する", score: 3, question: q1 },
  { content: "自分でコードを見直す", score: 2, question: q1 },
  { content: "AIにそのまま貼り付ける", score: 1, question: q1 },

  { content: "理解できるまで読み直す", score: 3, question: q2 },
  { content: "なんとなく理解して使う", score: 2, question: q2 },
  { content: "そのままコピペする", score: 1, question: q2 },

  { content: "10回程度", score: 3, question: q3 },
  { content: "50回程度", score: 2, question: q3 },
  { content: "100回程度", score: 1, question: q3 },

  { content: "処理の流れを含めて説明できる", score: 3, question: q4 },
  { content: "繰り返し処理ということは分かる", score: 2, question: q4 },
  { content: "よく分からない", score: 1, question: q4 },

  { content: "問題に応じて使い分けられる", score: 3, question: q5 },
  { content: "なんとなく書ける", score: 2, question: q5 },
  { content: "書けない", score: 1, question: q5 },

  { content: "自力で書ける", score: 3, question: q6 },
  { content: "調べたりAIに聞けば書ける", score: 2, question: q6 },
  { content: "書けない", score: 1, question: q6 },

  { content: "説明できる", score: 3, question: q7 },
  { content: "聞いたことはある", score: 2, question: q7 },
  { content: "知らない", score: 1, question: q7 },

  { content: "どんな時に使うか説明できる", score: 3, question: q8 },
  { content: "名前は知っている", score: 2, question: q8 },
  { content: "分からない", score: 1, question: q8 },

  { content: "どんな時に使うか説明できて、フレームワークごとにORMを知っている", score: 3, question: q9 },
  { content: "なんとなく知っている", score: 2, question: q9 },
  { content: "分からない", score: 1, question: q9 },

  { content: "用途の違いまで説明できる", score: 3, question: q10 },
  { content: "見たことはある", score: 2, question: q10 },
  { content: "分からない", score: 1, question: q10 },

  { content: "原因と対処が分かる", score: 3, question: q11 },
  { content: "見たことはある", score: 2, question: q11 },
  { content: "分からない", score: 1, question: q11 },

  { content: "仕組みや構成、メソッドなど知っている", score: 3, question: q12 },
  { content: "なんとなく知っている", score: 2, question: q12 },
  { content: "分からない", score: 1, question: q12 }
])
