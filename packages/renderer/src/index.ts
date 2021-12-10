import { createApp } from 'vue';
import App from '/@/App.vue';
import router from '/@/router';

import * as Store from 'electron-store';

const store = new Store();
store.get('test');

createApp(App).use(router).mount('#app');
