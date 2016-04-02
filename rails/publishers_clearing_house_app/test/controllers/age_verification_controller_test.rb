require 'test_helper'

class AgeVerificationControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
