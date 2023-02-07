<template>
  <div class="hamburger-container " @click="toggleClick" id="hamburger">
    <el-icon ><Expand/></el-icon>
  </div>
</template>

<script setup >
import { Expand } from "@element-plus/icons-vue";
import { ref,reactive } from "vue";
import { useStore } from "vuex";

const store=useStore()
const toggleClick=() => {
  store.commit('app/changesideType')

}

</script>

<style scoped lang="scss">
  .hamburger-container{
    margin-right: 16px;
    box-sizing: border-box;
    cursor: pointer;
  }
</style>