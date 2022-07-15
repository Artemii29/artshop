<template>
  <form @submit.prevent="submit">
    <div class="input-container">
      <label>
          <p class="input-label">
        Введите название одежды
          </p>
        <input type="text" placeholder="Название" v-model="form.name">
      </label>
    </div>
    <div class="input-container">
      <label>
        <p class="input-label">
          Введите описание
        </p>
        <input type="text" placeholder="Описание" v-model="form.description">
      </label>
    </div>
    <div class="input-container">
      <label>
        <p class="input-label">
        Загрузите изображение одежды
        </p>
        <input type="file" placeholder="Изображение" accept=".jpg, .png" @change="addFile">
      </label>
    </div>
    <button type="submit">Сохранить</button>
  </form>
</template>

<script>
export default {
  name: "CreateClothesPage",
  data() {
    return {
      form: {
        name: '', description: '', picture: null
      }
    }
  },
  methods: {
    addFile(evt) {
      this.form.picture = evt.target.files[0];
    },
    async submit() {
      const formData = new FormData();
      formData.append('name', this.form.name);
      formData.append('description', this.form.description);
      if (this.form.picture) {
        formData.append('picture', this.form.picture);
      }
      await fetch(`http://localhost:5100/router/clothes`, {
        method: 'POST',
        body: formData,
      })
      this.$router.push('/')
    }
  },
}
</script>

<style scoped>
.input-container {
  margin: 64px;
}
.input-label{
  font-weight: bold;
}
</style>