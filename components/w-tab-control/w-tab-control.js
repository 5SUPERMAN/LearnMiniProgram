// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    handleItemClick(e) {
      // 1.取出 index
      const index = e.currentTarget.dataset.index;

      // 2.修改 currentIndex
      this.setData({
        currentIndex: index
      })

      // 3.通知页面内部的点击事件
      this.triggerEvent('itemClick', {index, title: this.properties.titles[index]}, {})
    }
  }
})
