<template>
  <div class="container">
    <div style="height: 45px">
      <uni-nav-bar
        dark
        shadow
        background-color="#007AFF"
        status-bar
        left-icon="left"
        left-text="返回"
        :title="isRegister ? '找回密码' : '注册'"
        @clickLeft="back"
      />
    </div>
    <uni-forms class="form" ref="form" :modelValue="formData" :rules="rules">
      <uni-forms-item> </uni-forms-item>
      <uni-forms-item isrequired name="name" label="昵称">
        <uni-easyinput
          prefixIcon="person"
          v-model="formData.name"
          placeholder="请输入昵称"
          :styles="styles"
          :placeholderStyle="placeholderStyle"
        >
        </uni-easyinput>
      </uni-forms-item>
      <uni-forms-item isrequired name="sex" label="性别">
        <uni-data-checkbox
          v-model="formData.sex"
          :localdata="sex"
        ></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item isrequired name="date" label="生日">
        <uni-datetime-picker
          type="date"
          :clear-icon="false"
          style="border: 1px solid #2979ff; border-radius: 5px"
          :placeholderStyle="placeholderStyle"
          v-model="formData.date"
        />
      </uni-forms-item>
      <uni-forms-item isrequired name="mail" label="邮箱">
        <uni-easyinput
          prefixIcon="email"
          v-model="formData.mail"
          placeholder="请输入邮箱"
          :styles="styles"
          :placeholderStyle="placeholderStyle"
        >
        </uni-easyinput>
      </uni-forms-item>
      <uni-forms-item isrequired name="pwd" label="密码">
        <uni-easyinput
          :styles="styles"
          :placeholderStyle="placeholderStyle"
          type="password"
          prefixIcon="auth"
          v-model="formData.pwd"
          placeholder="请输入密码"
        >
        </uni-easyinput>
      </uni-forms-item>
      <uni-forms-item>
        <button class="uni-primary" type="primary" @click="submitForm">
          {{ isRegister ? '找回密码' : '注册' }}
        </button>
      </uni-forms-item>
    </uni-forms>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from 'vue'
export default {
  name: 'registryForm',
  props: {
    isRegister: {
      type: Boolean,
      required: true,
    },
  },
  setup({ isRegister }: any, { emit }: any) {
    onMounted(() => {
      console.log(isRegister, 'isRegister')
    })
    const form = ref<any>(null)
    const submitForm = () => {
      form.value
        .validate()
        .then((res: any) => {
          emit('register', res,isRegister)
        })
        .catch((err: any) => {
          console.log('表单错误信息：', err)
        })
    }
    let formData = reactive({
      name: '',
      pwd: '',
      sex: 0,
      date: '',
      mail: '',
    })
    const sex = [
      {
        text: '男',
        value: 0,
      },
      {
        text: '女',
        value: 1,
      },
      {
        text: '未知',
        value: 2,
      },
    ]
    const styles = {
      borderColor: '#2979ff',
    }
    const placeholderStyle = 'color: #2979ff'
    const rules = {
      // 对name字段进行必填验证
      name: {
        // name 字段的校验规则
        rules: [
          // 校验 name 不能为空
          {
            required: true,
            errorMessage: '请填写昵称',
          },
          // 对name字段进行长度验证
          {
            minLength: 6,
            maxLength: 15,
            errorMessage: '{label}长度在 {minLength} 到 {maxLength} 个字符',
          },
        ],
        label: '昵称',
      },
      pwd: {
        // name 字段的校验规则
        rules: [
          // 校验 name 不能为空
          {
            required: true,
            errorMessage: '请填写密码',
          },
          // 对name字段进行长度验证
          {
            minLength: 6,
            maxLength: 15,
            errorMessage: '{label}长度在 {minLength} 到 {maxLength} 个字符',
          },
        ],
        label: '密码',
      },
    }
    const back = () => {
      emit('change')
    }
    return {
      formData,
      submitForm,
      styles,
      placeholderStyle,
      rules,
      form,
      sex,
      back,
      isRegister,
    }
  },
}
</script>
<style scoped>
.container {
  background-image: url('@/static/980.jpeg');
  height: 100%;
}
.form {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
