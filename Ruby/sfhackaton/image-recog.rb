# image-recognition.rb
require 'net/http/post/multipart'
require 'json'

class Image
  attr_reader :file, :response, :folder, :labels

  def initialize(args)
    @file = args[:file]
    File.dirname(__FILE__)
    watson!
    classify!
  end

  def watson!
    url = URI.parse('https://gateway.watsonplatform.net/visual-recognition-beta/api/v1/tag/recognize')
    File.open(@file) do |jpg|
      req = Net::HTTP::Post::Multipart.new url.path,
        "file" => UploadIO.new(jpg, "image/jpeg", "image.jpg")
      req.basic_auth '4fd248c9-cf8a-4f10-b0ee-0dc50cb55791', 'N281pZdCrGZK'
      res = Net::HTTP.start(url.host, url.port, :use_ssl => url.scheme == 'https') do |http|
        http.request(req)
      end
      @response = JSON.parse(res.body)
    end
  end

  def classify!
    @labels = @response["images"][0]["labels"].map do |label|
      label["label_name"]
    end
  end

end

# image = Image.new(file: "./10623585_10152459470958602_7670943775148039862_o.jpg")
# #puts image.response["images"][0]["labels"][0]["label_name"]






