<template>
  <div id="app" class="app">
    <auth-layout v-if="isAuth"></auth-layout>
    <layout v-else></layout>
  </div>
</template>

<script>
  import Layout from 'components/layout/Layout'
  import AuthLayout from 'components/layout/AuthLayout'
  import VuesticPreLoader from 'vuestic-components/vuestic-preloader/VuesticPreLoader.vue'

  export default {
    name: 'app',
    components: {
      VuesticPreLoader,
      AuthLayout,
      Layout
    },
    computed: {
      isAuth () {
        return this.$route.path.match('auth')
      }
    }
  }
</script>

<style lang="scss">
  @import "sass/main";
  body {
    height: 100%;
    #app {
      height: 100%;
      background-image: url('http://p.img.eol.cn/images/1022/2013/1115/1384502820_12_c1lo.jpg');
      background-repeat:no-repeat; 
      background-size:100% 100%;
    }
  }
</style>
