import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/main.css'
import mitt from 'mitt'

// Config emitter
const emitter = mitt()

const app = createApp(App)

app.provide('emitter', emitter)

app.use(router)

app.mount('#app')
