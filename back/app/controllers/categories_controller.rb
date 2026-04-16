class CategoriesController < ApplicationController
  def index
    @categories = Category.all.includes(questions: :choices)
    render status: :ok,
    json: @categories.as_json(
      only: [ :id, :name ],
      include: {
        questions: {
          only: [ :id, :content ],
          include: {
            choices: {
              only: [ :id, :content, :score ]
            }
          }
        }
      },
    )
  end
end
