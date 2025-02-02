<template>
  <router-view />
</template>

<script setup>
import { useStore } from "vuex";
import { computed,watch } from "vue";

const store = useStore();
const socket = computed(()=>{
 return store.getters.getSocket
}
)
store.dispatch("connectToWebSocket");

watch(socket,(newValue)=>{
  if(newValue ==null){
    store.dispatch("connectToWebSocket");
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

.router-link-active {
  color: #26a0fc;
  text-decoration: underline;
}
a {
  text-decoration: none;
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
</style>
