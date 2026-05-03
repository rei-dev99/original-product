class DependencyScore
  def initialize(answers)
    @answers = answers
  end

  def call
    scores = set_scores(@answers)
    dependency_score = calculate_dependency(scores)
    [ scores, dependency_score ]
  end

  private

  def set_scores(answers)
    scores = {
      ai: 0,
      algorithm: 0,
      db: 0,
      web: 0
    }

    answers.each do |question_id, choice_id|
      choice = Choice.find(choice_id)
      question = choice.question
      category = question.category

      case category.name
      when "AI活用習慣"
        scores[:ai] += choice.score
      when "アルゴリズム基礎"
        scores[:algorithm] += choice.score
      when "データベース"
        scores[:db] += choice.score
      when "Web基礎"
        scores[:web] += choice.score
      end
    end

    scores
  end

  def calculate_dependency(scores)
    # 基礎合計
    base = scores[:algorithm] + scores[:db] + scores[:web]
    # aiスコア
    ai = scores[:ai]
    # 基礎力の倍率
    adjust_base = adjust_base(base)

    dependency = 0

    if ai == 0
      dependency
    else
      ideal_base = ai * 3
      if adjust_base >= ideal_base
        dependency = 0
      else
        dependency = ((ideal_base - adjust_base).to_f / ideal_base)
      end
    end

    dependency_score = (dependency * 100).floor

    dependency_score
  end

  def adjust_base(score)
    if score < 20
        score = score * 0.8
    elsif score < 30
        score = score * 0.9
    else
        score
    end
  end
end
