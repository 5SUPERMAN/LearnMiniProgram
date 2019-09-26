// pages/home/home.js
Page({
  data: {
    count: 0,
    isShow: true
  },
  handleChangeShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement() {
    this.setData({
      count: this.data.count + 1
    })
  },
  handleItemClick(e) {
    const index = e.detail.index
    const title = e.detail.title
    console.log(index, title)
  },
  handleIncrementSelect() {
    // 修改 my-select组件中的 count
    // 获取组件对象
    const my_select = this.selectComponent("#select-id")

    // 通过 setData修改组件内的 count值（但是这种方式并不合理）
    // my_select.setData({
    //   count: my_select.data.count + 1
    // })

    // 通过组件内部的方法进行修改 count
    my_select.incrementCount(10)
  }
})