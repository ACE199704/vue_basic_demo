<template>
  <div id="app">
    <p>{{ count }}</p>
    <p>{{ completedTodos }}</p>
    <p>{{ completedTodosCnt }}</p>
    <!-- <p>{{ getTodosById(2) }}</p> -->

    <!-- <button @click="decreasement(1)">-</button>
    <span>{{ count }}</span>
    <button @click="increasement">+</button>-->

    <button @click="decrementCntAsync(1)">-</button>
    <span>{{ count }}</span>
    <button @click="incrementCntAsync">+</button>

    <!-- <p>{{ todos }}</p> -->
    <hr />
    <button @click="fecthTodos">Fetchtodos</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "app",
  components: {},
  //getters获取数据
  computed: mapGetters([
    "count",
    "completedTodos",
    "completedTodosCnt",
    "getTodosById"
  ]),
  // methods: {
  //   incrementCnt() {
  //     this.$store.dispatch("incrementCntAsync");
  //   },
  //   decrementCnt(n) {
  //     this.$store.dispatch("decrementCntAsync", n);
  //   },
  //   fetchtodos() {
  //     this.$store.dispatch("fecthTodos");
  //   }
  // }

  methods: mapActions(["incrementCntAsync", "decrementCntAsync", "fecthTodos"])
  // methods: mapMutations(["incrementCnt",  "decrementCnt"])
  // methods: {
  //   increasement() {
  //     this.$store.commit("incrementCnt");
  //   },
  //   decreasement(n) {
  //     this.$store.commit("decrementCnt", n);
  //   }
  // }
  // computed: mapState(["todos"])

  // computed: {
  //   count() {
  //     return this.$store.getters.count;
  //   },
  //   completedTodos() {
  //     return this.$store.getters.completedTodos;
  //   },
  //   completedTodosCnt() {
  //     return this.$store.getters.completedTodosCnt;
  //   },
  //   getTodosById() {
  //     return this.$store.getters.getTodosById;
  //   }
  // }

  //mapState获取数据
  // computed: mapState(["count", "todos"])

  //mapState获取数据二
  // computed: mapState({
  //   count: state => state.count,
  //   todos: state => state.todos
  // })
  //state获取数据
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  //   todos() {
  //     return this.$store.state.todos;
  //   }
  // }
};
</script>

<style></style>
