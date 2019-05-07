import Vue from 'vue'
import templ from './main.vue'

// 创建构造器
const Profile = Vue.extend(templ)

const Message = function(content, duration = 3000, type = '') {
  const instance = new Profile({
    data: {
      content,
      duration,
      type
    }
  }).$mount()
  document.body.appendChild(instance.$el)
}

const types = ['success', 'error']

types.forEach(item => {
  Message[item] = (content, duration = 3000, type = '') => {
    type = item
    return Message(content, duration, type)
  }
})

export default Message
