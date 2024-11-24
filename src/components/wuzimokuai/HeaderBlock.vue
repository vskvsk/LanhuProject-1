<template>
  <!-- 顶部导航栏模块 -->
  <div class="block_1 flex-col">
    <img
      class="image_1"
      referrerpolicy="no-referrer"
      src="../../views/lanhu_shouye_wuzimokuaibiaoti/assets/img/head.png"
    />
    <van-nav-bar class="nav-bar_1 NavBar">
      <template #left>
        <img
          class="image_2"
          referrerpolicy="no-referrer"
          src="../../views/lanhu_shouye_wuzimokuaibiaoti/assets/img/back.png"
        />
      </template>
      <template #title>
        <span class="text_1">工作台</span>
      </template>
      <template #right>
        <img
          class="image_3"
          referrerpolicy="no-referrer"
          src="../../views/lanhu_shouye_wuzimokuaibiaoti/assets/img/bg1.png"
        />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'HeaderBlock'
};
</script>

<style scoped lang="less">
.block_1 {
  background-color: rgba(57, 117, 198, 1);
  width: 750px;
  height: 155px;
  .image_1 {
    width: 654px;
    height: 20px;
    margin: 24px 0 0 48px;
  }
  .nav-bar_1 {
    width: 743px;
    height: 86px;
    margin: 24px 0 1px 2px;
    background: none;
    .image_2 {
      width: 218px;
      height: 80px;
      margin-top: 7px;
    }
    .text_1 {
      overflow-wrap: break-word;
      color: rgba(255, 255, 255, 1);
      font-size: 34px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      text-align: center;
      white-space: nowrap;
    }
    .image_3 {
      width: 218px;
      height: 80px;
      margin-top: 7px;
      margin-right: 0;
    }
    /deep/.van-nav-bar__content {
      height: 100%;
    }
    /deep/.van-nav-bar__title {
      line-height: 48px;
    }
    /deep/.van-nav-bar__left {
      padding: 0 0 0 0px;
      align-items: start;
    }
    /deep/.van-nav-bar__right {
      padding: 0 5px 0 0;
      align-items: start;
    }
  }
}
</style>
