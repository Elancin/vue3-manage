<template>
  <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        :default-active="defaultActive"
        text-color="#fff"
        router
        unique-opened
        
      >
        <el-sub-menu :index="item.id" v-for="item in MenuList" ::key="item.id">
            <template #title>
                <el-icon><User /></el-icon>
                <span>{{ $t(`menus.${item.path}`) }}</span>
            </template>
            
                <el-menu-item  :index="'/'+it.path" v-for="it in item.children" :key="it.id" @click="savePath(it.path)">
                    <el-icon><ElementPlus /></el-icon>
                    {{ $t(`menus.${it.path}`) }}
                </el-menu-item>
        </el-sub-menu>
      </el-menu>
</template>

<script setup >
import { ref,reactive } from "vue";
import { menuList } from "@/api/menu";
import { User,ElementPlus } from "@element-plus/icons-vue";

const defaultActive = ref(sessionStorage.getItem('path') || '/users')
const MenuList=ref([])
const initMenusList=async()=>{
    MenuList.value=await menuList()
}
initMenusList()

const savePath = (path) => {
  sessionStorage.setItem('path', `/${path}`)
}
</script>

<style scoped lang="scss">
  
</style>