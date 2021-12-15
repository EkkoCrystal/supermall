<template>
    <div class="recommend">
        <div class="recommend-item"  v-for="(item,index) in recommends" :key="index">
            <a :href="item.url">
                <img :src="item.img" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:"RecommendView",
    props:{
      recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .recommend {
        display: flex;
        text-align: center;
        font-size: 14px;
        padding: 15px 0 20px;
        border-bottom: 5px solid #eee;
    }
    .recommend-item{
        flex:1;
    }
    .recommend-item img{
        width: 80px;
        height: 80px;
        border-radius: 40px;
        margin-bottom: 10px;
    }
</style>