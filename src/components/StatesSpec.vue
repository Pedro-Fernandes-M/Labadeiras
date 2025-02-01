<template>
  <div>
    <div
      class="flex"
      v-if="store.getters.getWeather != null"
    >
      <div class="container">
        <h3>
          {{ realTemp }}°C
          <br />
          Temperatura
        </h3>
        <div class="line"></div>
      </div>
      <div class="container">
        <h3>
          {{ humidity }}%
          <br />
          Umidade
        </h3>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const realTemp = computed(
  () =>
    store.getters.getWeather.current.apparent_temperature
);
const humidity = computed(
  () =>
    store.getters.getWeather.current.relative_humidity_2m
);
</script>

<style scoped>
.container {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.5rem;
}
.flex {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 1.5rem;
}
.container1 {
  display: flex;
  justify-content: center;
  padding: 0;
  margin-top: 2rem;
}
.line {
  height: 6px;
  width: 110%;
  margin-top: -8px;
  border-bottom: 1px solid black;
}

h3 {
  margin: 0;
  color: black;
  gap: 10px;
}
h2 {
  margin: 0;
  margin-top: 1rem;
  color: black;
}
</style>
