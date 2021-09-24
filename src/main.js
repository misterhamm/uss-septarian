import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import moment from 'moment';

Vue.use(require('vue-moment'));


Vue.config.productionTip = false;

new Vue({
  vuetify,
  moment,
  render: h => h(App)
}).$mount('#app')

require('@/styles/styles.scss');