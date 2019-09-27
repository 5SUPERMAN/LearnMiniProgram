// pages/detail/detail.js
Page({
  handleBackHome() {
    wx.navigateBack({
      // delta决定返回层级
      delta: 1
    })
  },
  onLoad: function (options) {
    console.log(options)
  },
  // 页面退出时
  onUnload() {
    console.log('页面退出')
    // 1.获取首页的页面对象
    // getCurrentPages当前所有栈的页面
    const pages = getCurrentPages()
    const home = pages[pages.length - 2]
    
    // 2.调用页面的 setData
    home.setData({
      title: '哇哈哈'
    })
  }
})