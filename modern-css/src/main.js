import Vue from "vue";
import App from "./App.vue";
import 'css-doodle';
import "tailwindcss/tailwind.css"
import '@/utils/slide';
import '@/assets/styles/variable.css';
import '@/assets/styles/style.css';

import components from '@/components';
// 注册全局的组件
Object.keys(components).forEach(key => {
  Vue.component(key, components[key]);
});

Vue.config.productionTip = false;

new Vue({
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
