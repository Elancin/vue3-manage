<template>
  <el-dropdown @command="handleCommand">
    <el-icon><Setting /></el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh" :disabled="currentLanguage ==='zh'">中文 </el-dropdown-item>
        <el-dropdown-item command="en" :disabled="currentLanguage ==='en'">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref,reactive ,computed} from "vue";
import { Setting } from "@element-plus/icons-vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
const store=useStore

const i18n=useI18n()
const currentLanguage=computed(() => {
    return i18n.locale.value
})

const handleCommand=(val) => {
    i18n.locale.value=val
    store.commit('app/changeLang',val)
    localStorage.setItem('lang',val)
}

</script >

<style scoped lang="scss">
  
</style>