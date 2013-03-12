class HomeController < ApplicationController
	respond_to :json
  def index
  	@values = Value.all
  	render :nothing => true, :layout => "layouts/application"  
  end
end
