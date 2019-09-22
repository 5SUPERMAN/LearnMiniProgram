// pages/image/image.js
Page({
  data: {
    imagePath: ''
  },
  handleChooseAlbum() {
    // 系统 API，让用户在相册中选择图片（或者拍照）
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        // 1.取出路径
        const path = res.tempFilePaths[0]
        // 2.设置 imagePath
        this.setData({
          imagePath: path
        })
      }
    })
  },
  handleImageLoad() {
    console.log(1)
  }
})