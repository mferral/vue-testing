import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from "./store";
import { Quasar } from 'quasar'
import langEs from 'quasar/lang/es'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

const myApp = createApp(App)

myApp.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    lang: langEs/* look at QuasarConfOptions from the API card */

})
myApp.use(router);
myApp.use(pinia);

myApp.mount('#app')
