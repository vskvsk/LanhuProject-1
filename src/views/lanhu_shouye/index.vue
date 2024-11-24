<template>
  <div class="page flex-col">
    <div class="group_1 flex-col justify-end">
      <div class="nav-bar_1 flex-row">
        <img
          class="icon_1"
          referrerpolicy="no-referrer"
          src="./assets/img/back.png"
        />
        <span class="text_3">工作台</span>
        <div class="block_1 flex-col">
          <div class="group_3 flex-row justify-between">
            <img
              class="image_1"
              referrerpolicy="no-referrer"
              src="./assets/img/more.png"
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
          src="./assets/img/icon.png"
        />
      </div>
      <div class="group_6 flex-row">
        <span class="text_10">渠道活码</span>
        <img
          class="image_4"
          referrerpolicy="no-referrer"
          src="./assets/img/icon.png"
        />
      </div>
      <TabBar />
    </div>
    <img
      class="image_5"
      referrerpolicy="no-referrer"
      src="./assets/img/icon.png"
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
          lanhuimage0: require('./assets/img/icon.png')
        },
        {
          lanhuBg0: 'rgba(255,255,255,1.000000)',
          lanhutext0: '素材中心',
          lanhutext1: '最新推广素材一站式获取',
          lanhuimage0: require('./assets/img/icon.png')
        },
        {
          lanhuBg0: 'rgba(255,255,255,1.000000)',
          lanhutext0: '活动中心',
          lanhutext1: '活动上新快速分发',
          lanhuimage0: require('./assets/img/icon.png')
        },
        {
          lanhuBg0: 'rgba(255,255,255,1.000000)',
          lanhutext0: '产品中心',
          lanhutext1: '最新推广素材一站式获取',
          lanhuimage0: require('./assets/img/icon.png')
        },
        {
          lanhuBg0: 'rgba(255,255,255,1.000000)',
          lanhutext0: '生命周期',
          lanhutext1: '可视化看板，一键了解客户状态',
          lanhuimage0: require('./assets/img/icon.png')
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