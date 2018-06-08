const axios = require('axios');
const request = require('request');
const rp = require('request-promise');
const cheerio = require('cheerio');
module.exports = async ctx => {
  var reqData = ctx.request.query;
  console.log("asdfas====");
  console.log(reqData.country);

  const options = {
    method: 'POST',
    // uri: 'http://jrwl.kingtrans.cn/WebPrice?action=searchCountryXml&country=us',
    uri: 'http://jrwl.kingtrans.cn/WebPrice?action=list',
    headers: {
      // 'Content-Type': 'text/xml'
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: reqData,
    json: true // Automatically parses the JSON string in the response，
  };

  await rp(options)
    .then(function (repos) {
      console.log('User has repos');
      const $ = cheerio.load(repos);
      // var result = $('div.ks_search_content').html();
      var content = $('dl.ks_dl_table1').children().children('div[name="channelnamediv"]').text();
      var result=[];
      $('dl.ks_dl_table1').each(function(i,el){
        var item={};
        $(this).children().each(function(j,cel){
          //走货渠道 结算重 单价 金额 币别 时效 计算公式报价备注操作
          switch(j){
            case 0://渠道
              item.channel = $(this).children('div[name="channelnamediv"]').text();
            break;
            case 1://结算重
              item.weight = $(this).text();
            break;
            case 2://单价
              item.unitPrice = $(this).text();
              break;
            case 3://金额
              item.allPrice = $(this).text();
              break;
            case 4://币别
              item.currency = $(this).text();
              break;
            case 5://时效
              item.aging = $(this).children('div[name="sendtimediv"]').text();
              break;
            case 6://计算公式
              item.formula = $('p#dl_table1_p_'+(i+1)).text();
              break;
            case 7://报价备注
              item.remark = $('p#dl_table1_p1_' + (i + 1)).text();
              break;
            case 8://操作
              break;
          }
        })
        result.push(item);
      })
      ctx.state.data = result
    })
    .catch(function (err) {
      // API call failed...
      console.log(err);
      ctx.state.data = {
        msg: 'error'
      }
    });
}

