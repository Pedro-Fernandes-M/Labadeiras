<template>
  <router-view />
</template>

<script setup>
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Disable F12, Ctrl+Shift+I, and Ctrl+U
document.addEventListener("keydown", (event) => {
    if (event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && event.key === "I") || 
        (event.ctrlKey && event.key === "J") || 
        (event.ctrlKey && event.key === "U")) {
        event.preventDefault();
    }
});
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
