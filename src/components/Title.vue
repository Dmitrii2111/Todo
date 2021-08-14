<template>
  <div class="title-container">
    <h1>todo</h1>
    <img v-if="$store.state.appTheme === 'light'" src="../images/icon-sun.svg" alt="" @click="changeThemeColor">
    <img v-else src="../images/icon-moon.svg" alt="" @click="changeThemeColor">
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "Title",
  store,
  methods: {
    changeThemeColor() {
      store.commit('changeThemeColor')
    }
  }
}
</script>

<style scoped>
.title-container{
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #f8f5f5;
  text-transform: uppercase;
  padding-top: 3rem;
}
h1 {
  letter-spacing: 10px;
}
img {
  align-self: center;
}
</style>