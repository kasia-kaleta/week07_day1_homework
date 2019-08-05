import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
  		el: "#app",
  		data: {
        items: ['Clean windows', 'Buy wine', 'Throw away the rubbish'],
        newItem: ''
      },
    methods: {}
  });
});
