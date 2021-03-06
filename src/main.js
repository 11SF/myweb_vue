import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import AOS from "aos";
import 'bootstrap/dist/css/bootstrap.min.css'
import "aos/dist/aos.css";
import AxiosPlugin from 'vue-axios-cors';
 
Vue.use(AxiosPlugin)
Vue.config.productionTip = false;

App.AOS = new AOS.init({ disable: "phone" });

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
