import Vue from 'vue'
import App from './App.vue'


// import VueRouter from 'vue-router'
// import doo from './components/NavTestOneRouteComponents/doo.vue'
// import foo from './components/NavTestOneRouteComponents/foo.vue'
// Vue.config.productionTip = false
// Vue.use(VueRouter);
// const routes = [
//   { path: '/foo', component: foo },
//   { path: '/doo', component: doo }
// ];
// const router = new VueRouter({
//   routes
// });

new Vue({
  render: h => h(App),
}).$mount('#app')
