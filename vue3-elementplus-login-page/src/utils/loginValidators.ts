import { reactive } from 'vue'

// ? ts 中定义对象
interface User{
  email: string
  password: string
}

export const loginUser = reactive<User>({
  email: '',
  password: ''
})

// ? 表单的校验规则
/* Form 组件提供了表单验证的功能，只需为 rules 属性传入约定的验证规则，并将 form-Item 的 prop 属性设置为需要验证的特殊键值即可 */
interface Rules{
  email: {
      type: string;
      message: string;
      required: boolean;
      trigger: string;
  }[];
  password: ({
      message: string;
      required: boolean;
      trigger: string;
      min?: undefined;
      max?: undefined;
  } | {
      min: number;
      max: number;
      message: string;
      trigger: string;
      required?: undefined;
  })[];
}

export const rules = reactive<Rules>({
  email: [
    { 
      // ? 与表单组件中的 prop 保持一致
      type: 'email', 
      message: '邮箱的格式有误', 
      required: true,
      trigger: 'blur'  // 元素失去焦点的时候触发
    }
  ],
  password: [
    { 
      message: '密码不能为空', 
      required: true,
      trigger: 'blur' 
    },
    {
      min: 6,
      max: 30,
      message: '密码长度范围必须在 6~30 字符内',
      trigger: 'blur'
    }
  ],
})

