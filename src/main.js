import { createApp } from 'vue'
import App from './App.vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import PrimeVue from 'primevue/config';
import router from './router'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import ColumnGroup from 'primevue/columngroup';
import ToastService from 'primevue/toastservice';
import Message from 'primevue/message';
import Skeleton from 'primevue/skeleton';
import Sidebar from 'primevue/sidebar';
import Menubar from 'primevue/menubar';

import 'primevue/resources/themes/md-light-indigo/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'   


const app = createApp(App)
app.use(router)
app.use(PrimeVue,{ripple: true})
app.use(ToastService)
app.component('Skeleton', Skeleton)
app.component('Menubar', Menubar)
app.component('Sidebar', Sidebar)
app.component('InputText', InputText)
app.component('Message', Message)
app.component('DataTable', DataTable)
app.component('Dialog', Dialog)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Button', Button)
app.component('Card', Card)
app.mount('#app')