class HomeController < ApplicationController
	respond_to :json
  def index
  	render :nothing => true, :layout => "layouts/application"  
  end
end
