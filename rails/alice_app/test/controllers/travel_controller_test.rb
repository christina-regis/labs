require 'test_helper'

class TravelControllerTest < ActionController::TestCase
  test "should get elevator" do
    get :elevator
    assert_response :success
  end

  test "should get floor" do
    get :floor
    assert_response :success
  end

end
