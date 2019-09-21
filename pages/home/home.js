// pages/home/home.js

// 通过 getApp()获取 App()产生的示例对象
const app = new getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)

// 调用 Page，称之为注册一个页面
Page({
  handleGetUserInfo(event) {
    console.log(event)
  },
  click() {
    console.log('被点击了')
  },
  data: {
    message: '哈哈哈哈哈',
    list: []
  },

  onLoad() {
    wx.request({
      url: 'http://123.207.32.32:8000/api/v1/recommend',
      success:(res) => {
        console.log(res)
        const data = res.data.data.list
        this.setData({
          list: data
        })
      }
    })
  },


  // 监听滚动事件
  onPageScroll(obj) {
    // console.log(obj)
  }
})