<template>
    <el-card>
    <el-row :gutter="20" class="header">
    <el-col :span="7">
      <el-input :placeholder="$t('table.placeholder')"
      clearable
      v-model="queryForm.query"
      ></el-input>
    </el-col>
    <el-button type="primary" :icon="Search" @click="initGetUserList">{{ $t('table.search') }}</el-button>
    <el-button type="primary"  @click="handleDialogValue">{{ $t('table.adduser') }}</el-button>
    </el-row>

    <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column 
    :width="item.width"
    :prop="item.prop" 
    :label="$t(`table.${item.lable}`)" 
    v-for="(item ,index) in options" :key="index" >

    <template v-slot="{ row }" v-if="item.prop==='mg_state'">
      <el-switch v-model="row.mg_state" @change=changeState(row) />
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
  <el-pagination
      v-model:current-page="queryForm.pagenum"
      :page-size="queryForm.pagesize"
      :page-sizes="[2,5,,10,15]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
  <Dialog v-model="dialogVisible" :dialogTitle="dialogTitle" v-if="dialogVisible" />
</template>

<script setup>
import { ref,reactive } from "vue";
import { Search } from '@element-plus/icons-vue'
import {getUser,changeUserState} from '@/api/users'
import {options} from './options'
import { ElMessage } from 'element-plus'
import { useI18n } from "vue-i18n";
import Dialog from './dialog.vue'

const i18n=useI18n()
const dialogVisible=ref(false)
const dialogTitle=ref('')
const queryForm=ref({
  query:'',
  pagenum:1,
  pagesize:2
})
const tableData=ref([])
const total=ref(0)

const initGetUserList=async() => {
  const res=await getUser(queryForm.value)
  tableData.value=res.users
  // console.log(res);
  total.value=res.total
}
initGetUserList()
 
const handleSizeChange=(pageSize) => {
  queryForm.value.pagenum=1
  queryForm.value.pagesize=pageSize
  initGetUserList()
}
const handleCurrentChange=(pageNum) => {
  queryForm.value.pagenum=pageNum
  initGetUserList()
}

const changeState=async (info) => { //修改用户状态
  await changeUserState(info.id,info.mg_state)
  ElMessage({
    message: i18n.t('message.updeteSuccess'),
    type: 'success',
  })
}
const handleDialogValue=() => {
  dialogVisible.value=true
  dialogTitle.value='添加用户'
}
</script>

<style scoped lang="scss">
  .header{
    padding-bottom: 16px;
  }
</style>
