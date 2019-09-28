// pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from '../../service/home.js'

const types = ['pop', 'new', 'sell']

Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    goods: {
      'pop': {
        page: 0,
        list: []
      },
      'new': {
        page: 0,
        list: []
      },
      'sell': {
        page: 0,
        list: []
      }
    },
    currentType: 'pop',
    showBackTop: false,
    isTabFixed: false,
    tabScrollTop: 0
  },
  onLoad: function(options) {
    // 1.请求轮播图以及推荐数据
    this._getMultiData();

    // 2.请求 goods商品数据
    this._getGoodsData('pop');
    this._getGoodsData('new');
    this._getGoodsData('sell');
  },
  onReachBottom() {
    // 上拉加载更多
    this._getGoodsData(this.data.currentType)
  },
  // 监听滚动事件
  onPageScroll(options) {
    const flag1 = options.scrollTop >= 700;
    if (flag1 != this.data.showBackTop) {
      this.setData({
        showBackTop: flag1
      })
    }

    const flag2 = options.scrollTop >= this.data.tabScrollTop;
    if (flag2 != this.data.isTabFixed){
      this.setData({
        isTabFixed: flag2
      })
    }
  },

  // --------------事件监听函数--------------
  handleTabClick(e) {
    // 1.获取 tab-control中的 index
    const index = e.detail.index;

    // 2.修改 currentType
    this.setData({
      currentType: types[index]
    })
  },
  handleImageLoad() {
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.data.tabScrollTop = rect.top;
    }).exec()
  },

  // --------------网络请求函数--------------
  _getMultiData() {
    getMultiData().then(res => {
      const data = res.data.data;

      // 获取轮播图和推荐数据
      const banners = data.banner.list;
      const recommends = data.recommend.list;

      // 将 banners和recommends 放到 data中
      this.setData({
        banners: banners,
        recommends: recommends
      })
    }).catch(err => {
      console.log(err)
    })
  },
  _getGoodsData(type) {
    // 1.获取页码
    const page = this.data.goods[type].page + 1;

    // 2.发送网络请求
    getGoodsData(type, page).then(res => {
      // 取出商品的数据
      const list = res.data.data.list;
      // 将数据设置到对应的type的list中
      const newList = this.data.goods[type].list;
      newList.push(...list);
      // 将新数据设置到 data的goods中
      const typeKey = `goods.${type}.list`;
      const pageKey = `goods.${type}.page`
      this.setData({
        [typeKey]: newList,
        [pageKey]: page
      })
    })
  }
})