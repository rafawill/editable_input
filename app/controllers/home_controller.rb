class HomeController < ApplicationController
	respond_to :json
  def index
  	@value = Value.where('selected = ?',true)
  	@values = Value.all
  	render :nothing => true, :layout => "layouts/application"  
  end

  def create
    Value.update_all(:selected => 0)
  	value = Value.create({:name =>params[:name], :selected =>params[:selected]})
    render :json => value.as_json(value)  

  end	

  

  def update
  	Value.update_all(:selected => 0)
  	value = Value.find(params[:id])
  	value.update_attributes(:selected =>params[:selected])
  	render :json => value.as_json({})  
  end
end
