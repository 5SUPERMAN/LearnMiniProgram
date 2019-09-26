// components/my-select/my-select.js
Component({
  properties: {

  },
  data: {
    count: 0
  },
  methods: {
    incrementCount(num) {
      this.setData({
        count: this.data.count + num
      })
    }
  }
})
