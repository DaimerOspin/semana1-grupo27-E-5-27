import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = "http://localhost:3000/api/";

//const uri='http://localhost:3000/cliente';
/* const user='daimerospina';
const password='dmospinac';
const dataB='cliente';
const uri= `mongodb+srv://${user}:${password}@cluster0.mwlyo.mongodb.net/${dataB}?retryWrites=true&w=majority`;
const options={useNewUrlParser: true, useUnifiedTopology: true}; */
 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
