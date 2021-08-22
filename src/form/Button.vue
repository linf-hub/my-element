<template>
  <div>
    <button @click="handleClick">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'LgButton',
  inheritAttrs: false,
  props: {
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
      evt.preventDefault()
    }
  }
}
</script>

<style>

</style>
