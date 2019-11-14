new Vue({
  el: '#vue-app',
  data() {
    return {
      cochangeColor: true,
      clchangeLength: true
    }
  },
  methods: {},
  computed: {
    compareClass() {
      return {
        changeColor: this.cochangeColor,
        changeLength: this.clchangeLength
      };
    }
  }

});