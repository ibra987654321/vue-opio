<template>
  <div id="nav">
    <router-link to="/">CSI по группам </router-link>  
    <router-link to="/office">CSI по офисам </router-link>
    <router-link to="/OPIO3">CSI по Отделениямм </router-link>
    <router-link to="/OPIO4">CSI по сотрудникам </router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
 
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
