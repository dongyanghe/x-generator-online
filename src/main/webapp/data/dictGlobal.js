var _global = {
    status:{    //  -1禁用  0删除 1启用 2拉黑、锁定
        unable: -1,
        delete:0,
        enable: '1',
        defriend:2
    },
    auditStatus: {//1审核中 2审核通过 3审核失败
        pendingAudit: 1,
        adoptAudit: 2,
        audiFailure: 3
    },
    roleState: {//-1禁用  1启用
        unable: -1,
        Enable: 1
    },
    userState: {//-1禁用  1启用
        valid: 1,
        invalid: -1
    },
    companyState: {//1正常    -1禁用    0删除
        valid: 1,
        invalid: -1,
        delete: 0
    },
    vehicleStatus: {
        operator: 1,//运营
        repair: 2,//维修
        outage: 3//停运
    },

    scheduleType: {
        shortDistance: 0, //短途
        longDistance: 1, //长途
        other: 2 //其他
    },
    lineType: {
        toWork: 0, //上班
        offWork: 1, //下班
        temporary: 2, //临时线
        shuttle: 3  //穿梭线
    },
    lineStatus: {
        invalid: 0, //无效
        useful: 1, //有用
        createTask: 2 //可生成固定任务
    },
    companyService: {   //公司开通服务类型
        taxi: "1,2", //万顺
        bus: "3",   //服务巴
    },
}
var _dict = {
    auditRemark: {
        selectImgTaxRegistration:[
            {
                "value": "0",
                "label": "图片模糊"
            },
            {
                "value": "1",
                "label": "数据不正确"
            }
        ]
    },
    "languageType": [
        {
            "value": "CN",
            "label": "简体中文"
        },
        {
            "value": "EN",
            "label": "English"
        },
        {
            "value": "TW",
            "label": "繁體臺語"
        }
    ],
    companyService: [
        {
            "label": "万顺",
            "value": _global.companyService.taxi
        },
        {
            "label": "服务巴",
            "value": _global.companyService.bus
        }
    ],
    scheduleType: [
        {
            "label": "短途",
            "value": _global.scheduleType.shortDistance
        },
        {
            "label": "长途",
            "value": _global.scheduleType.longDistance
        },
        {
            "label": "其他",
            "value": _global.scheduleType.other
        }
    ],
    "lineType": [
        {
            "label": "上班线",
            "value": _global.lineType.toWork
        },
        {
            "label": "下班线",
            "value": _global.lineType.offWork
        },
        {
            "label": "临时线",
            "value": _global.lineType.temporary,
        },
        {
            "label": "穿梭线",
            "value": _global.lineType.shuttle
        }
    ],
    "lineStatus": [
        {
            "label": "无效",
            "value": 0
        },
        {
            "label": "有效",
            "value": 1
        }
    ],

    "state": [
        {
            "label": "正常",
            "value": 1
        }
    ],
    "menuState": [
        {
            "label": "启用",
            "value": 1
        },
        {
            "label": "禁用",
            "value": -1
        }
    ],
    "partnerStatus": [
        //-1禁止 0删除 1启用 2.锁定
        //  unable: -1,  delete: 0, enable: 1,  defriend: 2
        // {
        //     "label": "删除",
        //     "value": _global.status.delete
        // },
        {
            "label": "启用",
            "value": _global.status.enable
        },
        {
            "label": "禁用",
            "value": _global.status.unable
        },
        {
            "label": "锁定",
            "value": _global.status.defriend
        }
    ],
    "payType": [
        {
            "label": "现金",
            "value": 0
        },
        {
            "label": "网络",
            "value": 1
        }
    ],
    "stratEgy": [
        {
            "label": "派单",
            "value": 0
        },
        {
            "label": "抢单",
            "value": 1
        }
    ],
    "orderType": [
        {
            "label": "出租车即时订单",
            "value": 10
        },
        {
            "label": "出租车预约订单",
            "value": 11
        },
        {
            "label": "专车即时订单",
            "value": 30
        },
        {
            "label": "专车预约订单",
            "value": 31
        }
    ],
    "orderTypes": [
        {
            "label": "出租车即时订单",
            "value": 10
        },
        {
            "label": "出租车预约订单",
            "value": 11
        },
        {
            "label": "专车即时订单",
            "value": 20
        },
        {
            "label": "专车预约订单",
            "value": 21
        }
    ],
    "taxiCategory": [
        {
            "label": "传统型",
            "value": 1
        },
        {
            "label": "能源型",
            "value": 2
        },
        {
            "label": "特殊型",
            "value": 3
        },
        {
            "label": "绿的",
            "value": 4
        },
        {
            "label": "蓝的",
            "value": 5
        },
        {
            "label": "红的",
            "value": 6
        },
        {
            "label": "电动汽车",
            "value": 7
        },
        {
            "label": "混合动力汽车",
            "value": 8
        },
        {
            "label": "生物燃料汽车",
            "value": 9
        },
        {
            "label": "太阳能汽车",
            "value": 10
        },
        {
            "label": "不限",
            "value": 11
        }
    ],
    "specialCarCategory": [
        {
            "label": "舒适型",
            "value": 1
        },
        {
            "label": "商务型",
            "value": 2
        },
        {
            "label": "豪华型",
            "value": 3
        },
        {
            "label": "起亚K2",
            "value": 4
        },
        {
            "label": "本田飞度",
            "value": 5
        },
        {
            "label": "别克GL8",
            "value": 6
        },
        {
            "label": "本田奥德赛",
            "value": 7
        },
        {
            "label": "宝马7系",
            "value": 8
        },
        {
            "label": "特斯拉",
            "value": 9
        },
        {
            "label": "智选型",
            "value": 13
        }
    ],
    "orderStatus": [
        {
            "label": "司机超时无法接单",
            "value": -40
        },
        {
            "label": "司机取消",
            "value": -30
        },
        {
            "label": "乘客取消",
            "value": -20
        },
        {
            "label": "无匹配司机",
            "value": -10
        },
        {
            "label": "预约待出发",
            "value": 10
        },
        {
            "label": "派单给司机",
            "value": 20
        },
        {
            "label": "司机接单",
            "value": 21
        },
        {
            "label": "司机到达地点",
            "value": 22
        },
        {
            "label": "乘客上车",
            "value": 23
        },
        {
            "label": "到达目的地",
            "value": 24
        },
        {
            "label": "未支付",
            "value": 30
        },
        {
            "label": "未评价",
            "value": 40
        },
        {
            "label": "完成",
            "value": 50
        }
    ],
    "ordersStatus": [
        {
            "label": "系统无响应",
            "value": 50
        },
        {
            "label": "司机超时无法接单",
            "value": -40
        },
        {
            "label": "司机取消",
            "value": -30
        },
        {
            "label": "乘客取消",
            "value": -20
        },
        {
            "label": "无匹配司机",
            "value": -10
        },
        {
            "label": "预约待出发",
            "value": 10
        },
        {
            "label": "派单给司机",
            "value": 20
        },
        {
            "label": "司机接单",
            "value": 30
        },
        {
            "label": "司机发车",
            "value": 40
        },
        {
            "label": "司机到达乘客地点",
            "value": 50
        },
        {
            "label": "乘客上车",
            "value": 60
        },
        {
            "label": "到达目的地",
            "value": 70
        },
        {
            "label": "未评价",
            "value": 80
        },
        {
            "label": "完成",
            "value": 90
        }
    ],
    "ordersStatu": [
        {
            "label": "系统无响应",
            "value": -50
        },
        {
            "label": "司机超时无法接单",
            "value": -40
        },
        {
            "label": "司机取消",
            "value": -30
        },
        {
            "label": "乘客取消",
            "value": -20
        },
        {
            "label": "无匹配司机",
            "value": -10
        },
        {
            "label": "预约待出发",
            "value": 10
        },
        {
            "label": "派单给司机",
            "value": 20
        },
        {
            "label": "司机接单",
            "value": 30
        },
        {
            "label": "司机发车",
            "value": 40
        },
        {
            "label": "司机到达乘客地点",
            "value": 50
        },
        {
            "label": "到达目的地",
            "value": 60
        },
        {
            "label": "未支付",
            "value": 70
        },
        {
            "label": "完成",
            "value": 80
        }
    ],
    "carType": [
        {
            "label": "出租车",
            "value": 1
        },
        {
            "label": "专车",
            "value": 2
        },
        {
            "label": "大巴",
            "value": 3
        }
    ],
    "companyType": [
        {
            "label": "普通法人企业",
            "value": 0
        },
        {
            "label": "非法人组织",
            "value": 1
        },
        {
            "label": "事业单位",
            "value": 2
        }
    ],
    "sex": [
        {
            "label": "未知",
            "value": 2
        },
        {
            "label": "男",
            "value": 1
        },
        {
            "label": "女",
            "value": 0
        }
    ],
    "status":[
        {
            "label": "禁用",
            "value": -1
        },
        {
            "label": "删除",
            "value": 0
        },
        {
            "label": "启用",
            "value": 1
        },
        {
            "label": "拉黑",
            "value": 2
        }
    ],

    auditStatus:[
        {
            "label": "审核中",
            "value": _global.auditStatus.pendingAudit
        },
        {
            "label": "审核通过",
            "value": _global.auditStatus.adoptAudit
        },
        {
            "label": "审核不通过",
            "value": _global.auditStatus.audiFailure
        }
    ],
    "expChargingRuleStatus":[
        {
            "label": "正常",
            "value": 1
        },
        {
            "label": "禁止",
            "value": 2
        }
    ],
    "busStatus": [
        {
            "label": "禁用",
            "value": _global.status.unable
        },
        {
            "label": "启用",
            "value": _global.status.enable
        }
    ],
   "vehicleStatus": [
        {
            "label": "运营",
            "value": _global.vehicleStatus.operator
        },
        {
            "label": "维修",
            "value": _global.vehicleStatus.repair
        },
        {
            "label": "停运",
            "value": _global.vehicleStatus.outage
        }

    ],
    "driverAudit": [
        {
            "label": "待审核",
            "value": 1
        },
        {
            "label": "审核驳回",
            "value": 2
        },
        {
            "label": "司机信息不全",
            "value": 3
        }
    ],
    "driverStatus": [
        {
            "label": "禁用",
            "value": -1
        },
         //{
         //    "label": "删除",
         //    "value": 0
         //},
        {
            "label": "启用",
            "value": 1
        },
        {
            "label": "拉黑",
            "value": 2
        }
    ],
    "carState":[
        {
            "label":"禁用",
            "value":-1
        },
        {
            "label":"启用",
            "value":1
        }
    ],
    "companyState": [
        {
            "label": "正常",
            "value": _global.companyState.valid
        },
        {
            "label": "禁用",
            "value": _global.companyState.invalid
        }
    ],
    roleState: [//unable禁用  Enable启用
        {
            "label": "禁用",
            "value": _global.roleState.unable
        },
        {
            "label": "启用",
            "value": _global.roleState.Enable
        }
    ],
    "userState": [
        {
            "label": "启用",
            "value": _global.userState.valid
        },
        {
            "label": "禁用",
            "value": _global.userState.invalid
        }
    ],
    taxiOrderType:[
        {
            "label": "预约历史订单",
            "value": "reserveHistoryOrder"
        },
        {
            "label": "实时历史订单",
            "value": "instantHistoryOrder"
        }
    ],
    taxiErrorOrderType:[
        {
            "label": "预约异常订单",
            "value": "reserveErrorOrder"
        },
        {
            "label": "实时异常订单",
            "value": "instantErrorOrder"
        }
    ],
    taxiUnOrderType:[
        {
            "label": "预约未完成订单",
            "value": "reserveOrder"
        },
        {
            "label": "实时未完成订单",
            "value": "instantOrder"
        }
    ],
    specialCarOrderType:[
        {
            "label": "预约历史订单",
            "value": "reserveHistoryOrder"
        },
        {
            "label": "实时历史订单",
            "value": "instantHistoryOrder"
        }
    ],
    specialCarErrorOrderType:[
        {
            "label": "预约异常订单",
            "value": "reserveErrorOrder"
        },
        {
            "label": "实时异常订单",
            "value": "instantErrorOrder"
        }
    ],
    specialCarUnOrderType:[
        {
            "label": "预约未完成订单",
            "value": "reserveOrder"
        },
        {
            "label": "实时未完成订单",
            "value": "instantOrder"
        }
    ],
    energyType:[
        {
            "label": "燃油车",
            "value": "燃油车"
        },
        {
            "label": "纯电动",
            "value": "纯电动"
        },
        {
            "label": "油电混合",
            "value": "油电混合"
        }
    ],
    displacement:[
        {
            "label": "1.6",
            "value": 1.6
        },
        {
            "label": "1.8",
            "value": 1.8
        },
        {
            "label": "2.0",
            "value": 2.0
        },
        {
            "label": "2.2",
            "value": 2.2
        }
    ],
    "seating":[
        {
            "label": "4座",
            "value": 4
        },
        {
            "label": "5座",
            "value": 5
        },
        {
            "label": "6座",
            "value": 6
        },
        {
            "label": "7座",
            "value": 7
        }
    ],
    "type":[
        {
            "label": "司机端",
            "value": 2
        },
        {
            "label": "乘客端",
            "value": 1
        }
    ],
    "updateForce":[
        {
            "label": "强制",
            "value":  1
        },
        {
            "label": "非强制",
            "value":  0
        }
    ],
    "refundStatus":[
        {
            "label": "退款中",
            "value":  0
        },
        {
            "label": "已退款",
            "value":  1
        }
    ],
    "platform":[
        {
            "label": "Android",
            "value": 1
        },
        {
            "label": "IOS",
            "value": 2
        }
    ],
    "channel":[
        {
            "label": "豌豆荚",
            "value": 1
        },
        {
            "label": "应用宝",
            "value": 2
        },
        {
            "label": "360",
            "value": 3
        }
    ],
    //"IOSChannels":[
    //    {
    //        "label": "AppStore",
    //        "value": 1
    //    }
    //],

    "serviceType":[
        {
            "label": "出租车",
            "value": 1
        },
        {
            "label": "快车",
            "value": 2
        },
        // {
        //     "label": "专车",
        //     "value": 2
        // },
        // {
        //     "label": "巴士票",
        //     "value": 3
        // },
        //{
        //    "label": "过港巴士",
        //    "value": 4
        //},
        //{
        //    "label": "顺风车",
        //    "value": 5
        //}
    ],
    "auditState": [  //1 未审核  2 审核未通过   3 审核信息不全
        {
            "label": "未审核",
            "value": 1
        },
        {
            "label": "审核未通过",
            "value": 2
        },
        {
            "label": "审核信息不全",
            "value": 3
        }
    ],
    "driver": [
        {
            "label": "主班司机",
            "value": 1
        },
        {
            "label": "副班司机",
            "value": 2
        },
    ],
    "isPersonal": [
        {
            "label": "个人经营",
            "value": 1
        },
        {
            "label": "集体经营",
            "value": 2
        }
    ],
    "openStatus": [
        {
            "label": "开通",
            "value": 1
        },
        {
            "label": "未开通",
            "value": 0
        }
    ],
    "serviceStatus": [
        {
            "label": "启用",
            "value": 1
        },
        {
            "label": "禁用",
            "value": 2
        }
    ],
    "taxiCategoryStatus":[
        {
            "label": "启用",
            "value": 1
        },
        {
            "label": "禁用",
            "value": -1
        }
    ],
    "specialCarCategoryStatus":[
        {
            "label": "启用",
            "value": 1
        },
        {
            "label": "禁用",
            "value": -1
        }
    ],
    "carStatus":[
        {
            "label": "开启",
            "value": 1
        },
        {
            "label": "禁用",
            "value": -1
        }
    ],
    "resourceStatus": [
        {
            "label": "禁用",
            "value": -1
        },
        {
            "label": "删除",
            "value": 0
        },
        {
            "label": "启用",
            "value": 1
        },
        {
            "label": "待审核",
            "value": 2
        }
    ],
    "systemStatus":[
        {
            "label": "开通",
            "value": 1
        },
        {
            "label": "未开通",
            "value": 2
        }
    ],
    //"activeStatus":[
    //    {
    //        "label": "已结束",
    //        "value": -1
    //    },
    //    {
    //        "label": "未启动",
    //        "value": 0
    //    },
    //    {
    //        "label": "显示启动",
    //        "value": 1
    //    },
    //    {
    //        "label": "隐式启动",
    //        "value": 2
    //    }
    //],
    "userTypes":[//1,乘客 2,司机 3,出租车司机 4,专车司机
        {
            "label": "乘客",
            "value": "1"
        },
        //{
        //    "label": "司机",
        //    "value": "2"
        //},

        //{
        //    "label": "出租车司机",
        //    "value": "3"
        //},
        //{
        //    "label": "专车司机",
        //    "value": "4"
        //}
    ],
    "activeStatus":[
        {
            "label": "已结束",
            "value": -1
        },
        {
            "label": "未启动",
            "value": 0
        },
        {
            "label": "已启动",
            "value": 1
        },
        {
            "label": "已发布",
            "value": 2
        }
    ],
    "couponType":[
        {
            "label": "固额券",
            "value": 1
        },
        {
            "label": "打折券",
            "value": 2
        }
    ],
    "effectiveness":[
        {
            "label": "有效",
            "value": 1
        },
        {
            "label": "无效",
            "value": 2
        }
    ],
    "busStatus": [
        {
            "label": "禁用",
            "value": -1
        },
        {
            "label": "启用",
            "value": 1
        }
    ],
    "cityStatus": [
        {
            "label": "禁用",
            "value": -1
        },
        {
            "label": "删除",
            "value": 0
        },
        {
            "label": "启用",
            "value": 1
        }
    ],
    "payTypes":[
        {
            "label": "余额",
            "value": 0
        },
        {
            "label": "支付宝",
            "value": 1
        },
        {
            "label": "微信",
            "value": 2
        },
        {
            "label": "银联",
            "value": 3
        }
    ],
    "lineDataType": [
        {
            "label": "跨城线路",
            "value": 1
        },
        {
            "label": "同城线路",
            "value": 2
        }
    ],
    "dateTime":[
        {
            "label": "日",
            "value": 1
        },
        {
            "label": "月",
            "value": 2
        }
    ],
    "timeDate":[
        {
            "label": "日",
            "value": 1
        },
        {
            "label": "月",
            "value": 2
        }
    ],
    "startDateTime":[
        {
            "label": "一月",
            "value": 1
        },
        {
            "label": "二月",
            "value": 2
        },
        {
            "label": "三月",
            "value": 3
        },
        {
            "label": "四月",
            "value": 4
        },
        {
            "label": "五月",
            "value": 5
        },
        {
            "label": "六月",
            "value": 6
        },
        {
            "label": "七月",
            "value": 7
        },
        {
            "label": "八月",
            "value": 8
        },
        {
            "label": "九月",
            "value": 9
        },
        {
            "label": "十月",
            "value": 10
        },
        {
            "label": "十一月",
            "value": 11
        },
        {
            "label": "十二月",
            "value": 12
        },
    ]

}
