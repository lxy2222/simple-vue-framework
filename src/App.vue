<template>
  <div id="app">
    <img src="./assets/img/blood.png"/>
    <el-button type="success" @click="handleClick">点我</el-button>
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        text: 'You use Element successful'
      }
    },
    methods: {
      handleClick () {
        alert(this.text)
      }
    }
  }
</script>