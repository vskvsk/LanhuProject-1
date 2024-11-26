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
  padding: 24px;

  .image-text_8 {
    width: 100%;
    height: 88px;
    margin: 0;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #EBEDF0;
    
    .icon_7 {
      width: 32px;
      height: 32px;
    }
    
    .text-group_13 {
      margin: 0;
      color: #333;
      font-size: 28px;
      font-weight: 500;
      line-height: 40px;
    }
  }

  :deep(.tabs_3) {
    width: 100%;
    margin: 24px 0 8px;
    
    .van-tabs__wrap {
      height: 44px;
    }
    
    .van-tab {
      padding: 0 24px;
      font-size: 24px;
      line-height: 44px;
      
      &--active {
        font-weight: 500;
      }
    }
    
    .van-tabs__line {
      bottom: 4px;
      height: 4px;
    }
  }

  .service-item {
    width: 100%;
    margin: 16px 0 0;
    padding: 24px;
    background: #F7F8FA;
    border-radius: 8px;

    .group_header {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 24px;
      
      .tag {
        border-radius: 4px;
        width: 56px;
        height: 32px;
        flex-shrink: 0;
        
        &.tag-重要 {
          background-color: #FFF2E8;
          .tag-text { color: #F78100; }
        }
        
        &.tag-普通 {
          background-color: #E8F5FF;
          .tag-text { color: #267EF0; }
        }
        
        &.tag-轻微 {
          background-color: #E8F5FF;
          .tag-text { color: #267EF0; }
        }
        
        .tag-text {
          width: 100%;
          text-align: center;
          font-size: 20px;
          line-height: 32px;
          font-weight: 500;
        }
      }

      .title-text {
        flex: 1;
        font-size: 24px;
        line-height: 32px;
        color: #333;
        font-weight: 500;
        margin: 0;
      }
    }

    .description-text {
      width: 100%;
      height: 32px;
      color: #999;
      font-size: 22px;
      margin: 12px 0 24px;
      line-height: 32px;
    }

    .service-info {
      span {
        font-size: 22px;
        line-height: 32px;
        margin-bottom: 12px;
        display: block;
      }

      .text-wrapper {
        height: 32px;
        margin-bottom: 12px;
        display: flex;
        justify-content: space-between;
        
        .expire-text {
          color: #F78100;
          font-size: 22px;
        }
      }
      
      .progress-wrapper {
        height: 32px;
        margin-top: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          font-size: 22px;
          margin-bottom: 0;
          white-space: nowrap;
        }

        .progress-bar {
          width: 440px;
          height: 8px;
          background-color: #EEEEEE;
          border-radius: 4px;
          margin-left: 16px;

          .progress {
            height: 100%;
            background-color: #267EF0;
            border-radius: 4px;

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
