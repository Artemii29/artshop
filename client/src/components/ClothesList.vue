<template>
  <div class="clothes-list">
    <!-- v-bind - использование js в атрибуте html элемента   -->
    <ClothesItem v-bind:key="item._id" v-for="(item) in clothes" v-bind:item="item"/>
  </div>
</template>

<script>
import ClothesItem from "@/components/ClothesItem";

export default {
  name: "ClothesList",
  components: {ClothesItem},
  props: ['clothes'],
}
</script>

<style scoped>
.clothes-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
