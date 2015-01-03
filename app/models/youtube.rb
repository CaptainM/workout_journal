class Youtube

	
	CLIENT = YouTubeIt::Client.new(:dev_key => ENV["GOOGLE_YOUTUBE_API"])
	def self.search(parameter)
		response = CLIENT.videos_by(query: parameter)
		return response.videos.first.media_content.first.url.insert(4, 's')
	end

end