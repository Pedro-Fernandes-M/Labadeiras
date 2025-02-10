<template>
  <div>
    <div v-if="weather != null && data != null" id="multiChart" :style="{height: height}">
      <h3 class="margin">
        {{ option }}
      </h3>
      <apexchart
        width="100%"
        height=350
        type="line"
        :options="MultiChart"
        :series="data"
      >
      </apexchart>
    </div>
    <WarningPop v-else :nome="option"></WarningPop>
    <select v-model="option" class="options">
      <option>Temperatura</option>
      <option>Precipitação</option>
      <option>Chuva/Vento</option>
      <option>Evaporação</option>
    </select>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import WarningPop from "./WarningPop.vue";

const store = useStore();

const weather = computed(() => store.getters.getWeather);
const option = ref("Temperatura");


const xAxis = computed(() => {
  const a = weather.value.daily.time;
  const b = Object.values(a);
  const array = [];
  b.forEach((value) => {
    const [, M, D] = value.split("-");
    array.push(`${D}-${M}`);
  });
  return array;
});
const MultiChart = ref({
  chart: {
    toolbar: {
      show: false, // Disable toolbar
    },
    zoom: {
      enabled: false,
    },
    
  },
  xaxis: {
    categories: xAxis,
  },
});


const yAxis = computed(() => {
  if (option.value === "Temperatura") {
    const data = weather.value.daily.temperature_2m_max;
    return Object.values(data);
  } else if (option.value === "Precipitação") {
    const value =weather.value.daily.precipitation_probability_max;
    return Object.values(value);
  } else if (option.value === "Chuva/Vento") {
    const value = weather.value.daily.wind_speed_10m_max;
    return Object.values(value);
  } else{ 
    return []
  }
});
const yAxisM = computed(() => {
  if (option.value === "Temperatura") {
    const value = weather.value.daily.temperature_2m_min;
    return Object.values(value);
  } else if (option.value === "Precipitação") {
    const data = weather.value.daily.precipitation_hours;
    return Object.values(data);
  } else if (option.value === "Chuva/Vento") {
    const data = weather.value.daily.rain_sum;
    return Object.values(data);
  } else if (option.value === "Evaporação") {
    const data =
      weather.value.daily.et0_fao_evapotranspiration;
    return Object.values(data);
  } else return null;
});

const legenda = computed(() => {
  if (option.value === "Temperatura") {
    slice();
    return "Temperatura_Max(°C)";
  } else if (option.value === "Precipitação") {
    slice();
    return "Precipitação_Horas";
  } else if (option.value === "Chuva/Vento") {
    slice();
    return "Chuva_Sum(mm)";
  } else if (option.value === "Evaporação") {
    slice();
    return "Evapotranspiração(mm)";
  }
  return null;
});
const legenda1 = computed(() => {
  if (option.value === "Temperatura") {
    return "Temperatura_Min(°C)";
  } else if (option.value === "Precipitação") {
    return "Precipitação_Prob_Máx(%)";
  } else if (option.value === "Chuva/Vento") {
    return "Velocidade_Vento_Max(KM/H)";
  } else {
    return "";
  }
});
function slice() {
  if (
    option.value === "Temperatura" ||
    option.value === "Precipitação" ||
    option.value === "Chuva/Vento"
  ) {
    data.value = [
      {
        name: legenda,
        data: yAxis,
      },
      {
        name: legenda1,
        data: yAxisM,
      },
    ];
  } else {
    data.value = [
      {
        name: legenda,
        data: yAxisM,
      },
    ];
  }
}

const data = ref([
  {
    name: legenda,
    data: yAxis,
  },
  {
    name: legenda1,
    data: yAxisM,
  },
]);

function getheight () {
  const chart = document.getElementById("multiChart");
  if (chart) {
    return chart.offsetHeight + "px";
  }
  else return null;
}

let height = ref(null);
setTimeout(()=>{
  height = getheight();
},100)

</script>

<style scoped>
.options {
  width: 9.375rem; /* 150px converted to rem (150 / 16) */
  padding: 0.5rem; /* 8px converted to rem (8 / 16) */
  font-size: 0.875rem; /* 14px converted to rem (14 / 16) */
  background-color: #f9f9f9; /* Background color */
  border: 1px solid #ccc; /* Border styling */
  border-radius: 0.375rem; /* 6px converted to rem (6 / 16) */
  outline: none; /* Remove focus outline */
  margin-top: 1rem; /* Added margin-top */
  transition: all 0.3s ease; /* Smooth hover/focus animations */
  cursor: pointer;
  margin-bottom: 3.5rem;
}

.options:hover {
  background-color: #f1f1f1; /* Slightly darker on hover */
  border-color: #aaa; /* Change border color on hover */
}

.options:focus {
  border-color: #26a0fc; /* Highlight border on focus */
  box-shadow: 0 0 0.25rem rgba(38, 160, 252, 0.3); /* Subtle glow (4px converted to rem) */
}

.margin{
  margin-bottom: -0.2rem;
}
</style>
