// components/my-more-slot/my-more-slot.js
Component({
  options: {
    multipleSlots: true
  },

  // 组件中监听生命周期函数
  // 1.监听所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log('监听组件所在页面显示出来时')
    },
    hide() {
      console.log('监听组件所在页面隐藏起来时')
    },
    resize() {
      console.log('监听页面尺寸的改变')
    }
  },

  // 2.监听组件本身的生命周期
  lifetimes: {
    created() {
      console.log('当组件被创建出来时')
    },
    attached() {
      console.log('当组件被添加到页面时')
    },
    ready() {
      console.log('当组件被渲染出来时')
    },
    moved() {
      console.log('当组件被移动到另外一个节点时')
    },
    detached() {
      console.log('组件被移除时')
    }
  }
})
