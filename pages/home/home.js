// pages/home/home.js
Page({
  handleShowToast() {
    wx.showToast({
      title: '加载中...',
      duration: 2000,
      icon: 'loading',
      mask: true,
      success: function() {
        console.log('展示弹窗成功')
      },
      fail: function() {
        console.log('展示弹窗失败')
      },
      complete: function() {
        console.log('点击时直接调用')
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '我是Modal',
      content: '哈哈哈',
      // showCancel: false,
      success: function(res) {
        console.log(res)
        if(res.cancel){
          console.log('点击了取消')
        }else{
          console.log('点击了确定')
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    }),

    setTimeout(() => {
      // 必须调用 hideLoading，showLoading才会消失
      wx.hideLoading()
    },1000)
  },
  handleShowAction()  {
    wx.showActionSheet({
      itemList: ['小黑', '小绿', '小黄'],
      success: function(res) {
        console.log(res)
      }
    })
  },

  // 分享设置
  onShareAppMessage: function(options) {
    return {
      title: '哈哈哈',
      path: '/pages/about/about',
      // imageUrl: ''
    }
  }
})