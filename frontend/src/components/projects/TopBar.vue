<template>
  <header>
    <h1>BP</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  </header>

</template>

<!--script>
export default {
  name: 'ProjectList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script-->

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
header {
  /*background-color: #333;*/
  color: #fff;
  top: 0px;
  left: 0px;
  padding: 2%;
  margin-top: -5%;
  width: 100%;
  height: 15%;
  /* UI Properties */
  background: #101C64 0% 0% no-repeat padding-box;
  opacity: 1;
}

h1 {
  float: left;
  margin: 0;
}

nav ul {
  list-style-type: none;

  float: right;

}

nav li {
  display: inline;
  margin-right: 2%;
}

nav a {
  color: #fff;
  text-decoration: none;
}

</style>
