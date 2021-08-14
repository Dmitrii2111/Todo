<template>
  <div class="input-container">
    <input class="checkbox" type="checkbox" id="checkbox">
    <label for="checkbox"><span></span></label>
    <input type="text" placeholder="Create new TODO..." v-model="$store.state.newTodoValue" @keypress.enter="createNewTodo">
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "NewTodoInput",
  store,
  methods: {
    createNewTodo() {
      store.commit('createNewTodo')
    }
  }
}
</script>

<style >
.input-container{
  width: 100%;
  margin-top: 2rem;
  background-color: white;
  height: 2.5rem;
  border-radius: 5px;
  outline: none;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.input-container input {
  outline: none;
  margin-left: 1rem;
}



</style>