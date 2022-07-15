<template>
  <router-link to="/add-clothes">
    <button>
      Добавить элемент одежды
    </button>
  </router-link>
  <ClothesList v-bind:clothes="clothesList"/>
</template>

<script>
import ClothesList from "@/components/ClothesList";

export default {
  name: "HomePage",
  components: {ClothesList},
  data() {
    return {
      clothesList: [
        /*
         {
           "_id": "62bcce162423327b9f2496fc",
           "name": "Кеды",
           "description": "Свитшот колекции 2022 года, по отличной цене!",
         },
         {
           "_id": "62c7668851961ef0296cc23e",
           "name": "Свитшот",
           "description": "Свитшот колекции 2022 года, по отличной цене!",
           "picture": "81ea9cd8-5aa4-4f51-8560-900afada6cf5.jpg",
         },
         {
           "_id": "62bcce162423327b9f24965c",
           "name": "Кеды",
           "description": "Свитшот колекции 2022 года, по отличной цене!",
         },
         {
           "_id": "62c7668851981ef0296cc23e",
           "name": "Свитшот",
           "description": "Свитшот колекции 2022 года, по отличной цене!",
           "picture": "81ea9cd8-5aa4-4f51-8560-900afada6cf5.jpg",
         }*/
      ]
    }
  },
  async mounted() {
    const json = await fetch("http://localhost:5100/router/clothes")
    this.clothesList = await json.json()
  }
}
</script>

<style scoped>

</style>