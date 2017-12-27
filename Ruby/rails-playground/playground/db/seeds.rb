# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

10.times do 
	Product.create(name: 'leather jackets')
end



Product.find(1).listing_id = Listing.create(price: 10).id
# Product.find(2).offer = Offer.create(price: 20).id
