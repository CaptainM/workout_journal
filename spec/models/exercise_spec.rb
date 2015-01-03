require "rails_helper"

describe Exercise do 
	it { is_expected.to validate_presence_of :name}
end