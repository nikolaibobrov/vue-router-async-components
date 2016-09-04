import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import VueRouter from 'vue-router'
// if import VueRouter from local modifyed vue-router file ,async components rendering normal
// import VueRouter from '../vue-router.js'

Vue.use(VueRouter)



// define Foo & Bar as async components.
// async components are defined as: resolve => { resolve(Component) }

// In Webpack we can use the AMD require syntax to signify a "split point"
// Webpack will automatically split and lazy-load the split modules.
// - https://webpack.github.io/docs/code-splitting.html

const Foo = () => System.import('./Foo.vue')
const Bar = () => System.import('./Bar.vue')

// If using Webpack 2, you can also do:
// const Foo = () => System.import('./Foo.vue')

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    // Just use them normally in the route config
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
