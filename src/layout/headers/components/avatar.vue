<template>
    <el-dropdown>
        <el-avatar shape="square" :size="50" :src="squareUrl" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

</template>

<script setup>
import { ref,reactive } from "vue";
import { useStore } from 'vuex'
const store = useStore()
const squareUrl=ref(
    'https://img0.baidu.com/it/u=1056811702,4111096278&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
    )

    const logout = () => {
  store.dispatch('app/logout')
}
</script>

<style scoped lang="scss">
  
</style>