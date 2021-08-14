<template>
  <div class="list-footer">
    <div class="items-left">{{activeItemsCount}} items left</div>
    <div class="choose-status">
      <button
          :class="$store.state.activeButton === 'all' ? 'active' : ''"
          @click="madeActive('all')"
      >All</button>
      <button
          :class="$store.state.activeButton === 'active' ? 'active' : ''"
          @click="madeActive('active')"
      >Active</button>
      <button
          :class="$store.state.activeButton === 'completed' ? 'active' : ''"
          @click="madeActive('completed')"
      >Completed</button>
    </div>
    <div class="clear-completed">
      <button @click="clearCompleted">Clear Completed</button>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "TodosListFooter",
  store,
  methods: {
    madeActive(str) {
      store.commit('madeActive', str)
    },
    clearCompleted() {
      store.commit('clearCompleted')
    }
  },
  computed: {
    activeItemsCount() {
      return store.getters.activeTodos.length
    }
  }
}
</script>

<style scoped>
.active{
  color: hsl(220, 98%, 61%);
}
.listItem.dark{
  background-color: red;
}
.listItem.light{
  background-color: green;
}
.list-footer{
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: lightgrey;
}
.list-footer button {
  padding: 5px;
}
.list-footer button:hover{
  color: black;
}
.completed {
  text-decoration: line-through;
  color: lightgrey;
}
</style>