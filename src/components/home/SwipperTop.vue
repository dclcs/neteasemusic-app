
<script>
export default {
    setup() {
        const images = [
            "https://img.yzcdn.cn/vant/apple-1.jpg",
            "https://img.yzcdn.cn/vant/apple-2.jpg",
        ];
        return { images };
    }
}

</script>


<template>
   <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
    </van-swipe-item>
   </van-swipe>
</template>


<style lang="less" scoped>
    .van-swipe {
        width: 100%;
        padding: .2rem;

        .van-swipe__track {
            .van-swipe-item {
                img {
                    width: 100%;
                    height: 3rem;
                }
            }
        }


    }
 </style>