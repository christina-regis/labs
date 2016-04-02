require 'test_helper'

class CongratsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
