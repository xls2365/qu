<template>
<div class="header">
  <div class="header-left">
    <span class="iconfont back-icon">&#xe600;</span>
  </div>
  <div class="header-input">
    <span class="iconfont">&#xe64d;</span>
    输入城市/景点/游玩主题
  </div>
  <router-link to="/city">
    <div class="header-right">
      北京
      <span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      .back-icon
        display: block
        text-align: center
    .header-input
      flex: 1
      height:.64rem
      line-height:.64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -0.04rem
        font-size: .24rem
</style>
