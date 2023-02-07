<template>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item,index) in breadcrumbList" ::key="index">
        <span v-if="index===breadcrumbList.length-1" class="no-redirect">{{$t(`menus.${item.name}`)}}</span>
        <span v-else class="redirect" to="item.path">{{$t(`menus.${item.name}`)}}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ref,reactive, watch} from "vue";
import { useRoute } from "vue-router";

const route=useRoute()


const breadcrumbList=ref([])
const initBreadcrumbList=() => {
    breadcrumbList.value=route.matched
    console.log(route.matched);
}
watch(route,() => {//监听
    initBreadcrumbList()
},{deep:true,immediate:true})


</script>

<style scoped lang="scss">
  .no-redirect {
  color: #97a8be;
  cursor: text;
}
.redirect {
  color: #666;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: $menuBg;
  }
}
</style>