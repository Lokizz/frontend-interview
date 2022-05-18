<template>
  <div>
    <header>
      <h1>Vue3 数据可视化前端方案</h1>
    </header>
    <section class="container">
      <!-- 左侧 -->
      <section class="left-col">
        <chartItem>
          <itemOne />
        </chartItem>
        <chartItem>
          <itemTwo />
        </chartItem>
      </section>
      <!-- 中间 -->
      <section class="mid-col">
        <mapPage></mapPage>
      </section>
      <!-- 右侧 -->
      <section class="right-col">
        <chartItem>
          <itemThree />
        </chartItem>
        <chartItem>
          <itemFour />
        </chartItem>
      </section>
    </section>
  </div>
</template>

<script>
// ? @ 代表 src 路径
import chartItem from "@/components/chartItem.vue";
import itemOne from "@/components/itemOne.vue";
import itemTwo from "@/components/itemTwo.vue";
import itemThree from "@/components/itemThree.vue";
import itemFour from "@/components/itemFour.vue";
import mapPage from "@/components/mapPage.vue";

export default {
  components: {
    chartItem,
    itemOne,
    itemTwo,
    itemThree,
    itemFour,
    mapPage,
  },
};
</script>

<style lang="less">
header {
  height: 1rem;
  background: rgba(0, 0, 255, 0.4);
  h1 {
    color: rgb(255, 255, 233);
    text-align: center;
    font-size: 0.375rem;
    line-height: 1rem;
    user-select: none;
  }
}

footer {
  height: 1rem;
  background: rgba(0, 0, 255, 0.4);
}

.container {
  background: rgba(255, 255, 255, 0.1);
  margin: 0;
  padding: 0.125rem 0.125rem 0;
  display: flex;
  .left-col,
  .right-col {
    flex: 3;
  }
  .mid-col {
    flex: 5;
    height: 5rpx;
    padding: 0.125rem;
    margin: 0.25rem;
  }
}
// 约束屏幕尺寸
@media screen and (max-width: 768px) {
  html {
    font-size: 24px !important;
    body {
      height: initial;
      .container {
        display: initial;
        overflow: scroll;
        > * {
          display: initial;
          width: 100%;
        }
        .left-col,
        .right-col {
          display: block;
        }
        .mid-col {
          .map {
            width: 100%;
            height: 10rem;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1500px) {
  html {
    font-size: 42px !important;
  }
  .container {
    display: initial;
    > * {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .left-col,
    .right-col {
      > * {
        flex: 1;
      }
    }
    .mid-col {
      height: 10rem;
    }
  }
}

@media screen and (min-width: 1920px) {
  html {
    font-size: 80px !important;
  }
}
</style>
