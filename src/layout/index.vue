<template>
  <div>
    <el-container class="app-wrapper">
      <el-aside width="210px" class="sidebar-container">
        <Menu></Menu>
      </el-aside>
      <el-container class="container">
        <el-header><Headers /></el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref,reactive } from "vue";
import Menu from './Menu/index.vue'
import Headers from './headers/index.vue'

</script>

<style scoped lang="scss">
// $sideBarWidth: 210px;
// $hideSideBarWidth: 67px;
  .app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>