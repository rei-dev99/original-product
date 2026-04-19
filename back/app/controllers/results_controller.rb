class ResultsController < ApplicationController
  before_action :set_result, only: %i[ show destroy]

  def index
    @results = Result.all.order(created_at: :desc)
    render status: :ok, json: @results
  end

  def show
    render json: @result, status: :ok
  end

  def create
    answers = params[:answers]

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

    dependency_score = scores[:ai] * 2 - (scores[:algorithm] + scores[:db] + scores[:web])

    advice = generate_advice(scores, dependency_score)

    result = Result.create!(
      ai_score: scores[:ai],
      algorithm_score: scores[:algorithm],
      db_score: scores[:db],
      web_score: scores[:web],
      dependency_score: dependency_score,
      advice: advice
    )

    render json: result, status: :created
  end

  def destroy
    @result.destroy
  end

  private

  def set_result
    @result = Result.find(params[:id])
  end

  def generate_advice(scores, dependency_score)
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
