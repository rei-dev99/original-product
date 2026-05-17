class Api::V1::HealthController < ApplicationController
  skip_before_action :authenticatable!

  def index
    render json: { status: "success" }
  end
end
