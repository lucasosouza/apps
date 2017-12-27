class Design < ActiveRecord::Base
	has_many :comments

	has_attached_file :photo, 
		:styles => { :medium => "300x300>", :thumb => "100x100>" }

	validates_attachment :photo, :content_type => { :content_type => ["image/jpeg", "image/gif", "image/png"] }


end

		# :storage => :s3,
		# :s3_credentials => File.join(Rails.root, 'config', 'amazonS3.yml'),
		# :s3_host_alias => 'http://s3-sa-east-1.amazonaws.com/experiments.moodboard',
		# :s3_url_options => ':CNAME'
