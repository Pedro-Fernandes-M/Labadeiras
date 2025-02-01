<template>
  <div>
    <div class="warning">
      {{ props.nome }} indisponível!
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["nome"]);
</script>

<style scoped>
.warning {
  color: red;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  margin-bottom: 3rem;
  margin-top: 2rem;
}
</style>
