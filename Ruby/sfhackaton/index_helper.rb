# index_helper.rb
#run through all the images

helpers do

  def get_labels
    all_labels = []
    limit = 10 #temp
    counter = 0 #temp
    Dir.glob("**/*.jpg") do |image|
      all_labels += Image.new(file: image).labels
      counter += 1 #temp
      break if counter > 10 #temp
    end

    #saves all the count to a hash
    labels_count = {}
    uniq_labels = all_labels.uniq

    uniq_labels.each do |label|
      labels_count[label] = all_labels.count(label)
    end

    #sort
    labels_count.sort_by { |label, count| count}.reverse!
  end

end