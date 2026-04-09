# API 設計

## ユーザー登録
ユーザーの新規登録を行います。

### エンドポイント
POST /api/v1/users

### リクエスト
{
  "email": "test@example.com",
  "password": "password"
}

### レスポンス
{
  "id": 1,
  "email": "test@example.com"
}

### ステータスコード
201 Created

### エラー
- 400 Bad Request（バリデーションエラー）
- 409 Conflict（email重複）

## ログイン
ユーザー認証を行います。

### エンドポイント
POST /api/v1/login

### リクエスト
{
  "email": "test@example.com",
  "password": "password"
}

### レスポンス
{
  "token": "jwt_token"
}

### ステータスコード
200 OK

### エラー
- 401 Unauthorized（認証失敗）

## 診断結果保存
ログインユーザーの診断結果を保存します。

### エンドポイント
POST /api/v1/results

### ヘッダー
Authorization: Bearer {token}

### リクエスト
{
  "ai_score": 5,
  "algorithm_score": 3,
  "db_score": 4,
  "web_score": 2,
  "dependency_score": 7,
  "advice": "AIに頼りすぎる傾向があります..."
}

### レスポンス
{
  "id": 1,
  "created_at": "2026-04-09T10:00:00Z"
}

### ステータスコード
201 Created

### エラー
- 401 Unauthorized（未ログイン）
- 400 Bad Request（不正データ）

## 診断履歴取得
ログインユーザーの診断履歴を取得します。

### エンドポイント
GET /api/v1/results

### ヘッダー
Authorization: Bearer {token}

### レスポンス
[
  {
    "id": 1,
    "ai_score": 5,
    "algorithm_score": 3,
    "db_score": 4,
    "web_score": 2,
    "dependency_score": 7,
    "advice": "AIに頼りすぎる傾向があります...",
    "created_at": "2026-04-09T10:00:00Z"
  },
  {
    "id": 2,
    ...
  }
]

### ステータスコード
200 OK

### エラー
- 401 Unauthorized
