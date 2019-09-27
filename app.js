// key是一样的，所以设置一个常量
const TOKEN = 'token'

App({
  // 对象：小程序关闭掉后，内存会被回收
  globalData: {
    token: ''
  },
  onLaunch: function() {
    // 1.先从缓存中取出 token
    const token = wx.getStorageSync(TOKEN)

    // 2.判断 token是否有值
    if (token && token.length !== 0) { // 已经有 token，然后验证 token是否过期
      // 验证 token是否过期
      this.check_token(token)
    } else { // 没有token，进行登录操作
      this.login()
    }
  },
  // 验证 token是否过期
  check_token(token) {
    console.log('执行了验证 token操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        if(!res.data.errCode){
          console.log('token有效')
          this.globalData.token = token
        }else{
          this.login()
        }
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },
  // 登录操作
  login() {
    console.log('执行了登录操作')
    wx.login({
      // code只有 5分钟的有效期
      success: (res) => {
        // 1.获取 code
        const code = res.code

        // 2.将 code发送给服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            // 1.获取 token
            const token = res.data.token

            // 2.将 token保存在 globalData中
            this.globalData.token = token

            // 3.进行本地存储(Sync：同步)
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }
})