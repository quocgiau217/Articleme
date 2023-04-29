import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store/index'
import store from './store'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.provide("store",store);
// app.use(store);

app.mount('#app')
