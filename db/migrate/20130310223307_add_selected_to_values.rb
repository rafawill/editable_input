class AddSelectedToValues < ActiveRecord::Migration
  def change
    add_column :values, :selected, :boolean
  end
end
