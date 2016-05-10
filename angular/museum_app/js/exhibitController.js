angular.module('MuseumApp')
  .controller('ExhibitController', ExhibitController);

function ExhibitController(){
  var self = this;
  self.image = 'http://www.metmuseum.org/~/media/Images/Exhibitions/2015/Sargent/Sargent_DIGITAL_Hero.jpg?h=360&mw=988&w=988';
}
