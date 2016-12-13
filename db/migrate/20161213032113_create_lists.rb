class CreateLists < ActiveRecord::Migration[5.0]
  def change
    create_table :lists do |t|
      t.string :name
      t.datetime :due_date
      t.timestamps
    end
  end
end
