// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vant/lib/index.css'
import iView from 'iview'; // 导入组件库
import 'iview/dist/styles/iview.css'; // 导入样式
Vue.use(iView);
import { Switch , Checkbox, CheckboxGroup, Toast, Search, Swipe, SwipeItem,DropdownMenu, DropdownItem,Loading,Popup,Tabbar, TabbarItem,RadioGroup, Radio,Field,DatetimePicker,Tab, Tabs,ActionSheet,Collapse, CollapseItem} from 'vant';
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

Vue.use(Checkbox).use(CheckboxGroup).use(Toast).use(Loading).use(Search).use(Swipe).use(SwipeItem).use(DropdownMenu).use(DropdownItem).use(Tab).use(Tabs)
Vue.use(Popup);
Vue.use(ActionSheet);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Field);
Vue.use(DatetimePicker);
Vue.use(Switch);
// import Vconsole from 'vconsole'
// let vConsole = new Vconsole()
// Vue.use(vConsole)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
