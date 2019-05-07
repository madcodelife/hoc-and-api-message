<template>
  <div class="message" :class="type ? `message-${type}` : ''">{{ content }}</div>
</template>

<script>
export default {
  data() {
    return {
      content: '',
      duration: '',
      type: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.$destroy(true)
      this.$el.remove()
    }, this.duration)
  }
}
</script>

<style lang="scss" scoped>
.message {
  height: 32px;
  padding: 0 15px;
  border-radius: 4px;
  background: #1890ff;
  position: fixed;
  top: 450px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  line-height: 32px;
  color: #fff;
  box-shadow: 3px 5px 1px 1px rgba(0, 0, 0, 0.2);
  &-error {
    background: #f5222d;
  }
  &-success {
    background: #52c41a;
  }
}
</style>

