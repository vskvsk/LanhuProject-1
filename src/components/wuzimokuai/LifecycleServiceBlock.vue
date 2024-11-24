<template>
  <div class="block_9 flex-col">
    <div class="image-text_8 flex-row justify-between">
      <img
        class="icon_7"
        referrerpolicy="no-referrer"
        src="../../views/lanhu_shouye_wuzimokuaibiaoti/assets/img/arr2.png"
      />
      <span class="text-group_13 text-group_15">生命周期服务</span>
    </div>
    <van-tabs
      class="tabs_3"
      color="rgba(38,126,240,1.000000)"
      background="transparent"
      v-model="activeTab"
      title-active-color="rgba(38,126,240,1)"
      title-inactive-color="rgba(51,51,51,1)"
      line-width="52px"
      line-height="4px"
      :ellipsis="false"
    >
      <van-tab v-for="(item, index) in tabTitles" :key="index" :title="item"></van-tab>
    </van-tabs>
    <div v-for="(item, index) in serviceList" :key="index" class="service-item">
      <div class="group_header flex-row justify-between">
        <div :class="['tag', `tag-${item.priority}`, 'flex-col']">
          <span class="tag-text">{{ item.priority }}</span>
        </div>
        <span class="title-text">{{ item.title }}</span>
      </div>
      <span v-if="item.description" class="description-text">{{ item.description }}</span>
      <div class="service-info flex-col">
        <span>服务类型：{{ item.serviceType }}</span>
        <div :class="{'text-wrapper': item.isExpireToday}">
          <span>服务截止：{{ item.deadline }}</span>
          <span v-if="item.isExpireToday" class="expire-text">今日到期</span>
        </div>
        <span>创建时间：{{ item.createTime }}</span>
        <div class="progress-wrapper flex-row justify-between">
          <span>服务进度：{{ item.progress }}/{{ item.total }}</span>
          <div class="progress-bar">
            <div 
              class="progress" 
              :class="{ 'custom-progress': item.useCustomProgress }"
              :style="{ width: (item.progress/item.total * 100) + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LifecycleServiceBlock',
  data() {
    return {
      activeTab: 0,
      tabTitles: ['重要', '普通', '轻微'],
      serviceList: [
        {
          priority: '重要',
          title: '对新添加的客户进行KYC认证',
          serviceType: '流失挽回',
          deadline: '2023-09-08 12:00:00',
          createTime: '2023-01-01 12:21:00',
          progress: 12,
          total: 42,
          useCustomProgress: false
        },
        {
          priority: '普通',
          title: '分享【易方达基金】海报给指定分享【易方',
          description: '分享海报给指定分享海报给指定分享海报给指…',
          serviceType: '日常关怀',
          deadline: '2023-09-08 12:00:00',
          createTime: '2023-01-01 12:21:00',
          progress: 12,
          total: 42,
          isExpireToday: true,
          useCustomProgress: true
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.block_9 {
  box-shadow: 0px 10px 50px 0px rgba(8, 19, 40, 0.08);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px;
  width: 706px;
  margin: 24px auto;
  padding-bottom: 24px;

  .image-text_8 {
    width: 658px;
    height: 40px;
    margin: 32px 0 0 24px;
    .icon_7 {
      width: 32px;
      height: 32px;
      margin-top: 4px;
    }
    .text-group_13 {
      width: 144px;
      height: 40px;
      overflow-wrap: break-word;
      color: rgba(51, 51, 51, 1);
      font-size: 28px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      white-space: nowrap;
      line-height: 40px;
      margin-right: 484px;
    }
  }

  :deep(.tabs_3) {
    width: 658px;
    margin: 32px 24px 0;
    
    .van-tabs__wrap {
      height: 48px;
    }
    
    .van-tab {
      padding: 0 32px;
      color: rgba(51, 51, 51, 1);
      font-size: 28px;
      line-height: 48px;
      
      &--active {
        color: rgba(38, 126, 240, 1);
        font-weight: 500;
      }
    }
    
    .van-tabs__line {
      bottom: 6px;
      background-color: rgba(38, 126, 240, 1);
    }
  }

  .service-item {
    width: 658px;
    margin: 32px 24px 0;

    .group_header {
      height: 36px;
      
      .tag {
        border-radius: 4px;
        width: 76px;
        height: 32px;
        margin-top: 2px;
        
        &.tag-重要 {
          background-color: rgba(255, 242, 232, 1);
          .tag-text { color: rgba(247, 129, 0, 1); }
        }
        
        &.tag-普通 {
          background-color: rgba(232, 245, 255, 1);
          .tag-text { color: rgba(38, 126, 240, 1); }
        }
        
        .tag-text {
          width: 60px;
          height: 24px;
          font-size: 20px;
          text-align: center;
          white-space: nowrap;
          line-height: 32px;
        }
      }

      .title-text {
        width: 566px;
        height: 36px;
        color: rgba(51, 51, 51, 1);
        font-size: 24px;
        line-height: 36px;
      }
    }

    .description-text {
      width: 658px;
      height: 36px;
      color: rgba(153, 153, 153, 1);
      font-size: 24px;
      margin: 8px 0;
      line-height: 36px;
    }

    .service-info {
      span {
        width: 100%;
        height: 36px;
        overflow-wrap: break-word;
        color: rgba(102, 102, 102, 1);
        font-size: 24px;
        text-align: left;
        white-space: nowrap;
        line-height: 36px;
        margin-bottom: 8px;
      }

      .text-wrapper {
        width: 100%;
        height: 36px;
        margin-bottom: 8px;
        display: flex;
        justify-content: space-between;
        
        .expire-text {
          width: 96px;
          height: 36px;
          color: rgba(247, 129, 0, 1);
          font-size: 24px;
          text-align: right;
          white-space: nowrap;
          line-height: 36px;
        }
      }
      
      .progress-wrapper {
        width: 100%;
        height: 36px;
        display: flex;
        align-items: center;
        gap: 16px;

        span {
          margin-bottom: 0;
          flex-shrink: 0;
        }

        .progress-bar {
          width: 442px;
          height: 8px;
          background-color: rgba(238, 238, 238, 1);
          border-radius: 4px;

          .progress {
            height: 100%;
            background-color: rgba(38, 126, 240, 1);
            border-radius: 4px;
            transition: width 0.3s ease;

            &.custom-progress {
              background: linear-gradient(90deg, #267EF0 0%, #70B3F8 100%);
            }
          }
        }
      }
    }
  }
}
</style>
