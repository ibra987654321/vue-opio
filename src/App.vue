<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;


}
#nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 5px;
    border-top: 3px solid #42b983 ;
  } 
#nav .router-link-exact-active {
      background: #42b983;
      transition: .5s;
      color: #fff;
    }
 table{
       width: 98%;
    margin-left: 20px;
  
 } 
table td{
     border-bottom: 1px solid #000;
   }
 header{
   display: flex;
   justify-content: center;
 }
.content-button {
  background-color: #3a6df0;
  border: none;
  padding: 8px 26px;
  color: #fff;
  border-radius: 20px;
  margin-top: 16px;
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;
  
}
.content-button:focus{
  border:none;
}
.status-button:focus-visible{
  border:none;
}
.status-button {
  font-size: 15px;
  margin-top: -5px;
  margin-left: 10px;

}
td{
  border-bottom: 1px solid #000;
      padding: .3rem;
}
tr{
  counter-increment: rowNumber;
  position: relative;
  margin-left: 10px;
}
table tr td:first-child::before {
    content: counter(rowNumber);
    position: absolute;
  left: 10px;
    /* min-width: 1em;
    margin-right: 0.5em; */
}
.extra{
  color: red;
}
.contpre{
  position: absolute;
  left: 0;
  top: 82px;
  background: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
}
input{
  height: 20px;
  margin-left: 18px;
}
</style>
