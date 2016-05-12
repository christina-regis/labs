angular.module('PokemonApp', [])
  .controller('PokemonController', PokemonController);

PokemonController.$inject = ['PokemonFactory'];

function PokemonController(PokemonFactory){
  var self = this;
  self.api = PokemonFactory;

  self.allPokemon = [];

  self.api.getAllPokemon()
    .success(function(data){
      console.log("Getting all pokemon: " + data.pokemon);
      self.allPokemon = data.pokemon;
    });

  self.pokemon = {};

  self.showPokemon = showPokemon;

  function showPokemon(id){
    console.log("show pokemon: " + id);
    self.api.getOnePokemon(id)
      .success(function(pokemon){
        self.pokemon = pokemon;
        console.log(self.pokemon);
      });
  }

}
