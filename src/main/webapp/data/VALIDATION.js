"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALIDATION = {
    'otherName': {
        'value': /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/i,
        'label': '输入的名称格式不正确'
    },
    'roleName': {
        'value': /^([a-zA-Z\u4e00-\u9fa5]{2,10})$/,
        'label': '2 - 10位的英文或汉字'
    },
    'lock': {
        'value': /^([a-zA-Z\u4e00-\u9fa5]{2,80})$/,
        'label': '2 - 80位的英文或汉字'
    },
    'name': {
        'value': /(^[\u4e00-\u9fa5 ]{2,10}$)|(^[a-zA-Z\/ ]{2,10}$)/,
        'label': '2 - 10位的英文或汉字'
    },
    'phone': {
        'value': /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/i,
        'label': '输入的电话、传真格式不正确<'
    },
    'chMobile': {
        'value': /^1[3|4|5|7|8][0-9]\d{8,8}$/,
        'label': '输入的手机号码格式不正确'
    },
    'phoneAndChMobile': {
        'value': /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/,
        'label': '输入的电话或手机号码格式不正确'
    },
    'idCardNumber': {
        'value': /^[1-9]([0-9]{16}|[0-9]{13})[xX0-9]$/i,
        'label': '输入的身份证号码格式不正确'
    },
    'company': {
        'value': /.*/i,
        'label': '输入的名称格式不正确'
    },
    'address': {
        'value': /.*/i,
        'label': '输入的地址格式不正确'
    },
    'zipcode': {
        'value': /^[1-9]\d{5}$/i,
        'label': '输入的邮编格式不正确'
    },
    'date': {
        'value': /^(\d{4})-(\d{2})-(\d{2})$/i,
        'label': '日期格式为：yyyy-mm-dd，如2015-01-01'
    },
    'time': {
        'value': /^(\d{4})-(\d\d)-(\d\d) (\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/i,
        'label': '时间格式为：yyyy-mm-dd hh:mm:ss或hh:mm，如2008-08-08 18:00'
    },
    'price': {
        'value': /^([1-9][0-9]{0,5})(\.[0-9]{1,2})?$/,
        'label': '格式为：xxxxx.xx，如1234.5, 1234.56'
    },
    'ticketPrice': {
        'value': /^([1-9][0-9]{0,2})(\.[0-9]{1,2})?$/,
        'label': '数字:1-999.99'
    },
    'coupon': {
        'value': /^([1-9][0-9]{0,1})$/,
        'label': '数字:1-99'
    },
    'carNumber': {
        'value': /^[\u4e00-\u9fa5]{1}[a-zA-Z]{1}[a-zA-Z_0-9]{4}[a-zA-Z_0-9_\u4e00-\u9fa5]$/i,
        'label': '输入的车牌号码格式不正确'
    },
    'email': {
        'value': /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        'label': '输入的邮箱格式不正确'
    },
    'qq': {
        'value': /^[1-9][0-9]{4,12}$/i,
        'label': '输入的QQ号码格式不正确'
    },
    'weixin': {
        'value': /^[A-Za-z][A-Za-z0-9_-]{5,19}$/i,
        'label': '输入的微信号码格式不正确'
    },
    'password': {
        'value': /^[A-Za-z0-9*#]{5,18}$/,
        'label': '6-18位字母大小写、数字、*、#的组合'
    },
    'percent': {
        'value': /^(0|[1-9][0-9]{0,3})(\.[0-9]{1,2})?%$/i,
        'label': '格式为：xxxx.xx%，如123.45%'
    },
    'integer': {
        'value': /^(0|[1-9][0-9]*)$/i,
        'label': '格式为：正整数'
    },
    'number': {
        'value': /^\d{1,2}$/i,
        'label': '格式为：两位数字'
    },
    'specialTicket': {
        'value': /^\d{1,2}$/i,
        'label': '1-2位数字'
    },
    'specialTicketPrice': {
        'value': /^([0-9]{1,3})+([.]{1}[0-9]+){0,1}$$/i,
        'label': '金额为:1-300'
    },
    'cnaps': {
        'value': /^\d{12}$/,
        'label': '格式为：12位数字'
    },
    'upperCase': {
        'value': /^[A-Z]+$/i,
        'label': '格式为：英文大写字母'
    },
    'lowerCase': {
        'value': /^[a-z]+$/i,
        'label': '格式为：英文小写字母'
    },
    'letter': {
        'value': /^[A-Za-z]+$/i,
        'label': '格式为：英文大小写'
    },
    'code': {
        'value': /^[\w-]+$/i,
        'label': '格式为：英文大小写、数字、连接符-、和下划线_'
    },
    'string': {
        'value': /.*/i,
        'label': '输入非法字符'
    },
    'license': {
        'value': /(^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{6}$)|(^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$)/i,
        'label': '格式为：首位中文、大写英文、数字加英语'
    },
    'chString': {
        'value': /^[\u4e00-\u9fa5]+$/i,
        'label': '格式为：中文字符'
    },
    'enString': {
        'value': /^[A-Za-z\s_]+$/i,
        'label': '格式为：英文字符、空格及下划线'
    },
    'chEnString': {
        'value': /^([\u4e00-\u9fa5A-Za-z\s]+)$/i,
        'label': '格式为：中英文字符'
    },
    'search': {
        'value': /^.{0,12}$/i,
        'label': '输入的搜索信息格式不正确，最多支持12个字符'
    },
    'url': {
        'value': /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?$/i,
        'label': '格式为：http://www.baidu.com或者https://www.baidu.com'
    },
    'threeDigit': {
        'value': /^[1-9]\d{0,2}$/i,
        'label': '位数不能超过三位数'
    },
    'vName': {
        'value': /(^[0-9]{0,2}\.[0-9]{0,2}\.[0-9]{0,2}\.[1-9]{0,4}$)|(^[0-9]{0,2}$)|(^[0-9]{0,2}\.[0-9]{0,2}$)|(^[0-9]{0,2}\.[0-9]{0,2}\.[,0-9]{0,2}$)/i,
        'label': '输入格式错误'
    },
    'loginName': {
        'value': /^[\w]{6,16}$/,
        'label': '格式为：6-16位英文大小写、数字、下划线_'
    },
    'bankCard': {
        'value': /^(\d{16}$)|(^\d{19}$)/i,
        'label': '银行卡号不能超过19位数字，不低于16位数字'
    },
    'axleBase': {
        'value': /^[1-9][0-9]{3}$/i,
        'label': '输入的格式不正确，4位数字'
    },
    'idCard': {
        'value': /(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)/i,
        'label': '输入的身份证格式不正确,15或18位身份证号码'
    },
    'floatString': {
        'value': /^(0|[1-9][0-9]{0,regexp_m})(\\.[0-9]{1,regexp_n})?$/i,
        'label': '格式为：最大{{m}}位整数和{{n}}位小数'
    },
    'supervisory': {
        'value': /^[A-Za-z0-9]{1,20}$/i,
        'label': '格式为：英文大小写，数字，最多支持20个字符'
    },
    'plateNumber': {
        'value': /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{1}[A-Z]{1}[A-Z0-9]{5,6}$/i,
        'label': '车牌格式为：鄂A12345或鄂A123456'
    },
    'carType': {
        'value': /^([\u4e00-\u9fa5A-Za-z]+)$/i,
        'label': '输入格式错误'
    },
    'phoneNumber': {
        'value': /(^1[3|4|5|7|8][0-9]\d{8}$)|(^([0-9]{8}$))/i,
        'label': '正确的手机号码，香港（8位）、中国大陆（11位）'
    },
    'presellTime': {
        'value': /^[1-9][0-9]{0,1}$/,
        'label': '数字:1-99'
    },
    'stopSellTime': {
        'value': /^[1-9][0-9]{0,2}$/,
        'label': '数字:1-999'
    },
    'amount': {
        'value': /^[1-9][0-9]{0,7}$/,
        'label': '数字:1-99999999'
    },
    'weight': {
        'value': /^[1-9][0-9]{0,5}$/,
        'label': '数字:1-999999'
    },
    'chargeRate': {
        'value': /^[0-9]{1,2}$/,
        'label': '数字:0-99'
    }
};
