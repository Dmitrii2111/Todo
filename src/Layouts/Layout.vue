<template>
  <div class="layout-container" :class="$store.state.appTheme">
    <div class="wrapper">
      <Title></Title>
      <new-todo-input></new-todo-input>
      <todos-list v-if="$store.state.todosList.length"></todos-list>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title";
import store from "../store";
import NewTodoInput from "../components/New Todo Input";
import TodosList from "./TodosList";

export default {
  name: "Light-layout",
  components: {TodosList, NewTodoInput, Title},
  store,
}

</script>

<style scoped>
.wrapper {
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.layout-container{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.layout-container.dark {
  background: hsl(235, 21%, 11%) url("../images/bg-desktop-dark.jpg") no-repeat;
  background-size: 100%;
}
.layout-container.light {
  background: hsl(0, 0%, 98%) url("../images/bg-desktop-light.jpg") no-repeat;
  background-size: 100%;
}
</style>