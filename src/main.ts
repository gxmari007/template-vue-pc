import { createApp } from 'vue';
import roshan from 'roshan';

import App from './modules/app/app.vue';

const app = createApp(App);

app.use(roshan);

app.mount('#app');
