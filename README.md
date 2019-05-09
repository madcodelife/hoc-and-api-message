# hoc-and-api-message

## 高阶组件

高阶组件可以看做是函数式编程中的**组合**。可以把高阶组件看做是一个函数，他接收一个组件作为参数，并返回一个功能增强的组件。

在React中高阶组件是十分常用的技术，hoc-and-api-message就是用Vue实现Debounce和Throttle高阶组件

> Vue内置了部分高阶组件`<keep-alive>`，`<transition>`，`<transition-group>`，核心就是在render函数里进行操作最后返回vnode

## 效果图

![效果图](https://i.loli.net/2019/05/08/5cd25febc6d28.gif)

## 核心代码

```javascript
//hoc
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
```

```javascript
//api message
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
```

### Usage

1. 克隆项目
```javascript
git clone https://github.com/gassnake999/hoc-and-api-message.git
```
2. 构建项目
```
yarn
or
npm install
```
3. 启动项目
```
yarn serve
or
npm run serve
```

**如果觉得有趣得话，请给个star，谢谢**	😆
