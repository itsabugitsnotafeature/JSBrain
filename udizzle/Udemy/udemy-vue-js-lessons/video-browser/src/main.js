import Vue from 'vue';
import App from './App';


new Vue({
    render: h => h(App),
}).$mount('#app');

/* 
// Another option to create VUE app instance and export it to browser

new Vue({
    el: '#app',
    render: h => h(App),
});

*/