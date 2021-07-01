class AddPositionableTypeIndexToPositions < ActiveRecord::Migration[6.1]
  def change
    add_index :positions, :positionable_type
  end
end
