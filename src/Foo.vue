<template>
  <div>
    <h2>{{ msg }}</h2>
    <p>I am lazy-loaded. (check out the Networks tab in Chrome devtools)</p>
  </div>
</template>

<script>
export default {
  name: 'Foo',
  data () {
    return { msg: 'This is Foo!' }
  }
}
</script>
