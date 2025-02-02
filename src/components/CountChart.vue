<template>
  <div
    v-if="count != null && count.length > 1"
    class="container"
  >
    <apexchart
      width="100%"
      height="200%"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
  <WarningPop v-else nome="Contagem" />
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import WarningPop from "./WarningPop.vue";

const store = useStore();

const count = computed(() => store.getters.getDaily);
const xAxis1 = computed(() => {
  const x = [];
  count.value.forEach((value) => {
    x.push(value.hour);
  });
  return x;
});
const yAxis1 = computed(() => {
  const y = [];
  count.value.forEach((value) => {
    y.push(value.count);
  });
  return y;
});
const chartOptions = ref({
  chart: {
    toolbar: {
      show: false, // Disable toolbar
    },
  },
  title: {
    text: "Contagem",
    align: "center",
    style: {
      fontSize: "18px",
      fontWeight: "bold",
    },
  },
  xaxis: {
    categories: xAxis1,
  },
});
const series = ref([
  {
    name: "count",
    data: yAxis1,
  },
]);
</script>

<style scoped>
.container {
  margin-top: 1rem;
  margin-bottom: 3rem;
}
</style>
