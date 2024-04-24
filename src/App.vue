<template>
  <div id="app">
    <div class="footer_wrap">
      <router-link :to="{name:'home'}">home</router-link>
      <router-link :to="{name: 'table_test'}">table_test</router-link>
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style >
body{margin: 0; padding: 0;}

  .footer_wrap {
    position: relative;
    left: 0;
    top: 0;
    display: flex;
    width: 100%;
    background-color: #333;
    color: #ccc;
  }
  .footer_wrap a {
    flex: 1;
    text-align: center;
    text-decoration: none;
    padding: 20px 0;
    line-height: 20px;
    background-color: #333;
    color: #ccc;
    border: 1px solid black;
  }
.footer_wrap a.router-link-exact-active{
  background-color: aliceblue;
}
  .footer_wrap a:hover {
    background-color: #555;
  }
</style>
