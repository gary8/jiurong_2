var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addrIndex: 244,
    addrsName: [],
    addrs: [
      { value: 'AF', name: 'AFGHANISTAN 阿富汗' },
      { value: 'AL', name: 'ALBANIA 阿尔巴尼亚' },
      { value: 'DZ', name: 'ALGERIA 阿尔及利亚' },
      { value: 'AD', name: 'ANDORRA 安道尔' },
      { value: 'AO', name: 'ANGOLA 安哥拉' },
      { value: 'AI', name: 'ANGUILLA 安圭拉岛' },
      { value: 'AQ', name: 'ANTARCTICA 南极洲' },
      { value: 'AG', name: 'AND BARBUDA 安提瓜及巴布达' },
      { value: 'AR', name: 'ARGENTINA 阿根廷' },
      { value: 'AM', name: 'ARMENIA 亚美尼亚' },
      { value: 'AW', name: 'ARUBA 亚鲁巴' },
      { value: 'XD', name: 'ASCENSION 阿森松' },
      { value: 'AU', name: 'AUSTRALIA 澳大利亚' },
      { value: 'AT', name: 'AUSTRIA 奥地利' },
      { value: 'AZ', name: 'AZERBAIJAN 阿塞拜疆' },
      { value: 'XH', name: 'AZORES 亚速尔' },
      { value: 'BS', name: 'BAHAMAS 巴哈马' },
      { value: 'BH', name: 'BAHRAIN 巴林' },
      { value: 'XJ', name: 'BALEARIC ISLANDS巴利阿里群岛' },
      { value: 'BD', name: 'BANGLADESH 孟加拉' },
      { value: 'BB', name: 'BARBADOS 巴巴多斯' },
      { value: 'BY', name: 'BELARUS 白俄罗斯' },
      { value: 'BE', name: 'BELGIUM 比利时' },
      { value: 'BZ', name: 'BELIZE 伯利兹' },
      { value: 'BJ', name: 'BENIN 贝宁' },
      { value: 'BM', name: 'BERMUDA 百慕达' },
      { value: 'BT', name: 'BHUTAN 不丹' },
      { value: 'BO', name: 'BOLIVIA 玻利维亚' },
      { value: 'BA', name: 'BOSNIA 波斯尼亚' },
      { value: 'BW', name: 'BOTSWANA 博茨瓦纳' },
      { value: 'BV', name: 'BOUVET 布维岛' },
      { value: 'BR', name: 'BRAZIL 巴西' },
      { value: 'IO', name: 'BRITISH 英属印度洋地区' },
      { value: 'BVI', name: 'British 英属维尔京群岛' },
      { value: 'BN', name: 'BRUNEI DARUSSALAM 文莱达鲁萨兰国' },
      { value: 'BG', name: 'BULGARIA 保加利亚' },
      { value: 'BF', name: 'BURKINA FASO 布基纳法索' },
      { value: 'BI', name: 'BURUNDI 布隆迪' },
      { value: 'KH', name: 'CAMBODIA 柬埔寨' },
      { value: 'CM', name: 'CAMEROON 喀麦隆' },
      { value: 'CA', name: 'CANADA 加拿大' },
      { value: 'XA', name: 'CANARY ISLANDS 加那利群岛' },
      { value: 'CV', name: 'CAPE VERDE 佛得角群岛' },
      { value: 'XK', name: 'CAROLINE ISLANDS 加罗林群岛' },
      { value: 'KY', name: 'CAYMAN ISLANDS 开曼群岛' },
      { value: 'CF', name: 'CENTRAL AFRICAN 中非共和国' },
      { value: 'TD', name: 'CHAD 乍得' },
      { value: 'XC', name: 'CHANNEL ISLANDS 海峡群岛' },
      { value: 'CL', name: 'CHILE 智利' },
      { value: 'CN', name: 'CHINA 中国' },
      { value: 'CX', name: 'CHRISTMAS ISLAND 圣诞岛' },
      { value: 'CC', name: 'COCOS(KEELING)ISLANDS 科科斯群岛' },
      { value: 'CO', name: 'COLOMBIA 哥伦比亚' },
      { value: 'KM', name: 'COMOROS 科摩罗' },
      { value: 'CD', name: 'CONGO 刚果(民主共和国)' },
      { value: 'CG', name: 'CONGO 刚果' },
      { value: 'CDR', name: 'Congo 刚果民主共和国' },
      { value: 'CK', name: 'COOK ISLANDS 库克群岛' },
      { value: 'XF', name: 'CORSICA 科西嘉岛' },
      { value: 'CR', name: 'COSTA RICA 哥斯达黎加' },
      { value: 'CI', name: 'COTE D\'IVOIRE 科特迪瓦' },
      { value: 'HR', name: 'CROATIA CROATIA 克罗地亚' },
      { value: 'CU', name: 'CUBA 古巴' },
      { value: 'CY', name: 'CYPRUS 塞浦路斯' },
      { value: 'CZ', name: 'CZECH REPUBLIC 捷克' },
      { value: 'DK', name: 'DENMARK 丹麦' },
      { value: 'DJ', name: 'DJIBOUTI 吉布提' },
      { value: 'DM', name: 'DOMINICA 多米尼加' },
      { value: 'DO', name: 'DOMINICAN REPUBLIC 多米尼加共和国' },
      { value: 'DB', name: 'DUBAI 迪拜' },
      { value: 'TP', name: 'EAST TIMOR A) 东帝汶' },
      { value: 'EC', name: 'ECUADOR 厄瓜多尔' },
      { value: 'EG', name: 'EGYPT 埃及' },
      { value: 'SV', name: 'EL SALVADOR 萨尔瓦多' },
      { value: 'GQ', name: 'EQUATORIAL GUINEA 赤道几内亚' },
      { value: 'ER', name: 'ERITREA 厄立特里亚' },
      { value: 'EE', name: 'ESTONIA 爱沙尼亚' },
      { value: 'ET', name: 'ETHIOPIA 埃塞俄比亚' },
      { value: 'FK', name: 'FALKLAND ISLAND 福克兰群岛' },
      { value: 'FO', name: 'FAROE ISLANDS 法罗群岛' },
      { value: 'FJ', name: 'FIJI 斐济' },
      { value: 'FI', name: 'FINLAND 芬兰' },
      { value: 'FR', name: 'FRANCE 法国' },
      { value: 'FX', name: 'FRANCE, METROPOLITAN 法属美特罗波利坦' },
      { value: 'GF', name: 'FRENCH GUIANA 法属圭亚那' },
      { value: 'FRP', name: 'FRENCH POLYESIA 法属玻里尼西亚' },
      { value: 'PF', name: 'FRENCH POLYNESIA 法属波利尼西亚' },
      { value: 'TF', name: 'FRENCH SOUTHERN 法属南部领土' },
      { value: 'GA', name: 'GABON 加蓬' },
      { value: 'GM', name: 'GAMBIA 冈比亚' },
      { value: 'XE', name: 'GAZA AND KHAN YUNIS 加沙及汗尤尼斯' },
      { value: 'GE', name: 'GEORGIA 格鲁吉亚' },
      { value: 'DE', name: 'GERMANY 德国' },
      { value: 'GH', name: 'GHANA 加纳' },
      { value: 'GI', name: 'GIBRALTAR 直布罗陀' },
      { value: 'GR', name: 'GREECE 希腊' },
      { value: 'GL', name: 'GREENLAND 格陵兰' },
      { value: 'GD', name: 'GRENADA 格林纳达' },
      { value: 'GP', name: 'GUADELOUPE 瓜德罗普岛' },
      { value: 'GU', name: 'GUAM 关岛' },
      { value: 'GT', name: 'GUATEMALA 危地马拉' },
      { value: 'GN', name: 'GUINEA 新几内亚' },
      { value: 'GW', name: 'GUINEA-BISSAU 几内亚比绍' },
      { value: 'GY', name: 'GUYANA 圭亚那' },
      { value: 'HT', name: 'HAITI 海地' },
      { value: 'HM', name: 'HEARD 赫德岛和麦克唐岛' },
      { value: 'HN', name: 'HONDURAS 洪都拉斯' },
      { value: 'HK', name: 'HONG KONG 香港' },
      { value: 'HU', name: 'HUNGARY 匈牙利' },
      { value: 'IS', name: 'ICELAND 冰岛' },
      { value: 'IN', name: 'INDIA 印度' },
      { value: 'ID', name: 'INDONESIA 印度尼西亚' },
      { value: 'IR', name: 'IRAN 伊朗' },
      { value: 'IQ', name: 'IRAQ 伊拉克' },
      { value: 'IE', name: 'IRELAND 爱尔兰' },
      { value: 'IL', name: 'ISRAEL 以色列' },
      { value: 'IT', name: 'ITALY 意大利' },
      { value: 'JM', name: 'JAMAICA 牙买加' },
      { value: 'JP', name: 'JAPAN 日本' },
      { value: 'JO', name: 'JORDAN 约旦' },
      { value: 'KZ', name: 'KAZAKHSTAN 哈萨克' },
      { value: 'KE', name: 'KENYA 肯尼亚' },
      { value: 'KI', name: 'KIRIBATI 基里巴斯' },
      { value: 'KP', name: 'KOREA 北韩' },
      { value: 'KR', name: 'KOREA 南韩' },
      { value: 'XO', name: 'KOSOVO 科索夫' },
      { value: 'KW', name: 'KUWAIT 科威特' },
      { value: 'KG', name: 'KYRGYZSTAN 吉尔吉斯' },
      { value: 'LA', name: 'LAO PEOPLE\'S 老挝' },
      { value: 'LV', name: 'LATVIA 拉脱维亚' },
      { value: 'LB', name: 'LEBANON 黎巴嫩' },
      { value: 'LS', name: 'LESOTHO 莱索托' },
      { value: 'LR', name: 'LIBERIA 利比里亚' },
      { value: 'LY', name: 'LIBYAN 利比亚' },
      { value: 'LI', name: 'LIECHTENSTEIN 列支敦士登' },
      { value: 'LT', name: 'LITHUANIA 立陶宛' },
      { value: 'LU', name: 'LUXEMBOURG 卢森堡' },
      { value: 'MO', name: 'MACAU 澳门' },
      { value: 'MK', name: 'MACEDONIA (REP. OF) 马其顿' },
      { value: 'MG', name: 'MADAGASCAR 马达加斯加' },
      { value: 'XI', name: 'MADEIRA 马德拉' },
      { value: 'MW', name: 'MALAWI 马拉维' },
      { value: 'MY', name: 'MALAYSIA 马来西亚' },
      { value: 'MV', name: 'MALviewES 马尔代夫' },
      { value: 'ML', name: 'MALI 马里' },
      { value: 'MT', name: 'MALTA 马耳他' },
      { value: 'MP', name: 'MARIANA ISLANDS 马里亚纳群岛 (北)' },
      { value: 'MH', name: 'MARSHALL ISLANDS 马绍尔群岛' },
      { value: 'MQ', name: 'MARTINIQUE 马提尼克岛' },
      { value: 'MR', name: 'MAURITANIA 毛里塔尼亚' },
      { value: 'MU', name: 'MAURITIUS 毛里求斯' },
      { value: 'YT', name: 'MAYOTTE 马约特' },
      { value: 'MX', name: 'MEXICO 墨西哥' },
      { value: 'FM', name: 'MICRONESIA 密克罗尼西亚' },
      { value: 'MD', name: 'MOLDOVA 摩尔多瓦' },
      { value: 'MC', name: 'MONACO 摩纳哥' },
      { value: 'ME', name: 'MONTENEGRO 黑山共和国' },
      { value: 'MS', name: 'MONTSERRAT 蒙特塞拉特' },
      { value: 'MA', name: 'MOROCCO 摩洛哥' },
      { value: 'MZ', name: 'MOZAMBIQUE 莫桑比克' },
      { value: 'MM', name: 'MYANMAR 缅甸' },
      { value: 'NA', name: 'NAMIBIA 纳米比亚' },
      { value: 'NR', name: 'NAURU 瑙鲁' },
      { value: 'NP', name: 'NEPAL 尼泊尔' },
      { value: 'NL', name: 'NETHERLANDS 荷兰' },
      { value: 'AN', name: 'NETHERLANDS 荷属安的列斯群岛' },
      { value: 'NC', name: 'NEW CALEDONIA 新喀里多尼亚' },
      { value: 'NZ', name: 'NEW ZEALAND 新西兰 ' },
      { value: 'XL', name: 'TERRITORIES 新西兰属土岛屿 (库克群岛)' },
      { value: 'NI', name: 'NICARAGUA 尼加拉瓜' },
      { value: 'NE', name: 'NIGER 尼日尔' },
      { value: 'NG', name: 'NIGERIA 尼日利亚' },
      { value: 'NU', name: 'NIUE 纽埃' },
      { value: 'NF', name: 'NORFOLK ISLAND 诺克岛' },
      { value: 'NO', name: 'NORWAY 挪威' },
      { value: 'OM', name: 'OMAN 阿曼' },
      { value: 'PK', name: 'PAKISTAN 巴基斯坦' },
      { value: 'PA', name: 'PANAMA 巴拿马' },
      { value: 'PG', name: 'PAPUA NEW GUINEA 巴布亚新几内亚' },
      { value: 'PY', name: 'PARAGUAY 巴拉圭' },
      { value: 'PE', name: 'PERU 秘鲁' },
      { value: 'PH', name: 'PHILIPPINES 菲律宾' },
      { value: 'PN', name: 'PITCAIRN 皮特凯恩岛' },
      { value: 'PL', name: 'POLAND 波兰' },
      { value: 'PT', name: 'PORTUGAL 葡萄牙' },
      { value: 'PR', name: 'PUERTO 波多黎各' },
      { value: 'PS', name: 'Palestine 巴勒斯坦' },
      { value: 'QA', name: 'QATAR 卡塔尔' },
      { value: 'RE', name: 'REUNION 留尼汪岛' },
      { value: 'RO', name: 'ROMANIA 罗马尼亚' },
      { value: 'RU', name: 'RUSSIAN 俄罗斯 (俄罗斯联邦)' },
      { value: 'RW', name: 'RWANDA 卢旺达' },
      { value: 'SH', name: 'SAINT HELENA 圣赫勒拿岛' },
      { value: 'KN', name: 'SAINT KITTS AND NEVIS 圣基茨和尼维斯' },
      { value: 'LC', name: 'SAINT LUCIA 圣卢西亚' },
      { value: 'PM', name: 'SAINT PIERRE AND 圣皮埃尔和' },
      { value: 'VC', name: 'SAINT VINCENT 圣文森特和格林纳丁斯' },
      { value: 'AS', name: 'SAMOA 萨摩亚 (美国属土)' },
      { value: 'WS', name: 'SAMOA 西萨摩亚' },
      { value: 'SM', name: 'SAN MARINO 圣马力诺' },
      { value: 'ST', name: 'SAO TOME AND PRINCIPE 圣多美和普林西比' },
      { value: 'SA', name: 'SAUDI ARABIA 沙特阿拉伯' },
      { value: 'SN', name: 'SENEGAL 内加尔' },
      { value: 'RS', name: 'SERBIA 塞尔维亚' },
      { value: 'SC', name: 'SEYCHELLES 塞舌尔' },
      { value: 'SL', name: 'SIERRA LEONE 塞拉利昂' },
      { value: 'SG', name: 'SINGAPORE 新加坡' },
      { value: 'SK', name: 'SLOVAK 斯洛伐克' },
      { value: 'SI', name: 'SLOVENIA 斯洛文尼亚' },
      { value: 'SB', name: 'SOLOMON 所罗门群岛' },
      { value: 'SO', name: 'SOMALIA 索马里' },
      { value: 'ZA', name: 'SOUTH AFRICA 南非' },
      { value: 'GS', name: 'SOUTH SANDWICH ISL 南乔治亚岛和南桑德韦奇岛' },
      { value: 'ES', name: 'SPAIN 西班牙 ' },
      { value: 'XG', name: 'SPANISH TERRITORIES 北非西班牙属土' },
      { value: 'SJ', name: 'SPITSBERGEN(SVALBARD)斯匹次卑尔根群岛' },
      { value: 'LK', name: 'SRI LANKA 斯里兰卡' },
      { value: 'STM', name: 'St. Marrten 圣马丁' },
      { value: 'SES', name: 'St.Eustatius 圣尤斯达求斯' },
      { value: 'SD', name: 'SUDAN 苏丹' },
      { value: 'SR', name: 'SURINAME 苏里南' },
      { value: 'SZ', name: 'SWAZILAND 斯威士兰' },
      { value: 'SE', name: 'SWEDEN 瑞典' },
      { value: 'CH', name: 'SWITZERLAND 瑞士' },
      { value: 'SY', name: 'SYRIAN ARAB REPUBLIC 叙利亚 ' },
      { value: 'TW', name: 'TAIWAN 台湾' },
      { value: 'TJ', name: 'TAJIKISTAN 塔吉克' },
      { value: 'TZ', name: 'TANZANIA 坦桑尼亚' },
      { value: 'TH', name: 'THAILAND 泰国' },
      { value: 'TG', name: 'TOGO 多哥' },
      { value: 'TK', name: 'TOKELAU 托克劳' },
      { value: 'TO', name: 'TONGA 汤加' },
      { value: 'VG', name: 'TORTOLA 托尔托拉岛(英属处女群岛)' },
      { value: 'TT', name: 'TRINIDAD AND TOBAGO 千里达和多巴哥' },
      { value: 'XB', name: 'TRISTAN DA CUNHA 特里斯坦 - 达库尼亚岛' },
      { value: 'TN', name: 'TUNISIA 突尼斯' },
      { value: 'TR', name: 'TURKEY 土耳其' },
      { value: 'TM', name: 'TURKMENISTAN 土库曼' },
      { value: 'TC', name: 'TURKS AND CAICOS 特克斯和凯科斯群岛' },
      { value: 'TV', name: 'TUVALU 图瓦卢' },
      { value: 'UG', name: 'UGANDA 乌干达' },
      { value: 'UA', name: 'UKRAINE 乌克兰' },
      { value: 'AE', name: 'UNITED ARAB EMIRATES 阿拉伯联合酋长国' },
      { value: 'GB', name: 'UNITED KINGDOM 英国' },
      { value: 'US', name: 'UNITED STATES 美国' },
      { value: 'UM', name: 'UNITED STATES MINOR 美国本土外小岛屿' },
      { value: 'UY', name: 'URUGUAY URUGUAY 乌拉圭' },
      { value: 'UZ', name: 'UZBEKISTAN 乌兹别克' },
      { value: 'VU', name: 'VANUATU VANUATU 瓦努阿图' },
      { value: 'VA', name: 'VATICAN CITY STATE 梵蒂冈' },
      { value: 'VE', name: 'VENEZUELA 委内瑞拉' },
      { value: 'VN', name: 'VIET NAM 越南' },
      { value: 'VI', name: 'VIRGIN ISLANDS (U.S.)美属处女群岛' },
      { value: 'XM', name: 'WAKE ISLAND WAKE ISLAND 威克岛 ' },
      { value: 'WF', name: 'WALLIS AND FUTUNA 瓦利斯群岛和富图纳群岛' },
      { value: 'EH', name: 'WESTERN SAHARA 西撒哈拉' },
      { value: 'YE', name: 'YEMEN 也门' },
      { value: 'ZM', name: 'ZAMBIA 赞比亚' },
      { value: 'ZW', name: 'ZIMBABWE 津巴布韦' }
    ],
    goodIndex:0,
    goodNames:[
      '包裹', '文件'
    ],
    goodTypes:[
      {
        name: '包裹', value: 'WPX'
      }, {
        name: '文件', value: 'DOC'
      }
    ],
    showChannel:false,
    searchResult:[]
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    util.showBusy('请求中...')
    var that = this
    qcloud.request({
      url: `${config.service.host}/weapp/quote`,
      method:'GET',
      data: e.detail.value,
      success(result) {
        console.log(JSON.stringify(result.data))
        if (result.data.code==0){
          util.showSuccess('请求成功完成')
          that.setData({
            showChannel: true,
            searchResult: result.data.data
          })
        }else{
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

  bindGoodPickerChange:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      goodIndex: e.detail.value
    })
  },

  bindAddrPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      addrIndex: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arrys=this.data.addrsName;
    for (var i = 0; i < this.data.addrs.length;i++){
      arrys.push(this.data.addrs[i].name);
    }
    this.setData({addrsName:arrys});
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