class GenerateAdvice
  def initialize(scores, dependency_score)
    @scores = scores
    @dependency_score = dependency_score
  end

  def call
    build_message
  end

  private

  def build_message
    <<~ADVICE
    【AI活用】
    #{build_dependency_score_message(@dependency_score)}

    【アルゴリズム】
    #{build_algorithm_score_message(@scores[:algorithm])}

    【データベース】
    #{build_db_score_message(@scores[:db])}

    【Web基礎】
    #{build_web_score_message(@scores[:web])}
    ADVICE
  end

  def build_dependency_score_message(dependency_score)
    if dependency_score >= 70
      "AIにかなり頼りやすい状態です。\nまずはエラー文を読む、自分で原因を1つ考える、AIは最後に使う、の順で進めましょう。"
    elsif dependency_score >= 40
      "AIは使えていますが、少し頼りがちです。\nAIの答えをそのまま使わず、なぜそうなるかを1回確認する習慣をつけると伸びやすいです。"
    else
      "AIを比較的バランスよく使えています。\n今の使い方を続けながら、自力で考える時間も継続していきましょう。"
    end
  end

  def build_algorithm_score_message(algorithm_score)
    if algorithm_score < 5
      "アルゴリズム基礎はかなり弱めです。\nif文とfor文を使って、小さい処理を1つずつ書く練習から始めましょう。"
    elsif algorithm_score < 11
      "基本は押さえられています。\n次はコードの流れを自分の言葉で説明できるようにすると、理解が安定しやすいです。"
    else
      "アルゴリズム基礎はしっかりしています。\n簡単な課題を自力で組み立てる練習を続けるとさらに伸びます。"
    end
  end

  def build_db_score_message(db_score)
    if db_score < 6
      "データベース基礎は弱めです。\nまずはテーブル同士の関連付け、外部キー、JOINの役割を復習しましょう。"
    elsif db_score < 11
      "基礎はおおよそ理解できています。\n次はN+1問題のような実践的な観点を少しずつ学ぶと良いです。"
    else
      "データベースはバランスよく学べています。\n実装時にテーブル設計を意識しながら進めると強みになります。"
    end
  end

  def build_web_score_message(web_score)
    if web_score < 6
      "Web基礎は弱めです。\nGETとPOST、ステータスコード、CookieとSessionの違いを順番に整理しましょう。"
    elsif web_score < 11
      "Web基礎はおおよそ理解できています。\nHTTPの流れを自分で説明できるようにするとさらに安定します。"
    else
      "Web基礎はしっかりしています。\nAPI通信や画面遷移の仕組みを意識しながら学ぶと伸びやすいです。"
    end
  end
end
