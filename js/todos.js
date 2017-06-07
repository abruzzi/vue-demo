var app = new Vue({
  el: '#root',

  data: {
    todos: [
      {desc: 'Todo 1', completed: true},
      {desc: 'Todo 2', completed: false},
      {desc: 'Todo 3', completed: true},
      {desc: 'Todo 4', completed: false}
    ]
  },

  computed: {
    incompletedTodos: function() {
      return this.todos.filter(function(todo) {
        return !todo.completed;
      })
    }
  }
})
