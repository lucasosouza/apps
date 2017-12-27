# require 'net/http'
# require "uri"

# #image = File.open('10623585_10152459470958602_7670943775148039862_o.jpg', 'r')
# img_file = File.read('10623585_10152459470958602_7670943775148039862_o.jpg')
# #p file

# uri = URI("https://gateway.watsonplatform.net/visual-recognition-beta/api")
# req = Net::HTTP::Post.new(uri)
# req.basic_auth '4fd248c9-cf8a-4f10-b0ee-0dc50cb55791', 'N281pZdCrGZK'
# #req.set_content_type("image/jpeg")
# req.set_form_data("img_file" => img_file)

# res = Net::HTTP.start(uri.hostname, uri.port, :use_ssl => uri.scheme == 'https') do |http|
#   http.request(req)
# end

# case res
# when Net::HTTPSuccess, Net::HTTPRedirection
#   p res.body #p "worked"
# else
#   p "did not work" #res.value
# end


# #Net::HTTP.new(url.host, url.port)

# # headers = {"Content-Type" => "image/jpeg"}
# # response, body = req.post(url.path, image, headers)

# # post(url.path, image.read, headers)

# # image = File.read('image_path.jpg')

# require 'rest_client'

# #result=
# RestClient::Request.new(
#   :method => :post,
#   :url => 'https://gateway.watsonplatform.net/visual-recognition-beta/api',
#   :upload => File.new("10623585_10152459470958602_7670943775148039862_o.jpg", 'rb'),
#   :user => "4fd248c9-cf8a-4f10-b0ee-0dc50cb55791",
#   :password => "N281pZdCrGZK"
#   ).execute { |response, request, result, &block|
#   if [301, 302, 307].include? response.code
#     p "following"
#     response.follow_redirection(request, result, &block)
#   else
#     p response
#     #response.return!(request, result, &block)
#   end
# }

# #response = JSON.parse(result)


require 'net/http/post/multipart'
url = URI.parse('https://gateway.watsonplatform.net/visual-recognition-beta/api/v1/tag/recognize')
File.open("./10623585_10152459470958602_7670943775148039862_o.jpg") do |jpg|
  req = Net::HTTP::Post::Multipart.new url.path,
    "file" => UploadIO.new(jpg, "image/jpeg", "image.jpg")
  req.basic_auth '4fd248c9-cf8a-4f10-b0ee-0dc50cb55791', 'N281pZdCrGZK'
  res = Net::HTTP.start(url.host, url.port, :use_ssl => url.scheme == 'https') do |http|
    http.request(req)
  end
  p res.body
end



