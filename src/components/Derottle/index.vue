<script>
function debounce(fn, delay) {
  let timer = null
  return function() {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

function throttle(fn, cycle) {
  let start = Date.now()
  let now
  let timer
  return function() {
    now = Date.now()
    clearTimeout(timer)
    if (now - start >= cycle) {
      fn.apply(this, arguments)
      start = now
    } else {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, cycle)
    }
  }
}

export default {
  name: 'Debounce',
  abstract: true,
  props: {
    events: {
      type: String,
      required: true
    },
    wait: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      required: true
    }
  },
  render() {
    const vnode = this.$slots.default[0]
    if (vnode && this.events) {
      const eventsKey = this.events.split(',')
      eventsKey.forEach(e => {
        vnode.data.on[e] =
          this.type === 'debounce'
            ? debounce(vnode.data.on[e], this.wait)
            : throttle(vnode.data.on[e], this.wait)
      })
    }
    return vnode
  }
}
</script>
