<template>
  <v-app>
    <v-main>
      <layout></layout>
    </v-main>
  </v-app>
</template>

<script>
import Layout from "./Layouts/Layout";
import store from "./store";
export default {
  name: 'App',
  store,
  components: {
    Layout,
  },
};
</script>
