require "rails_helper"

describe Workout do
	it {is_expected.to validate_presence_of :level}
end