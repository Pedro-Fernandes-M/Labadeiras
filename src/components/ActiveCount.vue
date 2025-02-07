<template>
  <div class="container1">
    <h2>
      {{ formattedDate }}
    </h2>
  </div>
  <div class="flex">
    <div class="container" :class="[bg]">
      <h3>
        {{ count }}
        <br />
        Ativos
      </h3>
      <div class="line"></div>
    </div>
    <div class="container">
      <h3>
        {{ percentage=='NaN'? "--": percentage }}
        <br />
        Ocupação
      </h3>
      <div class="line"></div>
    </div>
    <div class="container">
      <h3>
        {{ avg=='NaN'? "--": avg }}
        <br />
        Média
      </h3>
      <div class="line"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const count = computed(() => {
  if (store.getters.getCount == -1) return "--";
  else if(store.getters.getCount == null) return "-";
  else return store.getters.getCount;
});
let avgSum = 0;
const avg = computed(() => {
  const day = store.getters.getDaily;
  if (day == null) return "--";
  day.forEach((element) => {
    avgSum += parseInt(element.count);
  });
  return (avgSum / day.length).toFixed(2);
});
const date = new Date();
const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const formattedDate = `${date.getDate()} de ${
  months[date.getMonth()]
}`;

const percentage = computed(() => {
  const day = store.getters.getDaily;
  if (day == null) return "--";
  const active = day.filter(
    (element) => element.count > 0
  ).length;
  return ((active / 10) * 100).toFixed(0) + "%";
});

const bg = computed(() => {
  if (store.getters.getBg === "green") {
    timer();
    return "bg-green";
  } else if (store.getters.getBg === "red") {
    timer();
    return "bg-red";
  } else return null;
});

function timer() {
  setTimeout(() => {
    store.commit("setBg", "bg");
  }, 600);
}
</script>

<style scoped>
.container {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  border-radius: 0.7rem;
  padding: 0.35rem;
}

.flex {
  display: flex;
  justify-content: space-around;
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
.bg-green {
  background-color: rgb(137, 241, 137);
}
.bg-red {
  background-color: rgb(235, 110, 110);
}
.bg {
  background-color: white;
}
</style>
