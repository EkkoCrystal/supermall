<template>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.url">
          <img :src="item.img" alt="">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper';

export default {
    name:"HomeSwiper",
    components: {
        Swiper,
        SwiperItem
    },
    props:{
        banners:{
            type:Array,
            // 默认值是一个函数
            default(){
                return []
            }
        }
    },
    methods:{
        imageLoad(){
            if(!this.isLoad){
                this.$emit('swiperImageLoad')
                this.isLoad = true
            }
        }
    },
    data(){
        return {
            isLoad:false,
        }
    }
}
</script>