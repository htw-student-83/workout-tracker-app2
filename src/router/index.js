import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../components/CoverSheetOfAnExercise.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/loginbox',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/LoginComponent.vue')
  },
  {
    path: '/ChangeContentOfExercise',
    name: 'changeExercise',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/ChangeExerciseComponent.vue')
  },
  {
    path: '/exercise',
    name: 'coverSheet',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/CoverSheetOfAnExercise.vue')
  },
  {
    path: '/CreateNewExercise',
    name: 'createnewexercise',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/DetailsNewWorkoutComponent.vue')
  },
  {
    path: '/editexercise',
    name: 'editExercise',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/EditExerciseComponent.vue')
  },
  {
    path: '/NewExercise',
    name: 'newexercise',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/NewWorkoutComponente.vue')
  },
  {
    path: '/EmptyList',
    name: 'notExercise',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/NotExerciseComponente.vue')
  },
  {
    path: '/Registrationbox',
    name: 'registration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/RegistrationComponent.vue')
  },
  {
    path: '/changedList',
    name: 'list_changed',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/successfulchangedAnExercise.vue')
  },
  {
    path: '/nav-loged',
    name: 'loged',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/successfulLogin.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
