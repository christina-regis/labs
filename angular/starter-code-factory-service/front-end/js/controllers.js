angular
  .module("lightsaberApp")
  .controller("MainController", MainController);

MainController.$inject = ['Character'];

function MainController(Character){
  var self = this;

  // Blank new character for form
  self.character = {};

  // Fetch all characters
  //self.characters = Character.query();
  //fetch only 5 characters
  Character.query(function(data){
    var chars = [];
    for (i = 0; i < 5; i++) {
      chars.push(data[i]);
    }
    self.characters = chars;
  });

  // Fetch the clicked todo
  self.selectCharacter = function(character) {
    self.selectedCharacter = Character.get({id: character._id});
  };

  // Save as a Constructor
  // self.addCharacter = function() {
  //   var character = new Character(self.character);
  //   character.$save(function(){
  //     self.characters.push(character);
  //     self.character = {};
  //   });
  // };
////$resource has built in delete, update, etc
  // Create/Update a Character (Class Method)
  self.addCharacter = function() {
    if (self.character._id) {
      Character.update(self.character, function(){
        self.character = {};
      });
    } else {
      Character.save(self.character, function(character) {
        self.characters.push(character);
        self.character = {}
      });
    }
  };

  // Delete a Character
  self.deleteCharacter = function(character){
    Character.delete({id: character._id});
    var index = self.characters.indexOf(character);
    self.characters.splice(index, 1);
  }

  // Fill the form to edit a Character
  self.editCharacter = function(character){
    self.character = character;
  }
}
