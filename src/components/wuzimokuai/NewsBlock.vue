<template>
  <!-- 热点分享新闻模块 -->
  <div class="block_3 flex-col">
    <div class="image-text_1 flex-row justify-between">
      <img
        class="icon_1"
        referrerpolicy="no-referrer"
        src="../../views/lanhu_shouye_wuzimokuaibiaoti/assets/img/icon1.png"
      />
      <span class="text-group_3">热点分享</span>
    </div>
    <div class="group_2 flex-col">
      <div class="tag_1 flex-col"><span class="text_10">分享</span></div>
    </div>
    <van-tabs
      class="tabs_2 Tabs"
      background="transparent"
      v-model="activeNewsTab"
      title-active-color="rgba(102,102,102,1)"
      line-width="0px"
      line-height="0px"
      :ellipsis="false"
    >
      <van-tab v-for="(item, index) in newsCategories" :key="index" :title="item"></van-tab>
    </van-tabs>
    
    <!-- 新闻列表 -->
    <div v-for="(news, index) in newsList" :key="index">
      <div class="group_4 flex-row justify-between">
        <img
          class="news-image"
          referrerpolicy="no-referrer"
          :src="news.image"
        />
        <div class="group_5 flex-col justify-between">
          <span class="news-title">{{ news.title }}</span>
          <div class="box_2 flex-row">
            <span class="source">{{ news.source }}</span>
            <span class="time">{{ news.time }}</span>
            <div class="tag_2 flex-col" @click="handleShare(news)">
              <span class="text_17">分享</span>
            </div>
          </div>
        </div>
      </div>
      <img
        class="divider"
        referrerpolicy="no-referrer"
        src="../../views/lanhu_shouye_wuzimokuaibiaoti/assets/img/line1.png"
      />
    </div>

    <!-- 查看更多 -->
    <div class="image-text_2 flex-row justify-between" @click="viewMore">
      <span class="text-group_4">查看更多</span>
      <img
        class="icon_2"
        referrerpolicy="no-referrer"
        src="../../views/lanhu_shouye_wuzimokuaibiaoti/assets/img/arr1.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsBlock',
  data() {
    return {
      activeNewsTab: 0,
      newsCategories: ['资讯栏目1', '资讯栏目2', '资讯栏目3'],
      newsList: [
        {
          image: require('../../views/lanhu_shouye_wuzimokuaibiaoti/assets/img/img1.png'),
          title: '资产质量好转、零售业绩AMU创招行业绩透露了',
          source: '资源来源',
          time: 'xx小时前'
        },
        {
          image: require('../../views/lanhu_shouye_wuzimokuaibiaoti/assets/img/img1.png'),
          title: '资产质量好转、零售业绩AMU创招行业绩透露了',
          source: '资源来源',
          time: 'xx小时前'
        }
      ]
    };
  },
  methods: {
    handleShare(news) {
      console.log('分享新闻:', news);
    },
    viewMore() {
      console.log('查看更多新闻');
    }
  }
};
</script>

<style scoped lang="less">
.block_3 {
  box-shadow: 0px 10px 50px 0px rgba(8, 19, 40, 0.08);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px;
  width: 706px;
  margin: 24px auto;
  
  .image-text_1 {
    margin: 40px 24px;
    display: flex;
    align-items: center;
    .icon_1 {
      width: 40px;
      height: 40px;
    }
    .text-group_3 {
      font-size: 32px;
      color: #333;
      font-weight: 500;
      margin-left: 12px;
    }
  }

  .group_2 {
    .tag_1 {
      padding: 4px 12px;
      background: #f5f5f5;
      border-radius: 4px;
      .text_10 {
        font-size: 24px;
        color: #666;
      }
    }
  }

  .tabs_2 {
    margin: 20px 0;
    /deep/.van-tab {
      flex: auto;
      font-size: 26px;
    }
    /deep/.van-tabs__wrap {
      height: 48px;
    }
    /deep/.van-tabs__nav {
      padding-left: 0;
      padding-right: 0;
    }
    /deep/.van-tab--active {
      font-size: 26px;
      background-color: rgba(247, 247, 247, 1);
      border-radius: 35px;
    }
  }

  .group_4 {
    width: 658px;
    height: 150px;
    margin: 40px 0 0 24px;
    .news-image {
      width: 200px;
      height: 140px;
      border-radius: 8px;
    }
    .group_5 {
      flex: 1;
      margin-left: 20px;
      .news-title {
        font-size: 28px;
        color: #333;
        line-height: 1.4;
      }
      .box_2 {
        margin-top: 10px;
        .source, .time {
          font-size: 24px;
          color: #999;
          margin-right: 20px;
        }
        .tag_2 {
          padding: 4px 12px;
          background: #f5f5f5;
          border-radius: 4px;
          .text_17 {
            font-size: 24px;
            color: #666;
          }
        }
      }
    }
  }

  .divider {
    width: 100%;
    height: 1px;
    margin: 20px 0;
  }

  .image-text_2 {
    padding: 20px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .text-group_4 {
      font-size: 28px;
      color: #666;
    }
    .icon_2 {
      width: 32px;
      height: 32px;
    }
  }
}

:deep(.van-tabs) {
  .van-tab {
    color: rgba(102,102,102,1);
    font-size: 28px;
  }
  .van-tabs__line {
    display: none;
  }
}
</style>
