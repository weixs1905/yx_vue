<template>
  <div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        num:[]
      }
    },
    mounted(){
     this.teamlist('参数').then(res =>{
       if(res.status == 0){
         let reslut = res.data
         console.log(reslut)
       }
     })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
