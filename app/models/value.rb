class Value < ActiveRecord::Base
  attr_accessible :name, :selected

  def as_json(options)
    super(:only => [:id, :name, :selected])
  end
end
