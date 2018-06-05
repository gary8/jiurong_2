const axios = require('axios');
const request=require('request');
const rp = require('request-promise');
module.exports = async ctx => {
  const options = {
    method:'GET',
    uri: 'http://jrwl.kingtrans.cn/WebPrice?action=searchCountryXml&country=us',
    headers: {
      // 'Content-Type': 'text/xml'
    },
    // body:{
    //   'country':'us'
    // },
    json: true // Automatically parses the JSON string in the response，
  };

  await rp(options)
    .then(function (repos) {
      console.log('User has repos');
      ctx.state.data={
        msg:repos
      }
    })
    .catch(function (err) {
      // API call failed...
      console.log(err);
      ctx.state.data = {
        msg: 'error'
      }
    });
}

