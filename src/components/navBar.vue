<template>
    <div>
        <van-nav-bar :title="$route.meta.title" left-arrow @click-left="clickLeft" class="nav-bar" fixed>
            <template #right v-if="$route.path == '/'">
                <!-- <van-icon name="search" size="18" /> -->
                <img src="@/assets/nav.svg" alt="" @click="historyPage">
            </template>
        </van-nav-bar>
    </div>
</template>
<script>
export default {
    methods:{
        clickLeft() {
      this.$router.go(-1)
      console.log('返回上一页');
    },
    historyPage(){
      this.$router.push('/applicationRecords')
      console.log('跳转申请记录');
    }
    }
}
</script>
<style lang="less" scoped>
.nav-bar {
  height: 44px;
  /deep/ .van-nav-bar__content {
    height: 44px;

    i.van-icon.van-icon-arrow-left.van-nav-bar__arrow {
      color: #323233;
    }

    .van-nav-bar__title.van-ellipsis {
      font-family: PingFangSC-Medium;
      font-size: 17px;
      font-weight: normal;
      line-height: 18px;
      text-align: center;
      letter-spacing: 0px;

      color: #17204D;
    }

    .van-nav-bar__right {
      img {
        display: inline-block;
        width: 16px;
        height: 19px;
        opacity: 1;
        ;
      }
    }
  }

}
</style>