class Api::V1::ChoicesController < ApplicationController
  def index
    @choices = Choice.all
    render status: :ok, json: @choices
  end
end
