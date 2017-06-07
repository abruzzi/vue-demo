Vue.component('todo', {
  template: '<li><slot></slot></li>'
})

Vue.component('todo-list', {
  template: '<ul><todo v-for="todo in todos">{{todo.desc}}</todo></ul>',
  data: function() {
    return {
      todos: [
        {desc: "hello"},
        {desc: "world"}
      ]
    }
  }
})

var app = new Vue({
  el: '#root'
})
