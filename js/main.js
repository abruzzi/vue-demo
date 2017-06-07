var app = new Vue({
  el: '#app',
  data: {
    isLoading: false,
    newName: '',
    names: ['John', 'Smith', 'Frank'],
    hint: 'Click to add new name to the list below'
  },
  methods: {
    addName: function() {
      this.names.push(this.newName);
      this.newName = '';
      this.isLoading = !this.isLoading;
    }
  }
})
