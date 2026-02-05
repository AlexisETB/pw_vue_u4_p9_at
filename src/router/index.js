import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiereAutorizacion: true,
        esPublica: false
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        requiereAutorizacion: false,
        esPublica: true
      }
    },
    {
      path: '/consultar-por-id',
      name: 'consultarPorId',
      component: () => import('../views/ConsultarPorIdView.vue'),
      meta: {
        requiereAutorizacion: false,
        esPublica: true
      }
    },
    {
      path: '/consultar-todos',
      name: 'consultarTodos',
      component: () => import('../views/ConsultarTodosView.vue'),
      meta: {
        requiereAutorizacion: false,
        esPublica: true
      }
    },
    {
      path: '/guardar',
      name: 'guardar',
      component: () => import('../views/GuardarView.vue'),
      meta: {
        requiereAutorizacion: true,
        esPublica: false
      }
    },
    {
      path: '/actualizar',
      name: 'actualizar',
      component: () => import('../views/ActualizarView.vue'),
      meta: {
        requiereAutorizacion: true,
        esPublica: false
      }
    },
    {
      path: '/actualizar-parcial',
      name: 'actualizarParcial',
      component: () => import('../views/ActualizarParcialView.vue'),
      meta: {
        requiereAutorizacion: true,
        esPublica: false
      }
    },
    {
      path: '/borrar',
      name: 'borrar',
      component: () => import('../views/BorrarView.vue'),
      meta: {
        requiereAutorizacion: true,
        esPublica: false
      }
    }
  ],
})

/*Config del Guardian de Rutas*/
router.beforeEach((to, from, next) => {
  if (to.meta.requiereAutorizacion) {
    /*Envia a login*/
    console.log("No autorizado. Redirigiendo a login...");
  } else {
    /*Deja pasar*/
    console.log("Ruta pública. Deja pasar...");
    next();
  }
})

export default router
