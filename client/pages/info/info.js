var app = getApp();
Page({
  data: {
    phoneNum: "188888888888",
    address: "店面地址：海南省海口市",
    phoneLabel: "联系电话：",
    work: "营业时间：9:00 - 18:00",
    logoPath: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
    name: app.globalData.name,
    // infoList: [
    //   { txt: "地址：海南省海口市", more: openMap },
    //   { txt: "电话：188888888888", more: openMap },
    //   { txt: "营业时间：8:00 - 18:00", more: openMap }
    // ],
  },
  openMap:function() {
    console.log("open map");
    wx.navigateTo({
      url: 'map/map',
    })
  },
  call:function() {
    wx.makePhoneCall({
      phoneNumber: this.data.phoneNum,
    })
  },
})
