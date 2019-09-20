// pages/home/home.js
Page({
  data: {
    name: '5SUPERMAN',
    age: 3,
    students: [
      { id: 1, name: '小黑', age: 3 },
      { id: 2, name: '小白', age: 2 },
      { id: 3, name: '小红', age: 4 },
      { id: 4, name: '小绿', age: 3 },
      { id: 5, name: '小蓝', age: 5 }
    ],
    counter: 0
  },
  handleAddition() {
    // 1.错误做法：可以改变couter内部的值，但是界面是不会刷新的
    // this.data.counter += 1
    // console.log(this.data.counter)

    // 2.this.setData() --- 成功啦!!!
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})
