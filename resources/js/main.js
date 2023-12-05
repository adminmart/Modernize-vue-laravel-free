
// import App from '@/App.vue'
// import vuetify from '@/plugins/vuetify'

// import router from '@/router'
// import { createPinia } from 'pinia'
// import { createApp } from 'vue'

// // Create vue app
// const app = createApp(App)


// // Use plugins
// app.use(vuetify)
// app.use(createPinia())
// app.use(router)

// // Mount vue app
// app.mount('#app')


import { createApp } from 'vue';
import App from './App.vue';
import  router  from './router';
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import VueApexCharts from 'vue3-apexcharts';
import VueTablerIcons from 'vue-tabler-icons';
//import Maska from 'maska';
const app = createApp(App);
app.use(router);
app.use(PerfectScrollbar);
app.use(VueTablerIcons);
//app.use(Maska);
app.use(VueApexCharts);
app.use(vuetify).mount('#app');
