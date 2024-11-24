<template>
  <!-- 用户信息和统计数据模块 -->
  <div class="block_2 flex-col">
    <div class="text-group_1 flex-col justify-between">
      <span class="text_2">早上好, {{ userName }}</span>
      <span class="text_3">{{ currentDate }}</span>
    </div>
    <div class="list_1 flex-row">
      <div class="text-group_2 flex-col justify-between" v-for="(item, index) in statistics" :key="index">
        <span class="text_4" v-html="item.lanhutext0"></span>
        <span class="text_5" v-html="item.lanhutext1"></span>
      </div>
    </div>
    <van-tabs
      class="tabs_1 Tabs"
      color="rgba(51,51,51,1)"
      background="transparent"
      v-model="activeTab"
      title-active-color="rgba(51,51,51,1)"
      title-inactive-color="rgba(165,170,173,1)"
      line-width="0px"
      line-height="0px"
      :ellipsis="false"
    >
      <van-tab
        v-for="(item, index) in tabItems"
        :key="index"
        :title="item"
      ></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'UserInfoBlock',
  data() {
    return {
      userName: '张三',
      activeTab: 0,
      tabItems: ['热点分享', '服务直击', '生命周期服务', '内容广场'],
      statistics: [
        { lanhutext0: '1920', lanhutext1: '我的客户' },
        { lanhutext0: '1253', lanhutext1: '认证客户' }
      ]
    };
  },
  computed: {
    currentDate() {
      const date = new Date();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const weekDay = ['日', '一', '二', '三', '四', '五', '六'][date.getDay()];
      return `${month}/${day} 星期${weekDay}`;
    }
  }
};
</script>

<style scoped lang="less">
.block_2 {
  position: relative;
  width: 750px;
  height: 408px;
  background: url(../../views/lanhu_shouye_wuzimokuaibiaoti/assets/img/05c9318843504454b3e1bf18c7751b7c_mergeImage.png)
    100% no-repeat;
  background-size: 100% 100%;
  margin-top: -1px;
  
  .text-group_1 {
    width: 258px;
    height: 108px;
    margin: 41px 0 0 48px;
    .text_2 {
      width: 258px;
      height: 58px;
      overflow-wrap: break-word;
      color: rgba(255, 255, 255, 1);
      font-size: 46px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      text-align: justify;
      white-space: nowrap;
      line-height: 58px;
    }
    .text_3 {
      width: 195px;
      height: 34px;
      overflow-wrap: break-word;
      color: rgba(255, 255, 255, 1);
      font-size: 28px;
      font-weight: NaN;
      text-align: justify;
      white-space: nowrap;
      line-height: 34px;
      margin-top: 16px;
    }
  }
  
  .list_1 {
    width: 631px;
    height: 80px;
    justify-content: space-between;
    margin: 48px 0 131px 59px;
    .text-group_2 {
      width: 96px;
      height: 80px;
      margin-right: 83px;
      .text_4 {
        width: 89px;
        height: 34px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 46px;
        font-family: DINAlternate-Bold;
        font-weight: 700;
        text-align: left;
        white-space: nowrap;
        line-height: 34px;
        margin-left: 4px;
      }
      .text_5 {
        width: 96px;
        height: 30px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 24px;
        font-weight: NaN;
        text-align: left;
        white-space: nowrap;
        line-height: 30px;
        margin-top: 16px;
      }
    }
  }
  
  .tabs_1 {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 24px 24px 0px 0px;
    height: 100px;
    width: 750px;
    position: absolute;
    left: 0;
    top: 309px;

    /deep/.van-tab {
      flex: auto;
      font-size: 30px;
    }
    /deep/.van-tabs__wrap {
      height: 100px;
    }
    /deep/.van-tabs__nav {
      padding-left: 0;
      padding-right: 0;
    }
    /deep/.van-tab--active {
      font-size: 36px;
    }
  }
}
</style>
