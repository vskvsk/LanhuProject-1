<template>
  <div class="page flex-col">
    <HeaderBlock />
    <UserInfoBlock :loop-data="loopData0" :tabs-value="Tabs_tabs_1" />
    <NewsBlock />
    <ServiceDirectBlock :loop-data1="loopData1" />
    <LifecycleServiceBlock />
    <div class="block_11 flex-col">
      <div class="image-text_10 flex-row justify-between">
        <img
          class="icon_8"
          referrerpolicy="no-referrer"
          src="./assets/img/arr2.png"
        />
        <span class="text-group_15">客户活动中心</span>
      </div>
      <img
        class="image_16"
        referrerpolicy="no-referrer"
        src="./assets/img/img3.png"
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
          src="./assets/img/arr1.png"
        />
      </div>
    </div>
    <div class="block_12 flex-col">
      <div class="image-text_12 flex-row justify-between">
        <img
          class="icon_10"
          referrerpolicy="no-referrer"
          src="./assets/img/arr2.png"
        />
        <span class="text-group_17">产品销售</span>
      </div>
      <div class="group_24 flex-row justify-between">
        <div class="text-group_18 flex-col justify-between">
          <span class="text_72">2023-02-17&nbsp;15:00&nbsp;开放</span>
          <span class="paragraph_1">
            汇添富核心优选六个月持有期混
            <br />
            合(FOF)A
          </span>
        </div>
        <button class="button_2 flex-col" @click="onClick_2"><span class="text_73">分享</span></button>
      </div>
      <div class="group_25 flex-row justify-between">
        <div class="tag_8 flex-col"><span class="text_74">低风险</span></div>
        <div class="tag_9 flex-col"><span class="text_75">混合型</span></div>
        <div class="tag_10 flex-col"><span class="text_76">1元起售</span></div>
      </div>
      <div class="group_26 flex-col">
        <div class="text-wrapper_13">
          <span class="text_77">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="text_78">混合型基金20年涨幅超10倍！把握好的时机，优选好基金</span>
        </div>
        <span class="text_79">产品亮点</span>
        <img
          class="label_3"
          referrerpolicy="no-referrer"
          src="./assets/img/img1.png"
        />
      </div>
      <img
        class="image_17"
        referrerpolicy="no-referrer"
        src="./assets/img/line1.png"
      />
      <div class="group_27 flex-row justify-between">
        <div class="text-group_19 flex-col justify-between">
          <span class="text_80">未开发，开放时间未知</span>
          <span class="paragraph_2">
            汇添富核心优选六个月持有期混
            <br />
            合(FOF)A
          </span>
        </div>
        <button class="button_3 flex-col" @click="onClick_3"><span class="text_81">分享</span></button>
      </div>
      <div class="group_28 flex-row justify-between">
        <div class="tag_11 flex-col"><span class="text_82">中高风险</span></div>
        <div class="tag_12 flex-col"><span class="text_83">混合型</span></div>
        <div class="tag_13 flex-col"><span class="text_84">1元起售</span></div>
      </div>
      <div class="group_29 flex-col">
        <div class="text-wrapper_14">
          <span class="text_85">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="text_86">混合型基金20年涨幅超10倍！把握好的时机，优选好基金</span>
        </div>
        <span class="text_87">产品亮点</span>
        <img
          class="label_4"
          referrerpolicy="no-referrer"
          src="./assets/img/bg4.png"
        />
      </div>
      <img
        class="image_18"
        referrerpolicy="no-referrer"
        src="./assets/img/line1.png"
      />
      <div class="group_30 flex-row justify-between">
        <span class="paragraph_3">
          汇添富核心优选六个月持有期混
          <br />
          合(FOF)A
        </span>
        <button class="button_4 flex-col" @click="onClick_4"><span class="text_88">分享</span></button>
      </div>
      <div class="group_31 flex-row justify-between">
        <div class="tag_14 flex-col"><span class="text_89">中高风险</span></div>
        <div class="tag_15 flex-col"><span class="text_90">混合型</span></div>
        <div class="tag_16 flex-col"><span class="text_91">1元起售</span></div>
      </div>
      <div class="group_32 flex-col">
        <div class="text-wrapper_15">
          <span class="text_92">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="text_93">混合型基金20年涨幅超10倍！把握好的时机，优选好基金</span>
        </div>
        <span class="text_94">产品亮点</span>
        <img
          class="label_5"
          referrerpolicy="no-referrer"
          src="./assets/img/bg4.png"
        />
      </div>
      <div class="image-text_13 flex-row justify-between">
        <span class="text-group_20">查看更多</span>
        <img
          class="label_6"
          referrerpolicy="no-referrer"
          src="./assets/img/arr1.png"
        />
      </div>
    </div>
    <TabBar />
  </div>
</template>

<script>
import HeaderBlock from '@/components/wuzimokuai/HeaderBlock.vue';
import UserInfoBlock from '@/components/wuzimokuai/UserInfoBlock.vue';
import NewsBlock from '@/components/wuzimokuai/NewsBlock.vue';
import ServiceDirectBlock from '@/components/wuzimokuai/ServiceDirectBlock.vue';
import LifecycleServiceBlock from '@/components/wuzimokuai/LifecycleServiceBlock.vue';
import TabBar from '@/components/TabBar.vue';

export default {
  name: 'LanhuShouyeWuzimokuaibiaoti',
  components: {
    HeaderBlock,
    UserInfoBlock,
    NewsBlock,
    ServiceDirectBlock,
    LifecycleServiceBlock,
    TabBar
  },
  data() {
    return {
      loopData0: [
        { lanhutext0: '1920', lanhutext1: '我的客户' },
        { lanhutext0: '1253', lanhutext1: '认证客户' },
        { lanhutext0: '195', lanhutext1: '昨日新增' },
        { lanhutext0: '168', lanhutext1: '昨日流失' }
      ],
      Tabs_tabs_1: 0,
      Tabs_tabs_2: 2,
      loopData1: [
        {
          lanhuBg0:'#FFFFFF',
          lanhutext0: '查看客户分组，快速识别特征客户',
          lanhufontColor0: 'rgba(108,122,184,1)',
          lanhutext1: '去查看',
          lanhufontColor1: 'rgba(108,122,184,1)',
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4a454ff86d6c8ff1ac2ce08e9d9083c98df9f3d2cd9627e40811ffb0bd68022f'
        },
        {
          lanhuBg0:'#FFFFFF',
          lanhutext0: '您还有XX位客户待添加好友，快去添加吧～',
          lanhufontColor0: 'rgba(63,130,128,1)',
          lanhutext1: '去添加',
          lanhufontColor1: 'rgba(63,130,128,1)',
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng88576d151afbc195fe78b246f2b00f1e65dffe22947c28a9d685a8a881f89d59'
        },
        {
          lanhuBg0:'#FFFFFF',
          lanhutext0: '管理员为您分配了XX条线索，快去跟进吧～',
          lanhufontColor0: 'rgba(171,115,77,1)',
          lanhutext1: '去跟进',
          lanhufontColor1: 'rgba(171,115,77,1)',
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng35f9611d2ce49de87d42d2519812356178de2e2062c595dc01f7d2dac7675b49'
        }
      ],
      Tabs_tabs_3: 0,
      TabBar_tab_bar_1: undefined,
      constants: {}
    };
  },
  methods: {
    onClick_1() {
      alert(1);
    },
    onClick_2() {
      alert(1);
    },
    onClick_3() {
      alert(1);
    },
    onClick_4() {
      alert(1);
    }
  }
};
</script>
<style scoped lang="less" src="./assets/index.less" />