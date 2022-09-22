import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import { loadFonts } from './plugins/webfontloader'
import { createRouter, createWebHistory } from 'vue-router'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"

import Messages from "./components/Messages"
import NewMessage from "./components/NewMessage"
import Message from "./components/Message"
import Login from "./components/Login"
import Register from "./components/Register"


const routes = [
  {
    path: '/',
    component: Messages
  },
  {
    path: '/message/:id',
    component: Message
  },
  {
    path: '/newmessage',
    component: NewMessage
  },
  {
    path: '/login',
    component: Login
  }, 
  {
    path: '/register',
    component: Register
  },
  {
    path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
    redirect: '/',
  },
]

const router = new createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


loadFonts()

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app')
