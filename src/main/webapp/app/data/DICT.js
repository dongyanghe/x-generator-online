"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GLOBAL = {
    /**
     * 自定义事件
     */
    events: {
        push: 'push:page',
        user: {
            accessServer: {
                error: 'user:accessServer:error',
                success: 'user:accessServer:success'
            },
            login: {
                error: 'user:login:error',
                success: 'user:login:success'
            },
            logout: {
                error: 'user:logout:error',
                success: 'user:logout:success'
            }
        }
    },
    status: {
        unable: -1,
        delete: 0,
        enable: 1,
        defriend: 2
    },
    auditStatus: {
        delete: -1,
        undelete: 1,
        pendingAudit: 2,
        audiFailure: 3
    },
    companyState: {
        valid: 1,
        invalid: -1,
        delete: 0
    },
    roleState: {
        unable: -1,
        Enable: 1
    },
    activityState: {
        valid: 1,
        invalid: -1
    },
    vehicleStatus: {
        operator: 1,
        repair: 2,
        outage: 3,
    },
    orderType: {
        instantOrder: 0,
        reserveOrder: 1 //  预约订单
    },
    carState: {
        valid: 1,
        invalid: -1
    }
};
exports.DICT = {
    'yesNo': [
        {
            'label': '否',
            'value': 0
        },
        {
            'label': '是',
            'value': 1
        }
    ],
    'languageType': [
        {
            'value': 'CN',
            'label': '简体中文'
        },
        {
            'value': 'EN',
            'label': 'English'
        },
        {
            'value': 'TW',
            'label': '繁體臺語'
        }
    ],
    'status': [
        {
            'label': '禁用',
            'value': exports.GLOBAL.status.unable
        },
        {
            'label': '启用',
            'value': exports.GLOBAL.status.enable
        }
    ],
    'stateSW': [
        {
            'label': '正常',
            'value': 1
        },
        {
            'label': '已停用',
            'value': -1
        }
    ],
    'reviewStatus': [
        {
            'label': '草稿',
            'value': 0
        },
        {
            'label': '等待审核',
            'value': 1
        },
        {
            'label': '正在审核',
            'value': 2
        },
        {
            'label': '内审驳回',
            'value': 3
        },
        {
            'label': '平台驳回',
            'value': 4
        },
        {
            'label': '等待执行',
            'value': 5
        },
        {
            'label': '等待执行',
            'value': 6
        },
        {
            'label': '执行成功',
            'value': 7
        }
    ],
    'operateStatus': [
        {
            'label': '运营中',
            'value': 1
        },
        {
            'label': '已结束',
            'value': 2
        },
        {
            'label': 'A模块为空',
            'value': 3
        }
    ],
    'groupType': [
        {
            'label': '角色',
            'value': 1
        },
        {
            'label': '账号',
            'value': 2
        }
    ],
    'groupOrigin': [
        {
            'label': '运营管理平台',
            'value': 1
        },
        {
            'label': '分公司',
            'value': 2
        },
        {
            'label': '服务中心',
            'value': 3
        },
        {
            'label': '服务站',
            'value': 4
        },
        {
            'label': '出租车公司',
            'value': 5
        },
    ],
    'actType': [
        {
            'label': '节目',
            'value': 'jmhd'
        },
        {
            'label': '游戏',
            'value': 'yx'
        },
        {
            'label': '红包',
            'value': 'hb'
        }
    ],
    'businessType': [
        {
            'label': '快车',
            'value': 1
        },
        {
            'label': '专车',
            'value': 2
        },
        {
            'label': '出租车',
            'value': 3
        },
    ],
    'promiseType': [
        {
            'label': '不允许',
            'value': 0
        },
        {
            'label': '允许',
            'value': 1
        }
    ],
    'actSubType': [
        {
            'label': '投票',
            'value': 'jmhd_tp'
        },
        {
            'label': '竞猜',
            'value': 'jmhd_jc'
        },
        {
            'label': '闯关答题',
            'value': 'jmhd_cgdt'
        },
        {
            'label': '展示',
            'value': 'jmhd_zs'
        },
        {
            'label': '抽奖红包',
            'value': 'yx_cjhb'
        },
        {
            'label': '签到活动',
            'value': 'yx_jdqd'
        }
    ],
    'actSubType_jmhd': [
        {
            'label': '投票',
            'value': 'jmhd_tp',
            img: 'assets/images/activity/jmhd_tp.png',
            content: '让观众表达自己喜欢的角色或节目'
        },
        {
            'label': '竞猜',
            'value': 'jmhd_jc',
            img: 'assets/images/activity/jmhd_jc.png',
            content: '让观众预测比赛结果或剧情发展'
        },
        {
            'label': '闯关答题',
            'value': 'jmhd_cgdt',
            img: 'assets/images/activity/jmhd_cgdt.png',
            content: '设置几个小问题，激发观众的洪荒之力'
        },
        {
            'label': '展示',
            'value': 'jmhd_zs',
            img: 'assets/images/activity/jmhd_zs.png',
            content: '适用于节目推荐订阅'
        }
    ],
    advUseType: [
        {
            'label': '消息冠名广告',
            'value': '1',
        },
        {
            'label': '角标冠名广告',
            'value': '2',
        },
        {
            'label': '广告',
            'value': '3',
        }
    ],
    showType: [
        {
            'label': '走马灯',
            'value': '1',
        },
        {
            'label': '自动弹出',
            'value': '2',
        }
    ],
    activityServiceType: [
        {
            'label': '关闭',
            'value': 'close',
        },
        {
            'label': '外链',
            'value': 'link',
        },
        {
            'label': '二维码',
            'value': 'qr',
        },
        {
            'label': '频道跳转',
            'value': 'channel',
        },
        {
            'label': '关联',
            'value': 'activity',
        },
    ],
    'actSubType_yx': [
        {
            'label': '抽奖红包',
            'value': 'yx_cjhb'
        },
        {
            'label': '签到活动',
            'value': 'yx_jdqd'
        }
    ],
    'state': [
        {
            'label': '正常',
            'value': 1
        }
    ],
    'activityState': [
        {
            'label': '接受',
            'value': exports.GLOBAL.activityState.valid
        },
        {
            'label': '不接受',
            'value': exports.GLOBAL.activityState.invalid
        }
    ],
    eventDate: [
        {
            'label': '未开始 ',
            'value': 2
        },
        {
            'label': '已过期',
            'value': 0
        },
        {
            'label': '有效',
            'value': 1
        },
    ],
    'useStatus': [
        {
            'label': '未使用',
            'value': 0
        },
        {
            'label': '使用',
            'value': 1
        }
    ],
    'sex': [
        {
            'label': '男',
            'value': 1
        },
        {
            'label': '女',
            'value': 2
        }
    ],
    'dateTime': [
        {
            'label': '日',
            'value': 1
        },
        {
            'label': '月',
            'value': 2
        }
    ],
    'startDateTime': [
        {
            'label': '一月',
            'value': 1
        },
        {
            'label': '二月',
            'value': 2
        },
        {
            'label': '三月',
            'value': 3
        },
        {
            'label': '四月',
            'value': 4
        },
        {
            'label': '五月',
            'value': 5
        },
        {
            'label': '六月',
            'value': 6
        },
        {
            'label': '七月',
            'value': 7
        },
        {
            'label': '八月',
            'value': 8
        },
        {
            'label': '九月',
            'value': 9
        },
        {
            'label': '十月',
            'value': 10
        },
        {
            'label': '十一月',
            'value': 11
        },
        {
            'label': '十二月',
            'value': 12
        },
    ]
};
