import IsonForm from '../'
import IsonFormItem from '../../formitem'
import IsonInput from '../../input'
import IsonButton from '../../button'

export default {
  title: 'IsonForm',
  component: IsonForm
}

export const Login = () => ({
  components: { IsonForm, IsonFormItem, IsonInput, IsonButton },
  template: `
    <ison-form class="form" ref="form" :model="user" :rules="rules">
      <ison-form-item label="用户名" prop="username">
        <!-- <ison-input v-model="user.username"></ison-input> -->
        <ison-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></ison-input>
      </ison-form-item>
      <ison-form-item label="密码" prop="password">
        <ison-input type="password" v-model="user.password"></ison-input>
      </ison-form-item>
      <ison-form-item>
        <ison-button type="primary" @click="login">登 录</ison-button>
      </ison-form-item>
    </ison-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})
