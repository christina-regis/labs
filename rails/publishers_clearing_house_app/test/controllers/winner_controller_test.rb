require 'test_helper'

class WinnerControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
