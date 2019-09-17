<template>
  <div>
    <keep-alive :exclude="['login','personal']">
    <router-view ></router-view>            
    </keep-alive>
    <FooterNav v-show="$route.path != '/login'"/>
  </div>
</template>

<script>
  export default { 
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
