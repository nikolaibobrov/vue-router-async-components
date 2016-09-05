import Vue from 'vue'
import App from './App.vue'
// import Home from './Home.vue'
import VueRouter from 'vue-router'
// import _ from 'lodash'
// if import VueRouter from local modifyed vue-router file ,async components rendering normal
// import VueRouter from '../vue-router.js'

Vue.use(VueRouter)
/* dynamic setup component map can not work normaly */
// function map (items, converter) {
//   let list = []
//   for (let item of items) {
//     let to = converter(item)
//     list.push(to)
//   }
//   return list
// }
/* mock read config from some place */
// let menu = [{ path: '/', handler: './Home.vue' },
//   { path: '/foo', handler: './Foo.vue' },
//   { path: '/bar', handler: './Bar.vue' }]
// let routes = map(menu, item => { return { path: item.path, component: () => System.import(item.handler) } })


/* hard code component map can work normaly */
const Home = () => System.import('./Home.vue')
const Foo = () => System.import('./Foo.vue')
const Bar = () => System.import('./Bar.vue')
let routes = []
routes.push({ path: '/', component: Home })
routes.push({ path: '/foo', component: Foo })
routes.push({ path: '/bar', component: Bar })

console.log(routes)
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
