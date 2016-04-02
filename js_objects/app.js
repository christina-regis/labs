var movie = {
  title: 'kung fu panda',
  runtime: '1.5hrs',
  cast: ['Jack Black', 'Angelina Jolie', 'Lucy Lui'],
};

movie.rating = 4;
console.log(movie.rating);

movie.rating = 3.5;
console.log(movie.rating);
console.log(movie.cast[0]);

  var students = ['mark','john','harry','mark','mark','john','evan','smith'];

  var unique = {};

  for (var i=0; i<students.length; i++) {
    unique[students[i]] = true;
  }
/*  result:
  {
    mark: true
    john: true
    harry: true
    evan: true
    smith: true
  }*/

object.keys(unique)
// resulting array ['mark', 'john', 'harry', 'evan', 'smith']
