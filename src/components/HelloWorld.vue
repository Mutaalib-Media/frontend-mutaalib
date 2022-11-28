<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <h2 class="underline text-2xl font-bold text-blue-800">
        how to start your project with tailwind css & Vue 3
      </h2>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
