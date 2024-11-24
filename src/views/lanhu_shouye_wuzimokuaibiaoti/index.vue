<template>
  <div class="page flex-col">
    <div class="block_1 flex-col">
      <img
        class="image_1"
        referrerpolicy="no-referrer"
        src="./assets/img/head.png"
      />
      <van-nav-bar class="nav-bar_1 NavBar">
        <template #left>
          <img
            class="image_2"
            referrerpolicy="no-referrer"
            src="./assets/img/back.png"
          />
        </template>
        <template #title>
          <span class="text_1">工作台</span>
        </template>
        <template #right>
          <img
            class="image_3"
            referrerpolicy="no-referrer"
            src="./assets/img/bg1.png"
          />
        </template>
      </van-nav-bar>
    </div>
    <div class="block_2 flex-col">
      <div class="text-group_1 flex-col justify-between">
        <span class="text_2">早上好,&nbsp;张三</span>
        <span class="text_3">07/26&nbsp;星期一</span>
      </div>
      <div class="list_1 flex-row">
        <div class="text-group_2 flex-col justify-between" v-for="(item, index) in loopData0" :key="index">
          <span class="text_4" v-html="item.lanhutext0"></span>
          <span class="text_5" v-html="item.lanhutext1"></span>
        </div>
      </div>
      <van-tabs
        class="tabs_1 Tabs"
        color="rgba(51,51,51,1)"
        background="transparent"
        v-model="Tabs_tabs_1"
        title-active-color="rgba(51,51,51,1)"
        title-inactive-color="rgba(165,170,173,1)"
        line-width="0px"
        line-height="0px"
        :ellipsis="false"
      >
        <van-tab
          v-for="(item, index) in ['热点分享', '服务直击', '生命周期服务', '内容广场']"
          :key="index"
          :title="item"
        ></van-tab>
      </van-tabs>
    </div>
    <div class="block_3 flex-col">
      <div class="image-text_1 flex-row justify-between">
        <img
          class="icon_1"
          referrerpolicy="no-referrer"
          src="./assets/img/icon1.png"
        />
        <span class="text-group_3">热点分享</span>
      </div>
      <div class="group_2 flex-col">
        <div class="tag_1 flex-col"><span class="text_10">分享</span></div>
      </div>
      <van-tabs
        class="tabs_2 Tabs"
        color="undefined"
        background="transparent"
        v-model="Tabs_tabs_2"
        title-active-color="rgba(102,102,102,1)"
        title-inactive-color="undefined"
        line-width="0px"
        line-height="0px"
        :ellipsis="false"
      >
        <van-tab v-for="(item, index) in ['资讯栏目1', '资讯栏目2', '资讯栏目2']" :key="index" :title="item"></van-tab>
      </van-tabs>
      <div class="group_4 flex-row justify-between">
        <img
          class="image_4"
          referrerpolicy="no-referrer"
          src="./assets/img/img1.png"
        />
        <div class="group_5 flex-col justify-between">
          <span class="text_14">资产质量好转、零售业绩AMU创招行业绩透露了</span>
          <div class="box_2 flex-row">
            <span class="text_15">资源来源</span>
            <span class="text_16">xx小时前</span>
            <div class="tag_2 flex-col"><span class="text_17">分享</span></div>
          </div>
        </div>
      </div>
      <img
        class="image_5"
        referrerpolicy="no-referrer"
        src="./assets/img/line1.png"
      />
      <div class="group_6 flex-row justify-between">
        <img
          class="image_6"
          referrerpolicy="no-referrer"
          src="./assets/img/img1.png"
        />
        <div class="box_3 flex-col justify-between">
          <span class="text_18">资产质量好转、零售业绩AMU创招行业绩透露了</span>
          <div class="box_4 flex-row">
            <span class="text_19">资源来源</span>
            <span class="text_20">xx小时前</span>
            <button class="button_1 flex-col" @click="onClick_1"><span class="text_21">分享</span></button>
          </div>
        </div>
      </div>
      <img
        class="image_7"
        referrerpolicy="no-referrer"
        src="./assets/img/line1.png"
      />
      <div class="group_7 flex-row justify-between">
        <img
          class="image_8"
          referrerpolicy="no-referrer"
          src="./assets/img/img1.png"
        />
        <div class="group_8 flex-col justify-between">
          <span class="text_22">资产质量好转、零售业绩AMU创招行业绩透露了</span>
          <div class="block_4 flex-row">
            <span class="text_23">资源来源</span>
            <span class="text_24">xx小时前</span>
            <div class="tag_3 flex-col"><span class="text_25">分享</span></div>
          </div>
        </div>
      </div>
      <div class="image-text_2 flex-row justify-between">
        <span class="text-group_4">查看更多</span>
        <img
          class="icon_2"
          referrerpolicy="no-referrer"
          src="./assets/img/arr1.png"
        />
      </div>
      <img
        class="image_9"
        referrerpolicy="no-referrer"
        src="./assets/img/line1.png"
      />
      <div class="group_9 flex-row">
        <div class="block_5 flex-col">
          <div class="block_6 flex-col">
            <div class="block_7 flex-col">
              <div class="image-wrapper_1 flex-col">
                <img
                  class="image_10"
                  referrerpolicy="no-referrer"
                  src="./assets/img/bg2.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="image-text_3 flex-row">
          <div class="text-group_5 flex-row">
            <span class="text_26">早上好！今天是9月21号星期三，为您呈递今天的财富早报</span>
            <span class="text_27">去分享</span>
          </div>
          <img
            class="label_1"
            referrerpolicy="no-referrer"
            src="./assets/img/arr2.png"
          />
        </div>
      </div>
      <div class="group_10 flex-row">
        <div class="text-group_6 flex-col justify-between">
          <span class="text_28">申购</span>
          <span class="text_29">上市</span>
        </div>
        <div class="image-wrapper_2 flex-col justify-between">
          <img
            class="image_11"
            referrerpolicy="no-referrer"
            src="./assets/img/bg3.png"
          />
          <img
            class="image_12"
            referrerpolicy="no-referrer"
            src="./assets/img/bg3.png"
          />
        </div>
        <div class="text-group_7 flex-col justify-between">
          <span class="text_30">3只新股</span>
          <span class="text_31">2只新股</span>
        </div>
        <div class="text-group_8 flex-col justify-between">
          <span class="text_32">1只新债</span>
          <span class="text_33">1只新债</span>
        </div>
        <div class="image-text_4 flex-row justify-between">
          <span class="text-group_9">去分享</span>
          <img
            class="icon_3"
            referrerpolicy="no-referrer"
            src="./assets/img/arr2.png"
          />
        </div>
      </div>
    </div>
    <div class="block_8 flex-col">
      <div class="image-text_5 flex-row justify-between">
        <img
          class="icon_4"
          referrerpolicy="no-referrer"
          src="./assets/img/arr2.png"
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
            src="./assets/img/arr2.png"
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
    <div class="block_9 flex-col">
      <div class="image-text_8 flex-row justify-between">
        <img
          class="icon_7"
          referrerpolicy="no-referrer"
          src="./assets/img/arr2.png"
        />
        <span class="text-group_13">生命周期服务</span>
      </div>
      <van-tabs
        class="tabs_3 Tabs"
        color="rgba(38,126,240,1.000000)"
        background="transparent"
        v-model="Tabs_tabs_3"
        title-active-color="rgba(38,126,240,1)"
        title-inactive-color="rgba(51,51,51,1)"
        line-width="52px"
        line-height="4px"
        :ellipsis="false"
      >
        <van-tab v-for="(item, index) in ['重要', '普通', '轻微']" :key="index" :title="item"></van-tab>
      </van-tabs>
      <div class="group_15 flex-row justify-between">
        <div class="tag_4 flex-col"><span class="text_41">重要</span></div>
        <span class="text_42">对新添加的客户进行KYC认证</span>
      </div>
      <div class="group_16 flex-col">
        <span class="text_43">服务类型：流失挽回</span>
        <span class="text_44">服务截止：2023-09-08&nbsp;12:00:00</span>
        <span class="text_45">创建时间：2023-01-01&nbsp;12:21:00</span>
        <div class="box_6 flex-row justify-between">
          <span class="text_46">服务进度：12/42</span>
          <img
            class="image_13"
            referrerpolicy="no-referrer"
            src="./assets/img/line2.png"
          />
        </div>
      </div>
      <div class="group_17 flex-row justify-between">
        <div class="tag_5 flex-col"><span class="text_47">普通</span></div>
        <span class="text_48">分享【易方达基金】海报给指定分享【易方</span>
      </div>
      <span class="text_49">分享海报给指定分享海报给指定分享海报给指…</span>
      <div class="group_18 flex-col">
        <span class="text_50">服务类型：日常关怀</span>
        <div class="text-wrapper_7 flex-row justify-between">
          <span class="text_51">服务截止：2023-09-08&nbsp;12:00:00</span>
          <span class="text_52">今日到期</span>
        </div>
        <span class="text_53">创建时间：2023-01-01&nbsp;12:21:00</span>
        <div class="block_10 flex-row justify-between">
          <span class="text_54">服务进度：12/42</span>
          <img
            class="image_14"
            referrerpolicy="no-referrer"
            src="./assets/img/line2.png"
          />
        </div>
      </div>
      <div class="group_19 flex-row justify-between">
        <div class="tag_6 flex-col"><span class="text_55">轻微</span></div>
        <span class="text_56">对新添加的客户进行KYC认证</span>
      </div>
      <div class="group_20 flex-col">
        <span class="text_57">服务类型：流失挽回</span>
        <span class="text_58">服务截止：2023-09-08&nbsp;12:00:00</span>
        <span class="text_59">创建时间：2023-01-01&nbsp;12:21:00</span>
        <div class="box_7 flex-row justify-between">
          <span class="text_60">服务进度：12/42</span>
          <img
            class="image_15"
            referrerpolicy="no-referrer"
            src="./assets/img/line2.png"
          />
        </div>
      </div>
      <div class="image-text_9 flex-row justify-between">
        <span class="text-group_14">查看更多</span>
        <img
          class="label_2"
          referrerpolicy="no-referrer"
          src="./assets/img/arr1.png"
        />
      </div>
      <div class="group_21 flex-col"></div>
    </div>
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
    <van-tabbar
      class="tab-bar_1 TabBar"
      active-color="undefined"
      inactive-color="undefined"
      v-model="TabBar_tab_bar_1"
      :border="false"
      :fixed="false"
    >
      <van-tabbar-item class="tab-bar-item_1" name="TabBar_tab_bar_10">
        <template #icon>
          <div class="icon_11 flex-col">
            <img
              class="icon_12"
              referrerpolicy="no-referrer"
              src="./assets/img/icon2.png"
            />
            <span class="text_95">首页</span>
          </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item class="tab-bar-item_2" name="TabBar_tab_bar_11">
        <template #icon>
          <div class="icon_13 flex-col">
            <div class="group_33 flex-col">
              <img
                class="icon_14"
                referrerpolicy="no-referrer"
                src="./assets/img/icon3.png"
              />
              <span class="text_96">动态</span>
            </div>
          </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item class="tab-bar-item_3" name="TabBar_tab_bar_12">
        <template #icon>
          <div class="icon_15 flex-col">
            <img
              class="icon_16"
              referrerpolicy="no-referrer"
              src="./assets/img/icon4.png"
            />
            <span class="text_97">应用</span>
          </div>
        </template>
      </van-tabbar-item>
    </van-tabbar>
    <img
      class="image_19"
      referrerpolicy="no-referrer"
      src="./assets/img/bg5.png"
    />
  </div>
</template>
<script>
export default {
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