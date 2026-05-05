class DependencyScore
  def initialize(answers)
    @answers = answers
  end

  def call
    scores = set_scores
    dependency_score = calculate_dependency(scores)
    [ scores, dependency_score ]
  end

  private

  def set_scores
    scores = {
      ai: 0,
      algorithm: 0,
      db: 0,
      web: 0
    }

    @answers.each do |question_id, choice_id|
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
    base = scores[:algorithm] + scores[:db] + scores[:web]
    ai = scores[:ai]
    adjusted_base = adjust_base(base)

    dependency = 0

    if ai == 0
      dependency = 100
    else
      ideal_base = ai * 3
      if adjusted_base >= ideal_base
        dependency = 0
      else
        dependency = ((ideal_base - adjusted_base).to_f / ideal_base) * 100
      end
    end

    dependency.floor
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
