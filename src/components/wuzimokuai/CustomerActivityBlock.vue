<template>
  <div class="block_11 flex-col">
    <div class="image-text_10 flex-row justify-between">
      <img
        class="icon_8"
        referrerpolicy="no-referrer"
        src="../../views/lanhu_shouye_wuzimokuaibiaoti/assets/img/arr2.png"
      />
      <span class="text-group_15">客户活动中心</span>
    </div>
    <img
      class="image_16"
      referrerpolicy="no-referrer"
      src="../../views/lanhu_shouye_wuzimokuaibiaoti/assets/img/img3.png"
    />
    <div class="group_22 flex-row justify-between">
      <div class="text-wrapper_8 flex-col"><span class="text_61">进行中</span></div>
      <span class="text_62">理财夏令营，10万元体验金免费领</span>
    </div>
    <div class="group_23 flex-row">
      <span class="text_63">剩余时间</span>
      <div class="text-wrapper_9 flex-col"><span class="text_64">16</span></div>
      <span class="text_65">天</span>
      <div class="text-wrapper_10 flex-col"><span class="text_66">16</span></div>
      <span class="text_67">:</span>
      <div class="text-wrapper_11 flex-col"><span class="text_68">16</span></div>
      <span class="text_69">:</span>
      <div class="text-wrapper_12 flex-col"><span class="text_70">58</span></div>
      <div class="tag_7 flex-col"><span class="text_71">分享</span></div>
    </div>
    <div class="image-text_11 flex-row justify-between">
      <span class="text-group_16">查看更多</span>
      <img
        class="icon_9"
        referrerpolicy="no-referrer"
        src="../../views/lanhu_shouye_wuzimokuaibiaoti/assets/img/arr1.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerActivityBlock'
};
</script>

<style scoped lang="less">
.block_11 {
  box-shadow: 0px 10px 50px 0px rgba(8, 19, 40, 0.08);
  background-color: #FFFFFF;
  border-radius: 16px;
  width: 706px;
  margin: 24px auto;
  padding: 24px;

  .image-text_10 {
    width: 100%;
    height: 88px;
    margin: 0;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #EBEDF0;
    
    .icon_8 {
      width: 32px;
      height: 32px;
    }
    
    .text-group_15 {
      margin: 0;
      color: #333;
      font-size: 28px;
      font-weight: 500;
      line-height: 40px;
    }
  }

  .image_16 {
    width: 100%;
    margin-top: 24px;
    border-radius: 8px;
  }

  .group_22 {
    margin-top: 16px;
    
    .text-wrapper_8 {
      background-color: #FFF2E8;
      border-radius: 4px;
      padding: 4px 12px;
      
      .text_61 {
        color: #F78100;
        font-size: 20px;
        font-weight: 500;
      }
    }
    
    .text_62 {
      color: #333;
      font-size: 24px;
      font-weight: 500;
    }
  }

  .group_23 {
    margin-top: 16px;
    align-items: center;
    
    .text_63 {
      color: #666;
      font-size: 22px;
      margin-right: 12px;
    }
    
    .text-wrapper_9, .text-wrapper_10, .text-wrapper_11, .text-wrapper_12 {
      background-color: #F7F8FA;
      border-radius: 4px;
      padding: 4px 8px;
      margin: 0 4px;
      
      span {
        color: #333;
        font-size: 22px;
        font-weight: 500;
      }
    }
    
    .text_65, .text_67, .text_69 {
      color: #666;
      font-size: 22px;
      margin: 0 4px;
    }
    
    .tag_7 {
      margin-left: auto;
      background-color: #267EF0;
      border-radius: 4px;
      padding: 4px 16px;
      
      .text_71 {
        color: #FFFFFF;
        font-size: 20px;
      }
    }
  }

  .image-text_11 {
    margin-top: 24px;
    padding: 0 8px;
    
    .text-group_16 {
      color: #666;
      font-size: 22px;
    }
    
    .icon_9 {
      width: 24px;
      height: 24px;
    }
  }
}
</style> 