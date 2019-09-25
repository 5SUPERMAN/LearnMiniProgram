// pages/home/home.js
Page({
  data: {
    titles: ['小黑','小白','小绿']
  },
  handleTouchStart() {
    console.log('touchstart')
  },
  handleTouchMove() {
    console.log('touchmove')
  },
  handleTouchEnd() {
    console.log('touchend')
  },
  handleTap() {
    console.log('tap')
  },
  handleLongPress() {
    console.log('longpress')
  },
  handleEventClick(e) {
    console.log(e)
  },
  handleEventEnd(e) {
    console.log('-----',e)
  },
  handleOuter(e) {
    console.log('outer',e)
  },
  handleInner(e) {
    console.log('inner',e)
  },
  handleItemClick(e) {
    console.log(e)
    const dataset = e.currentTarget.dataset
    const title = dataset.item
    const index = dataset.index
    console.log(title,index)
  },

  // 事件冒泡和事件捕获
  handleCaptureView1() {
    console.log('handleCaptureView1')
  },
  handleView1() {
    console.log('handleView1')
  },
  handleCaptureView2() {
    console.log('handleCaptureView2')
  },
  handleView2() {
    console.log('handleView2')
  },
  handleCaptureView3() {
    console.log('handleCaptureView3')
  },
  handleView3() {
    console.log('handleView3')
  }
})