// pages/wxml/wxml.js
Page({
  data: {
    isActive: false,
    nowTime: new Date().toLocaleString(),
    isShow: false,
    score: 0
  },
  handleChangeColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement() {
    this.setData({
      score: this.data.score + 6
    })
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  }
})