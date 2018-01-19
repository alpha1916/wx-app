Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'https://www.w3cschool.cn//statics/images/w3c/logo.png'
    ],
    swiperWidth: 100,
    swiperHeight: 100,
  },
  onLoad:function() {
    var info = wx.getSystemInfoSync();
    var swiperWidth = info.windowWidth * 0.95 * info.pixelRatio;
    this.setData({
      swiperWidth: swiperWidth,
      swiperHeight: swiperWidth * 9 / 16,
    })
    // console.log("swiperWidth", swiperWidth);
    // console.log("system info", info);
  }
})
