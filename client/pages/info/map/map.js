// const latitude = 23.099994;
// const longitude = 113.324520;

const latitude = 20.0039;
const longitude = 110.35432;

var app = getApp();
Page({
  data: {
    latitude: latitude,
    longitude: longitude,
    mapHeight: 900,
    markers: [{
      latitude: latitude,
      longitude: longitude,
      name: app.globalData.name
    }],
    covers: [{
      latitude: latitude,
      longitude: longitude + 0.02,
      iconPath: '/image/location.png'
    }, {
        latitude: latitude,
      longitude: longitude - 0.02,
      iconPath: '/image/location.png'
    }]
  },

  onLoad:function() {
    var info = wx.getSystemInfoSync();
    this.setData({
      mapHeight: info.windowHeight
    })

    wx.setNavigationBarTitle({
      title: app.globalData.name + '门店地址',
    })
  }
})
