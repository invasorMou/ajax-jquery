# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

title = "lorem ipsum dolor sit ame duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor".split


10.times do |number|
  Post.create(title:"#{number+1}.-#{title.sample.capitalize} #{title.sample} #{title.sample} #{title.sample} #{title.sample}", body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
end
