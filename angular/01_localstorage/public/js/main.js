var todos = getTodos();
$(document).ready(function(){
  $('form').on('submit', function(event){
    event.preventDefault();

    var task = $('input[name=task]').val();
    $('.tasks').append('<li>' + task + '</li');
    $('input[name=task]').val('');
    todos.push(task);
    console.log(task);
    console.log(todos);
    saveTodos();
    render();

  });
});
function saveTodos(){
  localStorage.setItem('todos', JSON.stringify(todos));

}
function getTodos (){
  return JSON.parse(localStorage.getItem('todos')) || [];
}

function render(){
  $('.tasks').empty();
  getTodos().forEach(function(task){
    var $li = $('<li>');
    $li.text(task);
    $('.tasks').append($li);
  });
}
