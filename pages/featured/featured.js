// 拿到全局应用程序实例
const app = getApp()

// api地址
const API_URL = 'https://api.douban.com/v2/movie/top250'

// 创建一个页面对象用于控制页面的逻辑
Page({
  data: {
    title: '加载中...',
    movies: [],
    loading: true
  },

  onLoad() {
    app.fetchApi(API_URL, (err, data) => {
      // 更新数据
      this.setData({
        title: data.title,
        movies: data.subjects,
        loading: false
      })
    })
  }
})