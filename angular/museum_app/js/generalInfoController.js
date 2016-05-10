angular.module('MuseumApp')
  .controller('GeneralInfoController', GeneralInfoController);

function GeneralInfoController(){
  var self = this;
  self.friday = '10:00am - 9:00pm';
  self.monday = '10:00am - 5:30pm';
  self.saturday = '10:00am - 9:00pm';
  self.sunday = '10:00am - 5:30pm';
  self.thursday = '10:00am - 5:30pm';
  self.tuesday = '10:00am - 5:30pm';
  self.wednesday = '10:00am - 5:30pm';
  self.adults = '$25';
  self.seniors = '$17';
  self.students = '$12';
}
