<template>
  <div class="block_12 flex-col">
    <div class="image-text_12 flex-row justify-between">
      <img
        class="icon_10"
        referrerpolicy="no-referrer"
        src="../../views/lanhu_shouye_wuzimokuaibiaoti/assets/img/arr2.png"
      />
      <span class="text-group_17">产品销售</span>
    </div>
    <div class="group_24 flex-row justify-between">
      <div class="text-group_18 flex-col justify-between">
        <span class="text_72">2023-02-17 15:00 开放</span>
        <span class="paragraph_1">
          汇添富核心优选六个月持有期混
          <br />
          合(FOF)A
        </span>
      </div>
      <button class="button_2 flex-col" @click="onClick"><span class="text_73">分享</span></button>
    </div>
    <div class="group_25 flex-row justify-between">
      <div class="tag_8 flex-col"><span class="text_74">低风险</span></div>
      <div class="tag_9 flex-col"><span class="text_75">混合型</span></div>
      <div class="tag_10 flex-col"><span class="text_76">1元起售</span></div>
    </div>
    <div class="group_26 flex-col">
      <div class="text-wrapper_13">
        <span class="text_78">混合型基金20年涨幅超10倍！把握好的时机，优选好基金</span>
      </div>
      <span class="text_79">产品亮点</span>
      <img
        class="label_3"
        referrerpolicy="no-referrer"
        src="../../views/lanhu_shouye_wuzimokuaibiaoti/assets/img/img1.png"
      />
    </div>
    <img
      class="image_17"
      referrerpolicy="no-referrer"
      src="../../views/lanhu_shouye_wuzimokuaibiaoti/assets/img/line1.png"
    />
    <div class="image-text_13 flex-row justify-between">
      <span class="text-group_20">查看更多</span>
      <img
        class="label_6"
        referrerpolicy="no-referrer"
        src="../../views/lanhu_shouye_wuzimokuaibiaoti/assets/img/arr1.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductSalesBlock',
  methods: {
    onClick() {
      this.$emit('share');
    }
  }
};
</script>

<style scoped lang="less">
.block_12 {
  box-shadow: 0px 10px 50px 0px rgba(8, 19, 40, 0.08);
  background-color: #FFFFFF;
  border-radius: 16px;
  width: 706px;
  margin: 24px auto;
  padding: 24px;

  .image-text_12 {
    width: 100%;
    height: 88px;
    margin: 0;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #EBEDF0;
    
    .icon_10 {
      width: 32px;
      height: 32px;
    }
    
    .text-group_17 {
      margin: 0;
      color: #333;
      font-size: 28px;
      font-weight: 500;
      line-height: 40px;
    }
  }

  .group_24 {
    margin-top: 24px;
    
    .text-group_18 {
      .text_72 {
        color: #666;
        font-size: 22px;
      }
      
      .paragraph_1 {
        color: #333;
        font-size: 24px;
        font-weight: 500;
        margin-top: 8px;
      }
    }
    
    .button_2 {
      background-color: #267EF0;
      border-radius: 4px;
      padding: 8px 24px;
      border: none;
      cursor: pointer;
      
      .text_73 {
        color: #FFFFFF;
        font-size: 20px;
      }
    }
  }

  .group_25 {
    margin-top: 16px;
    gap: 12px;
    
    .tag_8, .tag_9, .tag_10 {
      background-color: #F7F8FA;
      border-radius: 4px;
      padding: 4px 12px;
      
      span {
        color: #666;
        font-size: 20px;
      }
    }
  }

  .group_26 {
    margin-top: 24px;
    
    .text-wrapper_13 {
      .text_78 {
        color: #666;
        font-size: 22px;
      }
    }
    
    .text_79 {
      color: #333;
      font-size: 24px;
      font-weight: 500;
      margin: 16px 0;
    }
    
    .label_3 {
      width: 100%;
      border-radius: 8px;
    }
  }

  .image_17 {
    width: 100%;
    margin: 24px 0;
  }

  .image-text_13 {
    padding: 0 8px;
    
    .text-group_20 {
      color: #666;
      font-size: 22px;
    }
    
    .label_6 {
      width: 24px;
      height: 24px;
    }
  }
}
</style> 