angular.module('DemoApp')
  .controller('JournalEntryController', JournalEntryController);

function JournalEntryController(){
  var self = this;
  self.newTitle = "";
  self.newBody = "";
  self.isPublic = true;
  self.greet = greet;
  self.entries = [];
  self.add = add;

//define a function
//set them above
  function greet(){
    console.log('hi');
  }

  function add(){
    var newEntry ={
      title: self.newTitle,
      body: self.newBody,
      isPublic: self.isPublic
    };
    self.entries.push(newEntry);
    console.log(self.entries);
  }
}
