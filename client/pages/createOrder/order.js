// pages/createOrder/order.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addrIndex: 244,
    addrsName: [],
    addrs: [],
    channelId:[],
    channelIdName:[],
    channelIdIndex:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ addrs: app.globalData.country });
    var arrys = this.data.addrsName;
    for (var i = 0; i < this.data.addrs.length; i++) {
      arrys.push(this.data.addrs[i].name);
    }
    this.setData({ addrsName: arrys });

    this.setData({ channelId: app.globalData.channelId });
    var cNameArrys = this.data.channelIdName;
    for (var i = 0; i < this.data.channelId.length; i++) {
      cNameArrys.push(this.data.channelId[i].name);
    }
    this.setData({ channelIdName: cNameArrys });
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    util.showBusy('请求中...')
    var that = this
    qcloud.request({
      url: `${config.service.host}/weapp/quote`,
      method: 'GET',
      data: e.detail.value,
      success(result) {
        console.log(JSON.stringify(result.data))
        if (result.data.code == 0) {
          util.showSuccess('请求成功完成')
          that.setData({
            showChannel: true,
            searchResult: result.data.data
          })
        } else {
          that.setData({
            showChannel: true
          })
          util.showModel('请求失败', result.data.data);
        }
      },
      fail(error) {
        that.setData({
          showChannel: true
        })
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },

  bindChannelPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      channelIdIndex: e.detail.value
    })
  },

  bindAddrPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      addrIndex: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})