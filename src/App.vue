<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <menu-side></menu-side>
    <app-content></app-content>

  </div>
</template>
<script>
  import MenuSide from './MenuSide.vue'
  import Content from './Content.vue'
  
  export default {
   name: 'App',
   data () {
    return {
      msg: 'Hello Vue!'
    }
  },    
    components: {
      'menu-side': MenuSide,
      'app-content': Content
    }
}
</script>

<style>
  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #2c3e50;
  }
  
  #app {
    padding: 0 20px;
  }
  
  ul {
    line-height: 1.5em;
    padding-left: 1.5em;
  }
  
  a {
    color: #7f8c8d;
    text-decoration: none;
  }
  
  a:hover {
    color: #4fc08d;
  }

</style>
