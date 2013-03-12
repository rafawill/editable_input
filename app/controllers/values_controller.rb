class ValuesController < ApplicationController
	respond_to :json

  def index
  value = Value.find_by_selected(true)
  respond_with value
  end

  def list
  	value = Value.all
    respond_with value
  end

  def create
  	Value.update_all(:selected => false)
  	value = Value.create({:name =>params[:name], :selected =>params[:selected]})
    respond_with value
  end

  def update
  	Value.update_all(:selected => false)
  	value = Value.find(params[:id])
  	value.update_attributes(:selected =>params[:selected])
  	respond_with value
  end
end
