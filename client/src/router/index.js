import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from "@/views/HomePage";
import ClothesPage from "@/views/ClothesPage";
import CreateClothesPage from "@/views/CreateClothesPage";

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/clothes/:id',
    name: 'ClothesPage',
    component: ClothesPage
  },
  {
    path: '/add-clothes',
    name: 'CreateClothesPage',
    component: CreateClothesPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
