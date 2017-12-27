require 'open-uri'
require 'json'

API_KEY = "b0242e0e-5ea4-4a35-a5b8-300e01bcaef1"

def get_sentiment(sentence)
  open("https://api.idolondemand.com/1/api/sync/analyzesentiment/v1?apikey=#{API_KEY}&text=#{sentence.gsub(' ', '%20')}").read
end

File.readlines("phrases.csv").each do |line|
  analysis = JSON.parse get_sentiment(line.chomp)
  puts "#{line.chomp} #{analysis["aggregate"]["sentiment"]}"
end


