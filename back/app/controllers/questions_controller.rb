class QuestionsController < ApplicationController
  skip_before_action :authenticatable!

  def index
    @questions = Question.all
    render status: :ok,
    json: @questions.as_json(
      include: { category: { only: [ :id, :name ] } },
      only: [ :id, :content ]
    )
  end
end
