<template>
  <div class="app-wrapper" :class="{ collapse: collapse }">
    <title-bar />
    <sidebar />
    <div class="main-container">
      <!--      <header-bar />-->
      <breadcrumb />
      <div class="main">
        <router-view />
      </div>
      <footer class="footer" :style="collapse ? 'width: 100%' : 'width :80%'">
        <div class="copy">
          Copyright © www.reddatetech.com, All Rights Reserved.
        </div>
        <div class="copy" style="margin-top: 4px">
          北京红枣科技有限公司
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { Sidebar, Breadcrumb, TitleBar } from "./components"

export default {
  components: {
    TitleBar,
    // HeaderBar,
    Sidebar,
    Breadcrumb
  },
  
  computed: {
    ...mapGetters(["collapse"])
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.main-container {
  position: relative;
  min-height: 100vh;
  margin-left: 210px;
  transition: margin-left 0.3s;
}

.main {
  height: calc(
    100vh - #{$title-bar-height} - #{$bread-height} - #{$footer-height}
  );
  width: 100%;
  padding: 20px;
  position: absolute;
  top: $title-bar-height + $bread-height;
  box-sizing: border-box;
  overflow: auto;
  background-color: #f4f4f5;
}

.footer {
  position: fixed;
  bottom: 0;
  height: $footer-height;

  padding: 22px 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  text-align: center;

  .copy {
    text-align: center;
    font-size: 12px;
    color: #8c939d;
  }
}
</style>
