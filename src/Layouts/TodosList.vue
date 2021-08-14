<template>
  <component :is="componentName"></component>
</template>

<script>
import store from "../store";
import TodosListActive from "../components/TodosListActive";
import TodosListAll from "../components/TodosListAll";
import TodosListCompleted from "../components/TodosListCompleted";
export default {
  name: 'TodosList',
  store,
  components: {TodosListActive, TodosListAll, TodosListCompleted},
  computed: {
    componentName() {
      return 'todos-list-' + store.state.activeButton
    }
  }
};
</script>


<style scoped>

</style>
