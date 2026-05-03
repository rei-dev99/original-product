class GenerateAdvice
  def initialize(scores, dependency_score)
    @scores = scores
    @dependency_score = dependency_score
  end

  def call
    advice = build_message(@scores, @dependency_score)
    advice
  end

  private

  def build_message(scores, dependency_score)
    if dependency_score > 10
      "AIに頼りすぎです。まずは自力で考える時間を増やしましょう。"
    elsif scores[:algorithm] < 5
      "アルゴリズム理解が弱いです。for文やif文の基礎問題を解きましょう。"
    elsif scores[:db] < 5
      "DBの理解が不足しています。JOINやN+1問題を復習しましょう。"
    else
      "バランス良く学習できています。このまま継続しましょう。"
    end
  end
end