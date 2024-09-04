// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import ActividadPolitica from '../views/ActividadPolitica.vue'
import SobreMi from '../views/SobreMi.vue'
import Inicio from '../views/Inicio.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/actividad-politica',
    name: 'ActividadPolitica',
    component: ActividadPolitica
  },
  {
    path: '/sobre-mi',
    name: 'SobreMi',
    component: SobreMi
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router