class CategoriesController < ApplicationController
  def index
    @categories = Category.all.includes(:questions)
    render status: :ok,
    json: @categories.as_json(
      include: { questions: { only: [ :id, :content ] } },
      only: [ :id, :name ]
    )
  end
end
