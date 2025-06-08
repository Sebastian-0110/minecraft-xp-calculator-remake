import { createApp } from 'vue';

import PrimeVue from "primevue/config";
import Lara from "@primeuix/themes/lara";
import Button from "primevue/button";

import './style.css';
import App from './App.vue';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Lara,
    },
});

app.component("Button", Button);

app.mount('#app');
