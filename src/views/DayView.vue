<template>
  <div>
    <LogoDisplay></LogoDisplay>
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
import LogoDisplay from "@/components/NavBar.vue";
import StatesSpec from "@/components/StatesSpec.vue";

import { useStore } from "vuex";

const store = useStore();

const today = new Date();
const fiveDaysBefore = new Date(today);
fiveDaysBefore.setDate(today.getDate() - 5);
const formattedDate = today.toISOString().split("T")[0];
const formattedDate1 = fiveDaysBefore
  .toISOString()
  .split("T")[0];

const [, month, day] = formattedDate.split("-");
store.dispatch("fetch", `daily?day=${day}&month=${month}`);

///weather
store.dispatch("weather", [
  `${formattedDate1}`,
  `${formattedDate}`,
]);
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
