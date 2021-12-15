<template>
  <div id="home" class="wrapper">
    <!-- 标签里面要添加东西所以要用双标签,没东西就单标签即可 -->
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <!--  @tabClick: 要保持子组件一直 -->
    <tab-control class="tab-control" :titles="titles" @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import { getHomeLoopData, getHomeGoods } from 'api/home'
  import HomeSwiper from '@/views/home/childcomps/HomeSwiper'
  import RecommendView from '@/views/home/childcomps/RecommendView'
  import FeatureView from '@/views/home/childcomps/FeatureView'
  import TabControl from '@/components/content/tabControl/TabControl'
  import GoodsList from '@/components/content/goods/GoodsList'
  import Toast from 'components/common/toast/Toast'
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page:0,list:[]},
          'new': {page:0,list:[]},
          'sell': {page:0,list:[]}
        },
        currentType: 'pop'
      }
    },
    computed: {
        titles () {
          return ["流行", "新款", "精选"]
        },
        showGoods () {
          return this.goods[this.currentType].list
        }
    },
    created(){
      // 1.请求多个数据
      getHomeLoopData().then((res) => {
        console.log(res)
        this.banners = res.message
        res.message.forEach(element => {
          element.title = "爱好"
        });
        this.recommends = res.message
        // Toast.show('成功')
      }).catch((err) => {
        console.log(err)
      })
      // 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      // tabClick
      tabClick(index) {
        switch(index){
          case 0 :
            console.log(index)
            console.log("00000000000000000000")
            this.currentType = 'pop'
            break
          case 1 :
          console.log(index)
            console.log("00000000000000000000")
            this.currentType = 'new'
            break
          case 2 :
          console.log(index)
            console.log("00000000000000000000")
            this.currentType = 'sell'
            break
        }
      },
      // 网络请求方法
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res =>{
          // ...对数组进行解析,然后一个一个操作
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
        })
      },
    },
    mounted () {
      
    }
  }
</script>

<style scoped>
  #home{
    position: relative;
    /* 视口高度 */
    height: 100vh;
  }
  .home-nav {
    background-color: var(--color-tint);
    color:#fff;
    /* 为了解决 原生滚动 导航被上拉的问题时 */
    position: fixed;
    top:0; 
    left:0; 
    right:0;
    z-index:9;
    /* overflow: hi
    dden; */
  }
  .tab-control {
    /* 简单吸顶 */
    position: sticky;
    top: 44px;
  }
</style>
