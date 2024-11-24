<template>
  <div class="page flex-col">
    <div class="group_1 flex-col justify-end">
      <div class="nav-bar_1 flex-row">
        <img
          class="icon_1"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng40d15db83a2ca19ca4b437783085c00000036135f23c3d03e200a60b96c5d71e.png"
        />
        <span class="text_3">工作台</span>
        <div class="block_1 flex-col">
          <div class="group_3 flex-row justify-between">
            <img
              class="image_1"
              referrerpolicy="no-referrer"
              src="./assets/img/5f250da0d5e04d7da9e64ccee33e34ed_mergeImage.png"
            />
            <div class="box_1 flex-col"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="group_4 flex-col">
      <span class="text_4">展业工具</span>
      <div class="list_1 flex-col">
        <div
          class="list-items_1 flex-row"
          :style="{ background: item.lanhuBg0 }"
          v-for="(item, index) in loopData0"
          :key="index"
          @click="handleItemClick(item)"
        >
          <div class="text-group_1 flex-col justify-between">
            <span class="text_5" v-html="item.lanhutext0"></span>
            <span class="text_6" v-html="item.lanhutext1"></span>
          </div>
          <img class="image_2" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
        </div>
      </div>
      <span class="text_7">客户服务</span>
      <div class="group_5 flex-row">
        <div class="text-group_2 flex-col justify-between">
          <span class="text_8">存量客户池</span>
          <span class="text_9">客户信息一手掌握</span>
        </div>
        <img
          class="image_3"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng94422d9b5628a2b70309768b194303bcc65b3864746366b485f8f4de15c0543a.png"
        />
      </div>
      <div class="group_6 flex-row">
        <span class="text_10">渠道活码</span>
        <img
          class="image_4"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngd9d46b8b496a34ef2cb59a3b4bc17c5b361482fd3ceb1be3b27ecf0413fcc2b4.png"
        />
      </div>
      <TabBar />
    </div>
    <img
      class="image_5"
      referrerpolicy="no-referrer"
      src="./assets/img/SketchPngf4275db41b04f12309104761407ecc1d9e7301b590323e6d7c0feed4b4f7a91c.png"
    />
  </div>
</template>
<script>
import TabBar from '@/components/TabBar.vue';

export default {
  components: {
    TabBar
  },
  data() {
    return {
      loopData0: [
        {
          lanhuBg0: 'rgba(255,255,255,1.000000)',
          lanhutext0: '资讯中心',
          lanhutext1: '每日热点资讯触达',
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng955d6396cb3fd070457411401a1e72a48494dc58bb2f2d8ca8ed7047cfb3a11d'
        },
        {
          lanhuBg0: 'rgba(255,255,255,1.000000)',
          lanhutext0: '素材中心',
          lanhutext1: '最新推广素材一站式获取',
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng20ec298ae40ce52b787aded34c22c67b90ce798484c0053173f9baddcb222260'
        },
        {
          lanhuBg0: 'rgba(255,255,255,1.000000)',
          lanhutext0: '活动中心',
          lanhutext1: '活动上新快速分发',
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2d600ee56f97c323ff3e566a687cd2bc796df20433de1433d6ea7c18ed098515'
        },
        {
          lanhuBg0: 'rgba(255,255,255,1.000000)',
          lanhutext0: '产品中心',
          lanhutext1: '最新推广素材一站式获取',
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1e848a524ab36c4c91b482025fa0320f16d0efb5aff9955266f2f9a34d0299a8'
        },
        {
          lanhuBg0: 'rgba(255,255,255,1.000000)',
          lanhutext0: '生命周期',
          lanhutext1: '可视化看板，一键了解客户状态',
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge417e322f0c648477d21c4adc593cb19b86c12c73957844fa9d086377a1e9854'
        }
      ],
      constants: {}
    };
  },
  methods: {
    handleItemClick() {
      this.$router.push('/lanhu_shouye_wuzimokuaibiaoti');
    }
  }
};
</script>
<style scoped lang="less" src="./assets/index.less" />