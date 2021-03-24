class CreateCells < ActiveRecord::Migration[6.1]
  def change
    create_table :cells do |t|
      t.integer :x_position, null: false
      t.integer :y_position, null: false
      t.boolean :is_alive, default: false
      t.timestamps
    end
  end
end
