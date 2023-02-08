<template>
    <el-card>
    <el-row :gutter="20" class="header">
    <el-col :span="7">
      <el-input :placeholder="$t('table.placeholder')"
      clearable
      v-model="queryForm.query"
      ></el-input>
    </el-col>
    <el-button type="primary" :icon="Search">{{ $t('table.search') }}</el-button>
    <el-button type="primary" >{{ $t('table.adduser') }}</el-button>
    </el-row>

    <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column 
    :width="item.width"
    :prop="item.prop" 
    :label="$t(`table.${item.lable}`)" 
    v-for="(item ,index) in options" :key="index" >

    <template v-slot="{ row }" v-if="item.prop==='mg_state'">
      <el-switch v-model="row.mg_state" />
    </template>

    <template v-slot="{ row }" v-else-if="item.prop==='create_time'">
      {{ $filters.filterTimes(row.create_time) }}
    </template>

    <template v-else-if="item.prop==='action'" #default>
      <el-button size="small">Default</el-button>
      <el-button size="small">Default</el-button>
      <el-button size="small">Default</el-button>
    </template>
  </el-table-column>
  </el-table>
  </el-card>
</template>

<script setup>
import { ref,reactive } from "vue";
import { Search } from '@element-plus/icons-vue'
import {getUser} from '@/api/users'
import {options} from './options'

const queryForm=ref({
  query:'',
  pagenum:1,
  pagesize:2
})
const tableData=ref([])
const initGetUserList=async() => {
  const res=await getUser(queryForm.value)
  tableData.value=res.users
  console.log(res);
}
initGetUserList()
</script>

<style scoped lang="scss">
  .header{
    padding-bottom: 16px;
  }
</style>
