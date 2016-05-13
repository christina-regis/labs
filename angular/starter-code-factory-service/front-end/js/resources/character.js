angular.module('lightsaberApp')
  .factory('Character', Character);

Character.$inject = ['$resource'];

function Character($resource){
  var CharacterResource = $resource('http://localhost:3000/characters/:id', {id: '@_id'}, {
    'update': { method:'PUT' }
  });

  Object.defineProperty(CharacterResource.prototype, 'firstName', {
    get: function(){
      if(this.name){
        //index of no space is -1, if there is no space just take the name
        //slice is looking for first space to cut out the first name
        if(this.name.indexOf(" ")=== -1) return this.name;
        return this.name.slice(0, this.name.indexOf(" "));
      }
    }
  });

  return CharacterResource;
}


