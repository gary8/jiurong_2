//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
var util = require('./utils/util.js')

App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
        this.initData();
    },
    initData: function () {
      var _this=this;
      util.showBusy('请求中...')
      var that = this
      qcloud.request({
        url: `${config.service.host}/weapp/initData`,
        login: false,
        success(result) {
          util.showSuccess('请求成功完成')
          // console.log(JSON.stringify(result.data))
          _this.globalData = result.data.data;
          console.log(_this.globalData.country);
        },
        fail(error) {
          util.showModel('请求失败', error);
          console.log('request fail', error);
        }
      })
    },
    //country:[{'name':'','value':''}]
    //cookie: '',
    //country: [],
    //channelId: []
    globalData: {
      
    }
})