var app = new Vue({
  el: '#app',
  data: {
    newName: '',
    names: ['John', 'Smith', 'Frank']
  },
  methods: {
    addName: function() {
      this.names.push(this.newName);
      this.newName = '';
    }
  }
})
