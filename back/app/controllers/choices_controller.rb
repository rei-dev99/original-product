class ChoicesController < ApplicationController
  def index
    @choices = Choice.all
    render status: :ok, json: @choices
  end
end
