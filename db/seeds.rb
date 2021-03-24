# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
x = 0
y = 0

41.times do
  41.times do
    Cell.create(x_position: x, y_position: y, is_alive: false)
    puts "created cell x = #{x}, y = #{y}!"
    x += 1
  end
  x = 0
  y += 1
end
