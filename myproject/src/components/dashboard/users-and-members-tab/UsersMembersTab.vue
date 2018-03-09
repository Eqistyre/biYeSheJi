<template>
  <div class="users-members-tab dashboard-tab">
    <div class="row">
      <div class="col-md-3 d-flex justify-content-center align-items-center">
        <vuestic-profile-card :name="'张仲昊'" :location="'湖北 武汉'" photoSource="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=123308412,2828093194&fm=58"
                              :social="{twitter: 'https://twitter.com/SakuraNekoq'}">
        </vuestic-profile-card>
      </div>
      <div class="col-md-9 d-flex">
        <vuestic-chat v-model="chatMessages"></vuestic-chat>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'users-members-tab',

    data () {
      return {
        chatMessages: [
          {
            text: '你好欢迎来到Nekox教育数据挖掘平台？请问您在学习过程中有什么遇到的困难？',
            yours: false
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";
  @import "../../../../node_modules/bootstrap/scss/functions";
  @import "../../../../node_modules/bootstrap/scss/variables";
  @import "../../../../node_modules/bootstrap/scss/mixins/breakpoints";


  .vuestic-profile-card {
    margin-left: 1rem;

    @include media-breakpoint-up(md) {
      margin-top: -$tab-content-pt;
    }

    @include media-breakpoint-down(md) {
      margin-bottom: $tab-content-pt;
      margin-left: 0;
    }
  }


</style>
