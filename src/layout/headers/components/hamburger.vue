<template>
  <div class="hamburger-container">
    <el-icon><Operation /></el-icon>
  </div>
</template>

<script setup >
import { Operation } from "@element-plus/icons-vue";
import { ref,reactive } from "vue";
</script>

<style scoped lang="scss">
  .hamburger-container{
    margin-right: 16px;
    box-sizing: border-box;
    cursor: pointer;
  }
</style>