require 'rails_helper'

describe User do 
	it { is_expected.to validate_presence_of :username }
	it { is_expected.to validate_uniqueness_of :username }
	it { is_expected.to validate_presence_of :name }
	it { is_expected.to validate_presence_of :password}
	it { is_expected.to validate_presence_of :age}

	let(:caroline) {new_user = User.new(
			username: "awesome",
			name: "Caroline",
			password: "password",
			password_confirmation: "password",
			age: 43
		)}

	it "is valid with a username, name, and password" do
		expect(caroline).to be_valid
	end
end