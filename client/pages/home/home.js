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

    goodsList: null,
    goodsMap: null,
    goodsDetailMap: null,

    banner: null
  },

  handleGoods:function(data) {
    var goodsList = [];
    var goodsMap = {};
    var goodsDetailMap = {};
    data.goods.forEach(function(item){
      // console.log(item);
      var goods = {
        cover: item.cover.secure_url,
        title: item.title,
        id: item._id
      };

      goodsList.push(goods);
      goodsMap[goods.id] = goods;
      goodsDetailMap[item._id] = item;
    });

    this.setData({
      goodsList: goodsList,
      goodsMap: goodsMap,
      goodsDetailMap: goodsDetailMap
    })
  },

  handleBanner:function(data){
    var banner = [];
    var goods = [];
    var goodsMap = this.data.goodsMap;
    data.banner.forEach(function (item) {
      console.log(item);
      banner.push(goodsMap[item.goods]);
    });
    console.log(banner);
    console.log(goodsMap)
    this.setData({
      banner: banner
    })
  },

  onLoad:function() {
    var info = wx.getSystemInfoSync();
    console.log("sys info:", info);
    var swiperWidth = info.windowWidth * 0.95;// * info.pixelRatio;

    // console.log(testData);
    testData.goods = [
      testData.goods[0],
      testData.goods[2],
      testData.goods[0],
      testData.goods[2],
      testData.goods[0],
      testData.goods[2],
    ];//testData.goods.concat(testData.goods);

    testData.banner = [
      testData.banner[0],
      testData.banner[2],
      testData.banner[0]
    ];

    if (this.data.goods == null) {

      this.handleGoods(testData);
      this.handleBanner(testData);
      this.setData({
        swiperWidth: swiperWidth,
        swiperHeight: swiperWidth * 9 / 16,
      })
    }
    // console.log("swiperWidth", swiperWidth);
    // console.log("system info", info);
  }
})

var testData = { "info": { "_id": "5a4e3b615f5c2513ab7cd52f", "key": "5a4e3b615f5c2513ab7cd52f", "name": "德珍行", "__v": 0, "address": "火星", "phone": "12345678", "working_hours": "10:00-18:00" }, "goods": [{ "_id": "5a4da96f601c3f119b92fabe", "slug": "5a4da96f601c3f119b92fabe", "title": "玉净瓶", "images": [], "__v": 1, "publishedDate": "2018-01-04T16:00:00.000Z", "photos": [{ "public_id": "goods/photos/p6nrvxuhop4qsmy1xnfe", "version": 1515055894, "signature": "45b18408b85677b32e128295df5e9beb3ede4f0b", "width": 756, "height": 1038, "format": "jpg", "resource_type": "image", "url": "http://res.cloudinary.com/alpha1916/image/upload/v1515055894/goods/photos/p6nrvxuhop4qsmy1xnfe.jpg", "secure_url": "https://res.cloudinary.com/alpha1916/image/upload/v1515055894/goods/photos/p6nrvxuhop4qsmy1xnfe.jpg", "_id": "5a4deb172a76d71218f0e14a" }, { "public_id": "goods/photos/s7dzakp38p7ywpzsszaa", "version": 1515055894, "signature": "c9e45da2753732969be7f0d69be86da36ba437a8", "width": 1026, "height": 1538, "format": "jpg", "resource_type": "image", "url": "http://res.cloudinary.com/alpha1916/image/upload/v1515055894/goods/photos/s7dzakp38p7ywpzsszaa.jpg", "secure_url": "https://res.cloudinary.com/alpha1916/image/upload/v1515055894/goods/photos/s7dzakp38p7ywpzsszaa.jpg", "_id": "5a4deb172a76d71218f0e149" }, { "public_id": "goods/photos/cmqz4v5czxly4so68g3g", "version": 1515055894, "signature": "6164bd0231ed49cc4457ccfcc387272b6a415b5d", "width": 1620, "height": 1080, "format": "jpg", "resource_type": "image", "url": "http://res.cloudinary.com/alpha1916/image/upload/v1515055894/goods/photos/cmqz4v5czxly4so68g3g.jpg", "secure_url": "https://res.cloudinary.com/alpha1916/image/upload/v1515055894/goods/photos/cmqz4v5czxly4so68g3g.jpg", "_id": "5a4deb172a76d71218f0e148" }, { "public_id": "goods/photos/cmlwqhjrflg0ykpumrtz", "version": 1515055894, "signature": "cd607027a9681e1ce84c9b2480e7e4d255fb9ba0", "width": 1620, "height": 1080, "format": "jpg", "resource_type": "image", "url": "http://res.cloudinary.com/alpha1916/image/upload/v1515055894/goods/photos/cmlwqhjrflg0ykpumrtz.jpg", "secure_url": "https://res.cloudinary.com/alpha1916/image/upload/v1515055894/goods/photos/cmlwqhjrflg0ykpumrtz.jpg", "_id": "5a4deb172a76d71218f0e147" }, { "public_id": "goods/photos/bymhzecpehwmx7xhmqjd", "version": 1515055895, "signature": "9c9a052f7e1750dd99424b3278dff4ffd70d81c4", "width": 1620, "height": 1080, "format": "jpg", "resource_type": "image", "url": "http://res.cloudinary.com/alpha1916/image/upload/v1515055895/goods/photos/bymhzecpehwmx7xhmqjd.jpg", "secure_url": "https://res.cloudinary.com/alpha1916/image/upload/v1515055895/goods/photos/bymhzecpehwmx7xhmqjd.jpg", "_id": "5a4deb172a76d71218f0e146" }, { "public_id": "goods/photos/oecgiqd2oyympqjsytlv", "version": 1515055895, "signature": "3108bc69c4feee2c24448abbab5390f53fe72e63", "width": 822, "height": 1080, "format": "jpg", "resource_type": "image", "url": "http://res.cloudinary.com/alpha1916/image/upload/v1515055895/goods/photos/oecgiqd2oyympqjsytlv.jpg", "secure_url": "https://res.cloudinary.com/alpha1916/image/upload/v1515055895/goods/photos/oecgiqd2oyympqjsytlv.jpg", "_id": "5a4deb172a76d71218f0e145" }, { "public_id": "goods/photos/zug0eiobswj1sxsqoknc", "version": 1515055894, "signature": "3f2f620907525ca7d3aa5aefbd37d6bc4c516ed5", "width": 1620, "height": 1080, "format": "jpg", "resource_type": "image", "url": "http://res.cloudinary.com/alpha1916/image/upload/v1515055894/goods/photos/zug0eiobswj1sxsqoknc.jpg", "secure_url": "https://res.cloudinary.com/alpha1916/image/upload/v1515055894/goods/photos/zug0eiobswj1sxsqoknc.jpg", "_id": "5a4deb172a76d71218f0e144" }, { "public_id": "goods/photos/ok6e8azltvbjlwbfdhyj", "version": 1515055895, "signature": "caa77878c7ce9d6397f61d84fecd29467803c86c", "width": 1620, "height": 1080, "format": "jpg", "resource_type": "image", "url": "http://res.cloudinary.com/alpha1916/image/upload/v1515055895/goods/photos/ok6e8azltvbjlwbfdhyj.jpg", "secure_url": "https://res.cloudinary.com/alpha1916/image/upload/v1515055895/goods/photos/ok6e8azltvbjlwbfdhyj.jpg", "_id": "5a4deb172a76d71218f0e143" }], "cover": { "public_id": "keystone/goods/cover/jngfqduqrqvmzkf2x998", "version": 1515055894, "signature": "7e0c347b1725a3b33288b8ce730e383e09ce0411", "width": 1028, "height": 1542, "format": "jpg", "resource_type": "image", "url": "http://res.cloudinary.com/alpha1916/image/upload/v1515055894/keystone/goods/cover/jngfqduqrqvmzkf2x998.jpg", "secure_url": "https://res.cloudinary.com/alpha1916/image/upload/v1515055894/keystone/goods/cover/jngfqduqrqvmzkf2x998.jpg" }, "content": { "brief": "山水纹玉净瓶", "extended": "瓶身弧线优雅，线条流畅。。。。" }, "editDate": "2018-01-03T16:00:00.000Z" }, { "_id": "5a4da733ff6201118ea29812", "slug": "5a4da733ff6201118ea29812", "title": "达摩", "images": [], "__v": 1, "publishedDate": "2018-01-03T16:00:00.000Z", "video": { "filename": "HeonIeLPRW50NiTR.mp4", "size": 2259593, "mimetype": "video/mp4" }, "photos": [], "content": { "brief": "达摩", "extended": "达摩悟道倒流香" }, "editDate": "2018-01-03T16:00:00.000Z" }, { "_id": "5a4da5564f735311879a43fb", "slug": "5a4da5564f735311879a43fb", "title": "狮子印章", "state": "draft", "__v": 2, "images": [], "publishedDate": "2018-01-03T16:00:00.000Z", "video": { "filename": "8Jf7_7IuheX5ujQG.mp4", "size": 1505667, "mimetype": "video/mp4" }, "photos": [{ "public_id": "goods/photos/y7jjbo5wskpojuvrwgue", "version": 1515055652, "signature": "254bb44cef09ee4aa4515acbbe09efe1388d32ae", "width": 1080, "height": 1620, "format": "jpg", "resource_type": "image", "url": "http://res.cloudinary.com/alpha1916/image/upload/v1515055652/goods/photos/y7jjbo5wskpojuvrwgue.jpg", "secure_url": "https://res.cloudinary.com/alpha1916/image/upload/v1515055652/goods/photos/y7jjbo5wskpojuvrwgue.jpg", "_id": "5a4dea272a76d71218f0e142" }, { "public_id": "goods/photos/ovrktq1ctrppjgz3hqrw", "version": 1515055654, "signature": "8a1db742ec7c639b9cf441d3d1624844161b59c6", "width": 1080, "height": 1620, "format": "jpg", "resource_type": "image", "url": "http://res.cloudinary.com/alpha1916/image/upload/v1515055654/goods/photos/ovrktq1ctrppjgz3hqrw.jpg", "secure_url": "https://res.cloudinary.com/alpha1916/image/upload/v1515055654/goods/photos/ovrktq1ctrppjgz3hqrw.jpg", "_id": "5a4dea272a76d71218f0e141" }, { "public_id": "goods/photos/gwy6mw2kqgev1arsrk0a", "version": 1515055653, "signature": "db0a577706a110f807e98bc49471a51356372775", "width": 1080, "height": 1620, "format": "jpg", "resource_type": "image", "url": "http://res.cloudinary.com/alpha1916/image/upload/v1515055653/goods/photos/gwy6mw2kqgev1arsrk0a.jpg", "secure_url": "https://res.cloudinary.com/alpha1916/image/upload/v1515055653/goods/photos/gwy6mw2kqgev1arsrk0a.jpg", "_id": "5a4dea272a76d71218f0e140" }, { "public_id": "goods/photos/gnvuzhceap595byyy3it", "version": 1515055654, "signature": "2497f7a7ed4d3bc954ecb91f3b80ee8065715d43", "width": 1080, "height": 1620, "format": "jpg", "resource_type": "image", "url": "http://res.cloudinary.com/alpha1916/image/upload/v1515055654/goods/photos/gnvuzhceap595byyy3it.jpg", "secure_url": "https://res.cloudinary.com/alpha1916/image/upload/v1515055654/goods/photos/gnvuzhceap595byyy3it.jpg", "_id": "5a4dea272a76d71218f0e13f" }], "cover": { "public_id": "keystone/goods/cover/ukz2uwq60voelzsxltzf", "version": 1515055654, "signature": "673edfc50b1b18ec38a622e398273e851fbd419b", "width": 1080, "height": 1620, "format": "jpg", "resource_type": "image", "url": "http://res.cloudinary.com/alpha1916/image/upload/v1515055654/keystone/goods/cover/ukz2uwq60voelzsxltzf.jpg", "secure_url": "https://res.cloudinary.com/alpha1916/image/upload/v1515055654/keystone/goods/cover/ukz2uwq60voelzsxltzf.jpg" }, "content": { "brief": "狮子印章", "extended": "狮子印章摆件 经典工艺 " }, "editDate": "2018-01-03T16:00:00.000Z" }], "banner": [{ "_id": "5a4e3ed830592c13caee06b5", "key": "5a4e3ed830592c13caee06b5", "name": "玉净瓶", "__v": 0, "goods": "5a4da96f601c3f119b92fabe" }, { "_id": "5a4e3ee630592c13caee06b6", "key": "5a4e3ee630592c13caee06b6", "name": "达摩", "__v": 0, "goods": "5a4da733ff6201118ea29812" }, { "_id": "5a4e3ef330592c13caee06b7", "key": "5a4e3ef330592c13caee06b7", "name": "狮子印章", "__v": 0, "goods": "5a4da5564f735311879a43fb" }] };