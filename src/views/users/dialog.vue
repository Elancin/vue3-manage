<template>
    <el-dialog
    :model-value="dialogVisible"
    :title="dialogTitle"
    width="40%"
    @close="handleClose"
    
  >

  <el-form :model="form" label-width="70px" ref="formRef" :rules="rules">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" type="password" />
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item label="手机号" prop="mobile">
      <el-input v-model="form.mobile" />
    </el-form-item>
  </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup >
import { defineEmits ,ref, defineProps} from "vue";
import { addUser } from "@/api/users";
import { ElMessage } from 'element-plus'
import i18n from '@/i18n'

defineProps({
    dialogTitle:{
        type:String,
        default:'',
        required:true
    }
})
const emits=defineEmits(['update:modelValue'])
const handleClose=() => { //取消
    emits('update:modelValue',false)
}
const handleConfirm=async() => { //确认
    await addUser(form.value)
    ElMessage({
    message: i18n.global.t('message.updeteSuccess'),
    type: 'success',
  })
    handleClose()
}
const formRef=ref(null)
const form=ref({
    username:'',
    password:'',
    email:'',
    mobile:''
})
const rules=ref({
    username:[
    { required: true, message: '输入用户名', trigger: 'blur' },
    ],
    password:[
    { required: true, message: '输入密码', trigger: 'blur' },
    ],
    email:[
    { required: true, message: '输入邮箱', trigger: 'blur' },
    { type: 'email',message: '输入正确邮箱', trigger: ['blur', 'change'],}
    ],
    mobile:[
    { required: true, message: '输入手机号', trigger: 'blur' },
    ],
})
</script>

<style scoped lang="scss">
  
</style>