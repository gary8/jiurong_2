const axios = require('axios');
const request=require('request');
const rp = require('request-promise');
const tough=require('tough-cookie');
module.exports = async ctx => {
  var cookie = '4805B265EF2422AC118649E9034C7254'//ctx.request.query.cookie;
  console.log(cookie);
  const indexOption={
    method: 'GET',
    uri: 'http://jrwl.kingtrans.cn/c_index.jsp',
    json: false, 
    resolveWithFullResponse: true
  };
  //JSESSIONID =
  const options = {
    method:'POST',
    // uri: 'http://jrwl.kingtrans.cn/WebPrice?action=searchCountryXml&country=us',
    uri:'http://jrwl.kingtrans.cn/client/Logon?action=logon',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie':'123',
    },
    form:{
      userid:'TEST999',
      password:'TEST@999'
    },
    // 'userid=TEST999&passwrod=TEST%40999',
    json: false, // Automatically parses the JSON string in the response，
    resolveWithFullResponse: true
  };
  const mainOptions = {
    method: 'GET',
    uri: 'http://jrwl.kingtrans.cn/nclient/Logon?action=main',
    headers: {
      'Cookie': '123'
    },
    // 'userid=TEST999&passwrod=TEST%40999',
    json: false, // Automatically parses the JSON string in the response，
    resolveWithFullResponse: true
  };

  await rp(indexOption)
    .then(function (res) {
        console.log(res.statusCode)
        console.log(res.headers['set-cookie']);
        var cookie = res.headers['set-cookie'];
        var jsessionid = '';
        if (cookie != null && cookie.length > 0) {
          jsessionid = cookie[0].substring(0, cookie[0].indexOf(';'));
          options.headers.Cookie = jsessionid;
          mainOptions.headers.Cookie = jsessionid;
          console.log(options);
          return rp(options)
        }
    }).then(function (res) {
      // console.log(res.statusCode)
      console.log(res.headers['set-cookie']);
      return rp(mainOptions)
    }).then(function (mainRes){
      console.log(mainRes.body);
      ctx.state.data = {
        msg: mainRes.body
      }
    }).catch(function (err){
      console.log('1111111xxxxxxx');
    });
  console.log(mainOptions);
  await rp(mainOptions).then(function(res){
    console.log(res.body);
    ctx.state.data = {
      msg: res.body
    }
  }).catch(function (err) {
    // console.log(err.headers['set-cookie']);
    console.log('222222xxxxxxx');
  });
}

