<template>
  <div class="page flex-col">
    <HeaderBlock />
    <UserInfoBlock :loop-data="loopData0" :tabs-value="Tabs_tabs_1" />
    <NewsBlock />
    <ServiceDirectBlock :loop-data1="loopData1" />
    <LifecycleServiceBlock />
    <CustomerActivityBlock />
    <ProductSalesBlock @share="onClick_2" />
    <TabBar />
  </div>
</template>

<script>
import HeaderBlock from '@/components/wuzimokuai/HeaderBlock.vue';
import UserInfoBlock from '@/components/wuzimokuai/UserInfoBlock.vue';
import NewsBlock from '@/components/wuzimokuai/NewsBlock.vue';
import ServiceDirectBlock from '@/components/wuzimokuai/ServiceDirectBlock.vue';
import LifecycleServiceBlock from '@/components/wuzimokuai/LifecycleServiceBlock.vue';
import CustomerActivityBlock from '@/components/wuzimokuai/CustomerActivityBlock.vue';
import ProductSalesBlock from '@/components/wuzimokuai/ProductSalesBlock.vue';
import TabBar from '@/components/TabBar.vue';

export default {
  name: 'LanhuShouyeWuzimokuaibiaoti',
  components: {
    HeaderBlock,
    UserInfoBlock,
    NewsBlock,
    ServiceDirectBlock,
    LifecycleServiceBlock,
    CustomerActivityBlock,
    ProductSalesBlock,
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
    onClick_2() {
      alert(1);
    }
  }
};
</script>
<style scoped lang="less" src="./assets/index.less" />