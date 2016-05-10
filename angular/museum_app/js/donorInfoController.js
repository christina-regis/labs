angular.module('MuseumApp')
  .controller('DonorInfoController', DonorInfoController);

function DonorInfoController(){
  var self = this;
  self.puppy = true;
  self.email = 'development@metmuseum.org';
  self.phone = '212-650-2425';
  self.fifty = '$50';
  self.hundred = '$100';
  self.two = '$250';
  self.five = '$500';
  self.ten = '$1000';
  self.top = '$5000';
}
