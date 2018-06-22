const axios = require('axios');
const request = require('request');
const rp = require('request-promise');
const cheerio = require('cheerio');
module.exports = async ctx => {
  var jsessionid = '';//ctx.request.query.cookie;
  const indexOption = {
    method: 'GET',
    uri: 'http://jrwl.kingtrans.cn/c_index.jsp',
    json: false,
    resolveWithFullResponse: true
  };
  //JSESSIONID =
  const options = {
    method: 'POST',
    uri: 'http://jrwl.kingtrans.cn/client/Logon?action=logon',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': '123',
    },
    form: {
      userid: 'TEST999',
      password: 'TEST@999'
    },
    json: false, 
    resolveWithFullResponse: true
  };
  const mainOptions = {
    method: 'GET',
    uri: 'http://jrwl.kingtrans.cn/nclient/Logon?action=main',
    headers: {
      'Cookie': '123'
    },
    json: false, 
    resolveWithFullResponse: true
  };

  await rp(indexOption)
    .then(function (res) {
      console.log(res.statusCode)
      console.log(res.headers['set-cookie']);
      var cookie = res.headers['set-cookie'];
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
    }).then(function (mainRes) {
      console.log(mainRes.body);
      ctx.state.data = {
        msg: mainRes.body
      }
    }).catch(function (err) {
      console.log('1111111xxxxxxx');
    });
  console.log(mainOptions);
  await rp(mainOptions).then(function (res) {
    // console.log(res.body);
    const $ = cheerio.load(res.body);
    var countryJson=[];
    $('option','#indexSearchCountry').each(function(i,el){
      console.log($(this).text());
      countryJson.push({
        'name': $(this).text(),
        'value': $(this).attr('value')
      })
    })
    var businessTypeJson = [];
    $('option', '#indexSearchLogistic').each(function (i, el) {
      console.log($(this).text().trim());
      businessTypeJson.push({
        'name': $(this).text().trim(),
        'value': $(this).attr('value')
      })
    })
    //
    ctx.state.data = {
      cookie: jsessionid,
      country: countryJson,
      businessType: businessTypeJson
    }
  }).catch(function (err) {
    // console.log(err.headers['set-cookie']);
    console.log('222222xxxxxxx');
  });
}

