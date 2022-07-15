<template>
  <div class="container">
    <img class="picture" :src="`http://localhost:5100/${clothesItem.picture}`" v-if="clothesItem.picture">
    <h1>{{ clothesItem.name }}</h1>
    <p>{{ clothesItem.description }}</p>
    <button @click="deleteItem">Удалить</button>
  </div>
</template>

<script>
export default {
  name: "ClothesPage",
  data() {
    return {clothesItem: {}}
  },
  methods: {
    async deleteItem() {
      const id = this.$route.params.id;
      await fetch('http://localhost:5100/router/clothes/' + id, {
        method: 'DELETE',
      });
      this.$router.push('/');
    }
  },
  async mounted() {
    console.log(this.$route.params.id);
    const id = this.$route.params.id;
    const json = await fetch('http://localhost:5100/router/clothes/' + id);
    this.clothesItem = await json.json()
  },
}
</script>

<style scoped>
.container {
  text-align: center;
}

.picture {
  width: 80%;
  height: auto;
}
</style>