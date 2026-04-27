class HealthController < ApplicationController
  skip_before_action :authenticatable!

  def index
    render json: { status: "success" }
  end
end
