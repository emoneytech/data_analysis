class AddPostgisToDatabase < ActiveRecord::Migration[6.1]
  def change
    execute("CREATE EXTENSION postgis;")
  end
end
