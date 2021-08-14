<template>
  <div class="list-container">
    <div class="list-wrapper" v-for="todo in $store.state.todosList" :key="todo.id">
      <div class="todo"  >
        <input
            :id="todo.id"
            type="checkbox"
            class="listItem checkbox"
            :class="$store.state.appTheme"
            :checked=" todo.status === 'Completed' "
            v-on:change="changeStatus(todo.id)">
        <label :for="todo.id"><span></span></label>
        <span
            :class="todo.status === 'Completed' ? 'completed' : '' "
        >{{todo.value}}</span>
      </div>
      <span class="delete-button" @click="deleteTodo(todo.id)"></span>
    </div>
    <todos-list-footer></todos-list-footer>
  </div>
</template>

<script>

import store from "../store";
import TodosListFooter from "./TodosListFooter";
export default {
  name: 'TodosListAll',
  components: {TodosListFooter},
  store,
  methods: {
    changeStatus(id) {
      store.commit('changeStatus', id)
    },
    deleteTodo(id) {
      store.commit('deleteTodo', id)
    }
  }
};
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
