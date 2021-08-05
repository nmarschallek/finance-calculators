import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router"
import App from './App.vue'
import './index.css'
import Frequency from './components/Frequency.vue'
import Loan from './components/Loan.vue'
import Mortgage from './components/Mortgage.vue'

const routes = [
  { path: '/', component: Frequency },
  { path: '/loan', component: Loan },
  { path: '/mortgage', component: Mortgage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
