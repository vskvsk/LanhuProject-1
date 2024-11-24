<template>
  <div class="tab-bar_1 flex-row justify-between">
    <div class="tab-bar-item_1 flex-col" @click="handleTabClick('home')" :class="{ active: currentTab === 'home' }">
      <div class="icon_2 flex-col">
        <img
          class="icon_3"
          referrerpolicy="no-referrer"
          src="../views/lanhu_shouye/assets/img/SketchPngfb1035ca377780535a72d79bad4ca24e17cb3d32d65ba379beb7802efb09a020.png"
        />
        <span class="text_11">首页</span>
      </div>
    </div>
    <div class="tab-bar-item_2 flex-col" @click="handleTabClick('dynamic')" :class="{ active: currentTab === 'dynamic' }">
      <div class="icon_4 flex-col">
        <div class="box_2 flex-col">
          <img
            class="icon_5"
            referrerpolicy="no-referrer"
            src="../views/lanhu_shouye/assets/img/df7c010c135b46deb942a1481c82c44b_mergeImage.png"
          />
          <span class="text_12">动态</span>
        </div>
      </div>
    </div>
    <div class="tab-bar-item_3 flex-col" @click="handleTabClick('app')" :class="{ active: currentTab === 'app' }">
      <div class="icon_6 flex-col">
        <img
          class="icon_7"
          referrerpolicy="no-referrer"
          src="../views/lanhu_shouye/assets/img/SketchPngfa4048cb8baf2ad9b3e76e0d0078c3b0d2019c32a7decde51443425f3656c5fb.png"
        />
        <span class="text_13">应用</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {
      currentTab: this.getCurrentTab()
    };
  },
  methods: {
    getCurrentTab() {
      const path = this.$route.path;
      if (path === '/lanhu_shouye') return 'home';
      if (path === '/lanhu_shouye_wuzimokuaibiaoti') return 'dynamic';
      return 'app';
    },
    handleTabClick(tab) {
      this.currentTab = tab;
      if (tab === 'home') {
        this.$router.push('/lanhu_shouye');
      } else if (tab === 'dynamic') {
        this.$router.push('/lanhu_shouye_wuzimokuaibiaoti');
      }
    }
  },
  watch: {
    '$route'() {
      this.currentTab = this.getCurrentTab();
    }
  }
};
</script>

<style scoped lang="less">
.tab-bar_1 {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 750px;
  height: 98px;
  background: #fff;
  z-index: 100;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);

  .tab-bar-item_1,
  .tab-bar-item_2,
  .tab-bar-item_3 {
    height: 98px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;

    &.active {
      .text_11,
      .text_12,
      .text_13 {
        color: #3975c6;
      }
    }

    .text_11,
    .text_12,
    .text_13 {
      margin-top: 8px;
      font-size: 24px;
      color: #333;
    }

    img {
      width: 44px;
      height: 44px;
    }
  }
}
</style>
