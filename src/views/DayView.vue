<template>
  <div>
    <NavBar></NavBar>
    <ActiveCount></ActiveCount>
    <StatesSpec></StatesSpec>
    <CountChart></CountChart>
    <MultiChart></MultiChart>
  </div>
</template>

<script setup>
import ActiveCount from "@/components/ActiveCount.vue";
import CountChart from "@/components/CountChart.vue";
import MultiChart from "@/components/MultiChart.vue";
import NavBar from "@/components/NavBar.vue";
import StatesSpec from "@/components/StatesSpec.vue";

import { useStore } from "vuex";
import { computed,watch } from "vue";

const store = useStore();

const today = new Date();
const fiveDaysBefore = new Date(today);
fiveDaysBefore.setDate(today.getDate() - 5);
const formattedDate = today.toISOString().split("T")[0];
const formattedDate1 = fiveDaysBefore
  .toISOString()
  .split("T")[0];

const [, month, day] = formattedDate.split("-");

const daily= computed(() => store.getters.getDaily);
if(daily.value===null && (localStorage.getItem("csv") - Date.now()) < 60 * 60 * 1000 && store.getters.getAuth===true){
  store.dispatch("fetch", `daily?day=${day}&month=${month}`);
}
///weather
const weather = computed(() => store.getters.getWeather);
if(weather.value===null && (localStorage.getItem("weather") - Date.now()) < 60 * 60 * 1000 && store.getters.getAuth===true){
  store.dispatch("weather", [
    `${formattedDate1}`,
    `${formattedDate}`,
  ]);
}

const socket = computed(() => store.getters.getSocket);

watch(socket,(newValue)=>{
  if(newValue ===null && store.getters.getAuth===true){
    store.dispatch("connectToWebSocket");
  }
})
</script>

<style scoped>
.center {
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 2rem;
}
</style>
