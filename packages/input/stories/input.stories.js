import IsonInput from '../'

export default {
  title: 'IsonInput',
  component: IsonInput
}

export const Text = () => ({
  components: { IsonInput },
  template: '<ison-input v-model="value"></ison-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { IsonInput },
  template: '<ison-input type="password" v-model="value"></ison-input>',
  data () {
    return {
      value: '123456'
    }
  }
})