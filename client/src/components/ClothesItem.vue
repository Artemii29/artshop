<template>
  <router-link :to="'/clothes/' + item._id" class="clothes-card">
    <img v-if="item.picture" class="clothes-img" v-bind:src="`http://localhost:5100/${item.picture}`">
    <h2>{{ item.name }}</h2>
    <p>{{ item.description }}</p>
  </router-link>
</template>

<script>
export default {
  name: "ClothesItem",
  props: ['item']
}
</script>

<style scoped>
.clothes-card {
  width: 28%;
  min-height: 300px;
  border: 1px solid purple;
  margin-bottom: 24px;
}

.clothes-img {
  width: 100%;
}
</style>