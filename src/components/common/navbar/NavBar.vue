<template>
  <div class="nav-bar">
    <!-- 不好直接对slot布局所以用div包起来,对div布局 -->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>

export default {
  name: "NavBar"
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: aqua;
  }
  .left, .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
</style>
