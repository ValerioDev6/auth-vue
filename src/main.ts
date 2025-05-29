// import './assets/main.css'
import Notifications from '@kyvg/vue3-notification';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './core/router';
import './index.css';

const app = createApp(App);

app.use(createPinia());
app.use(Notifications);
app.use(router);

app.mount('#app');
