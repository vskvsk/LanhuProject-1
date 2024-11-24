<template>
  <div class="block_8 flex-col">
    <div class="image-text_5 flex-row justify-between">
      <img
        class="icon_4"
        referrerpolicy="no-referrer"
        src="../../views/lanhu_shouye_wuzimokuaibiaoti/assets/img/arr2.png"
      />
      <span class="text-group_10">服务直击</span>
    </div>
    <div class="group_11 flex-row">
      <div class="box_5 flex-col justify-between">
        <div class="group_12 flex-row justify-between">
          <div class="group_13 flex-col align-center">
            <div class="text-wrapper_5 flex-col"><span class="text_34">…</span></div>
          </div>
          <span class="text_35">您有XX位客户今天过生日，快去向</span>
        </div>
        <span class="text_36">ta们送祝福吧~</span>
      </div>
      <div class="image-text_6 flex-row justify-between">
        <span class="text-group_11">送祝福</span>
        <img
          class="icon_5"
          referrerpolicy="no-referrer"
          src="../../views/lanhu_shouye_wuzimokuaibiaoti/assets/img/arr2.png"
        />
      </div>
    </div>
    <div class="list_2 flex-col">
      <div
        class="list-items_1 flex-row"
        :style="{ background: item.lanhuBg0 }"
        v-for="(item, index) in loopData1"
        :key="index"
      >
        <span class="text_37" :style="{ color: item.lanhufontColor0 }" v-html="item.lanhutext0"></span>
        <div class="image-text_7 flex-row justify-between">
          <span class="text-group_12" :style="{ color: item.lanhufontColor1 }" v-html="item.lanhutext1"></span>
          <img class="icon_6" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceDirectBlock',
  props: {
    loopData1: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="less">
.block_8 {
  box-shadow: 0px 10px 50px 0px rgba(8, 19, 40, 0.08);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px;
  width: 706px;
  margin: 24px auto;
  padding-bottom: 24px;

  .image-text_5 {
    width: 658px;
    height: 40px;
    margin: 32px 0 0 24px;
    .icon_4 {
      width: 32px;
      height: 32px;
      margin-top: 4px;
    }
    .text-group_10 {
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
    }
  }

  .group_11 {
    width: 658px;
    height: 120px;
    margin: 32px 0 0 24px;
    .box_5 {
      background-color: rgba(247, 248, 250, 1);
      border-radius: 12px;
      height: 120px;
      width: 498px;
      padding: 24px;
      box-sizing: border-box;
      
      .text_35 {
        width: 390px;
        height: 36px;
        overflow-wrap: break-word;
        color: rgba(51, 51, 51, 1);
        font-size: 24px;
        text-align: left;
        white-space: nowrap;
        line-height: 36px;
      }
      
      .text_36 {
        width: 390px;
        height: 36px;
        overflow-wrap: break-word;
        color: rgba(51, 51, 51, 1);
        font-size: 24px;
        text-align: left;
        white-space: nowrap;
        line-height: 36px;
      }
      
      .group_12 {
        .group_13 {
          .text-wrapper_5 {
            background-color: rgba(247, 248, 250, 1);
            border-radius: 50%;
            width: 48px;
            height: 48px;
            
            .text_34 {
              width: 48px;
              height: 48px;
              overflow-wrap: break-word;
              color: rgba(51, 51, 51, 1);
              font-size: 32px;
              text-align: center;
              line-height: 48px;
            }
          }
        }
      }
    }
    
    .image-text_6 {
      background-color: rgba(38, 126, 240, 1);
      border-radius: 12px;
      width: 144px;
      height: 120px;
      padding: 42px 24px;
      box-sizing: border-box;
      
      .text-group_11 {
        width: 64px;
        height: 36px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 24px;
        text-align: left;
        white-space: nowrap;
        line-height: 36px;
      }
      
      .icon_5 {
        width: 32px;
        height: 32px;
        margin-top: 2px;
      }
    }
  }

  .list_2 {
    width: 658px;
    margin: 16px 24px 0;
    
    .list-items_1 {
      border-radius: 12px;
      height: 120px;
      margin-top: 16px;
      padding: 24px;
      box-sizing: border-box;
      
      .text_37 {
        width: 390px;
        height: 36px;
        overflow-wrap: break-word;
        font-size: 24px;
        text-align: left;
        white-space: nowrap;
        line-height: 36px;
      }
      
      .image-text_7 {
        width: 144px;
        height: 120px;
        
        .text-group_12 {
          width: 64px;
          height: 36px;
          overflow-wrap: break-word;
          font-size: 24px;
          text-align: left;
          white-space: nowrap;
          line-height: 36px;
        }
        
        .icon_6 {
          width: 32px;
          height: 32px;
          margin-top: 2px;
        }
      }
      
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      .image-text_7 {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
  }
}
</style>
