<template>
  <div @click="handleFullScreen" id="screenFul">
    <el-icon><FullScreen /></el-icon>
  </div>
</template>

<script setup>
import screenfull from 'screenfull'
import { FullScreen } from "@element-plus/icons-vue";

const handleFullScreen = () => { //设置全屏
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}

</script>

<style lang="scss" scoped></style>
