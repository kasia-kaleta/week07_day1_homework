import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
      {name: 'Clean windows', priority: 'low'},
      {name: 'Buy wine', priority: 'high'},
      {name: 'Throw away the rubbish', priority: 'high'}
      ],
      newItem: ''
    },
    methods: {
      saveNewItem: function () {
        event.preventDefault();
        this.items.push(this.newItem);
        this.newItem = '';
      }
    }
  });
});
