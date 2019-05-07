<template>
  <div class="home">
    <p>Debounce:</p>
    <Derottle type="debounce" :wait="1000" events="click">
      <button @click="clickBtn('debounceCount')">click debounce {{ debounceCount }}</button>
    </Derottle>
    <br>
    <br>
    <Derottle type="debounce" :wait="1000" events="input">
      <input
        style="width: 150px"
        type="text"
        placeholder="input debounce 1000ms"
        @input="handleInput('debounce')"
      >
    </Derottle>
    <p>Throttle:</p>
    <Derottle type="throttle" :wait="1000" events="click">
      <button @click="clickBtn('throttleCount')">click throttle {{ throttleCount }}</button>
    </Derottle>
    <br>
    <br>
    <Derottle type="throttle" :wait="1000" events="input">
      <input
        style="width: 150px"
        type="text"
        placeholder="input throttle 1000ms"
        @input="handleInput('throttle')"
      >
    </Derottle>
    <br>
    <p>API Message:</p>
    <button @click="hanldeMessage">click me/primary</button>
    <br>
    <br>
    <button @click="hanldeMessage('success')">click me/success</button>
    <br>
    <br>
    <button @click="hanldeMessage('error')">click me/error</button>
  </div>
</template>

<script>
import Derottle from '@/components/Derottle'

export default {
  components: {
    Derottle
  },
  data() {
    return {
      debounceCount: 0,
      throttleCount: 0
    }
  },
  methods: {
    clickBtn(type) {
      this[type]++
      console.log(`执行了${this[type]}次 ${new Date().toLocaleString()}`)
    },
    handleInput(type) {
      console.log(
        type === 'debounce'
          ? `debounce停止输入 ${new Date().toLocaleString()}`
          : `throttle执行 ${new Date().toLocaleString()}`
      )
    },
    hanldeMessage(type) {
      if (typeof type === 'object') {
        this.$message('this is primary')
      } else {
        this.$message[type](`this is ${type}`)
      }
    }
  }
}
</script>
