import 'sanitize.css'
import '@/assets/styles/global.scss'
import '@vueform/multiselect/themes/default.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Library types problem
// @ts-expect-error
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(MotionPlugin)

app.mount('#app')
