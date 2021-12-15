<template>
    <div class="categoryss">
      <div class="ss">
        <svg-icon icon-class="aa" className="icon"></svg-icon>
      </div>

      <svg-icon icon-class="nested"></svg-icon>
      <svg-icon icon-class="user">wee</svg-icon>

      <!-- <table>
        <thead>
          <tr>
            <th v-for="(item, index) in books">{{item}}***</th>
          </tr>
        </thead>
        

      </table> -->
      <svg-icon icon-class="user" />
      <svg-icon icon-class="user" />
       
    
    </div>
</template>

<script>
  import vueSeamlessScroll from 'vue-seamless-scroll'
  export default {
    name: "Category",
    components: {
      vueSeamlessScroll
    },
    data() {
      return {
        books: [11, 22, 33, 44, 55, 66, 77, 88, 99, 100, 102, 102, 333, 122, 133, 144, 155, 166, 177, 188, 199, 200]
      }
    },
    computed: {
      classOption () {
        return {
          step: 0.2, // 数值越大速度滚动越快
          limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
          hoverStop: true, // 是否开启鼠标悬停stop
          direction: 1, // 0向下 1向上 2向左 3向右
          openWatch: true, // 开启数据实时监控刷新dom
          singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
          singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
          waitTime: 2000 // 单步运动停止的时间(默认值1000ms)
        }
      }
    }
  }
</script>

<style scoped>
  /* .categoryss {
    局部滚动
    background-color: aquamarine;
    height: 150px;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: scroll;
  } */
  .categoryss {
    /* 自动滚动 */
    background-color: red;
    height: 150px;
  }
  table {
    height: 40px;
  }
  thead {
/* 自动滚动 */
  background-color: red;
    
  }
  .seamless-warp {
    height: calc(100% - 40px - 30px);
    background-color: greenyellow;
    overflow: hidden;
  }
  /* svg-icon {
    height: 30px;
    width: 80px;
    color: aqua;
  } */
  .ss {
    color: aqua;
    width: 100px;
    height: 90px;
    background-color: cyan;
  }
  .icon {
    width: 100px;
    height: 90px;
    color: orange;
  }
</style>
