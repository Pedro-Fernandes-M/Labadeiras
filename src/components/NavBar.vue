<template>
  <div class="container1">
    <img
      class="logo"
      src="../assets/Tanque do Povo (1).png"
      alt="Tanque do Pobo"
    />
  </div>
  <div class="container">
    <RouterLink to="/">Diário</RouterLink>
    <RouterLink to="/year" class="item">
      Explorar
    </RouterLink>
    <RouterLink to="/previsions">Futuro</RouterLink>
  </div>
</template>

<script setup></script>

<style scoped>
.logo {
  border-radius: 50%;
  height: 25vh;
  border: 1px solid black;
}
.container1 {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  padding-bottom: 1rem;
}
.container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid black;
  padding-left: 2rem;
  padding-right: 2.1rem;
}
.item {
  position: absolute;
  left: 50%;
  transform: translateX(-50%); /* Center horizontally */
}
</style>
