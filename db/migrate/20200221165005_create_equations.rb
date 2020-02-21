class CreateEquations < ActiveRecord::Migration[6.0]
  def change
    create_table :equations do |t|
      t.integer :operand1, null: false, default: 0
      t.integer :operand2, null: false, default: 0
      t.integer :operator, null: false, default: 0

      t.timestamps
    end
  end
end
