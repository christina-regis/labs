require 'test_helper'

class CharactersControllerTest < ActionController::TestCase
  test "should get hatter" do
    get :hatter
    assert_response :success
  end

  test "should get queen" do
    get :queen
    assert_response :success
  end

end
