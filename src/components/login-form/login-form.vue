<template>
  <div class="">
    <uni-forms ref="form" :modelValue="formData" :rules="rules">
      <uni-forms-item isrequired name="name">
        <uni-easyinput prefixIcon="person" v-model="formData.name" placeholder="请输入昵称" :styles="styles"
          :placeholderStyle="placeholderStyle">
        </uni-easyinput>
      </uni-forms-item>
      <uni-forms-item isrequired name="pwd">
        <uni-easyinput :styles="styles" :placeholderStyle="placeholderStyle" type="password" prefixIcon="auth"
          v-model="formData.pwd" placeholder="请输入密码">
        </uni-easyinput>
      </uni-forms-item>
    </uni-forms>
    <button @click="submitForm">Submit</button>
  </div>
</template>
<script lang="'ts">
import { defineComponent, ref, reactive } from 'vue'
export default {
  name: 'loginForm',
  setup() {
    const form = ref(null)
    const submitForm = () => {
      form.value.validate().then(res => {
        console.log('表单数据信息：', res);
      }).catch(err => {
        console.log('表单错误信息：', err);
      })
    }
    let formData = reactive({
      name: '',
      pwd: ''
    }
    )
    const styles = {
      borderColor: '#2979ff'
    }
    const placeholderStyle = 'color: #2979ff';
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
          }
        ],
        label:'昵称'
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
          }
        ],
        label:'密码'
      }
    }

    return {
      formData,
      submitForm,
      styles,
      placeholderStyle,
      rules,
      form
    }
  }
}
</script>
<style lang="scss">
</style>
