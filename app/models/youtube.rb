class Youtube

	CLIENT = YouTubeIt::Client.new(:dev_key => "AIzaSyAk4KO7795jq910nc5MVwwll6peSFKw8TA")

	def self.search(parameter)
		response = CLIENT.videos_by(query: parameter)
		return response.videos.first.media_content.first.url
	end

end