export const GLOBAL = {
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
    // -1禁用  1启用 0删除 2拉黑
    unable: -1,
    delete: 0,
    enable: 1,
    defriend: 2
  },
  auditStatus: {
    // -1删除  1未删除 2待审核 3审核失败
    delete: -1,
    undelete: 1,
    pendingAudit: 2,
    audiFailure: 3
  },
  companyState: {
    // 1正常    -1禁用    0删除
    valid: 1,
    invalid: -1,
    delete: 0
  },
  roleState: {
    // -1禁用  1启用
    unable: -1,
    Enable: 1
  },
  activityState: {
    // -1接受  1不接受
    valid: 1,
    invalid: -1
  },
  vehicleStatus: {
    operator: 1, // 运营
    repair: 2, // 维修
    outage: 3 // 停运
  },
  orderType: {
    instantOrder: 0, //  实时订单
    reserveOrder: 1 //  预约订单
  },
  state: {
    //  -1禁用  1启用
    valid: 1,
    invalid: 0
  }
};
export const DICT = {
  dispatchState: [
    {
      label: '停用',
      value: GLOBAL.state.invalid
    },
    {
      label: '启用',
      value: GLOBAL.state.valid
    }
  ],
  diffLicense: [
    {
      label: '不允许',
      value: 0
    },
    {
      label: '允许',
      value: 1
    }
  ],
  dispatchCategory: [
    {
      label: '派单',
      value: 0
    },
    {
      label: '抢单',
      value: 1
    },
    {
      label: '混合（派单+抢单）',
      value: 2
    }
  ],
  yesNo: [
    {
      label: '否',
      value: 0
    },
    {
      label: '是',
      value: 1
    }
  ],
  expChargingRuleState: [
    {
      label: '下架',
      value: 0
    },
    {
      label: '上架',
      value: 1
    }
  ],
  languageType: [
    {
      value: 'CN',
      label: '简体中文'
    },
    {
      value: 'EN',
      label: 'English'
    },
    {
      value: 'TW',
      label: '繁體臺語'
    }
  ],
  AppUpdate: [
    {
      value: '0',
      label: '不开启'
    },
    {
      value: '1',
      label: '普通升级'
    },
    {
      value: '2',
      label: '强制升级'
    }
  ],
  status: [
    {
      label: '禁用',
      value: GLOBAL.status.unable
    },
    {
      label: '启用',
      value: GLOBAL.status.enable
    }
  ],
  state: [
    {
      label: '正常',
      value: 1
    },
    {
      label: '已停用',
      value: -1
    }
  ],
  stateSW: [
    {
      label: '正常',
      value: 1
    },
    {
      label: '终止合作',
      value: -1
    }
  ],
  lock: [
    {
      label: '正常',
      value: 1
    },
    {
      label: '已锁定',
      value: -1
    }
  ],
  allStatus: [
    {
      label: '正常',
      value: 1
    },
    {
      label: '锁定登录',
      value: 2
    },
    {
      label: '周期锁定登录',
      value: 3
    },
    {
      label: '锁定接单',
      value: 4
    }
  ],
  classes: [
    {
      label: '所有班次',
      value: 0
    },
    {
      label: '主班',
      value: 1
    },
    {
      label: '副班',
      value: 2
    }
  ],
  carStatus: [
    {
      label: '上班(空闲)',
      value: 0
    },
    {
      label: '接单中',
      value: 1
    },
    {
      label: '下班',
      value: -1
    }
  ],
  partnerTag: [
    {
      label: '普通车主',
      value: 1
    },
    {
      label: '共享合伙人',
      value: 2
    },
    {
      label: '高级合伙人',
      value: 3
    }
  ],

  reviewStatus: [
    {
      label: '草稿',
      value: 0
    },
    {
      label: '等待审核',
      value: 1
    },
    {
      label: '正在审核',
      value: 2
    },
    {
      label: '内审驳回',
      value: 3
    },
    {
      label: '平台驳回',
      value: 4
    },
    {
      label: '等待执行',
      value: 5
    },
    {
      label: '等待执行',
      value: 6
    },
    {
      label: '执行成功',
      value: 7
    }
  ],
  operateStatus: [
    {
      label: '运营中',
      value: 1
    },
    {
      label: '已结束',
      value: 2
    },
    {
      label: 'A模块为空',
      value: 3
    }
  ],
  groupType: [
    // 组员类型
    {
      label: '账号',
      value: 0
    }
    // {
    //   'label': '角色',
    //   'value': 1
    // }
  ],
  groupSource: [
    // 组员来源  0万顺总部、10大区、20分公司、30服务中心、40服务站、50出租车公司
    {
      label: '运营管理平台',
      value: '0'
    },
    {
      label: '分公司',
      value: '20'
    },
    {
      label: '服务中心',
      value: '30'
    },
    {
      label: '服务站',
      value: '40'
    },
    {
      label: '出租车公司',
      value: '50'
    }
  ],
  optionType: [
    // 工作流 1:短信,2:微信,3:移动审批,4:转他人处理
    {
      label: '短信',
      value: '1'
    },
    {
      label: '微信',
      value: '2'
    },
    {
      label: '移动审批',
      value: '3'
    },
    {
      label: '其他人处理',
      value: '4'
    }
  ],
  company: [
    // 组员来源 10大区、20分公司、30服务中心、40服务站、50出租车公司
    {
      label: '分公司',
      value: '20'
    },
    {
      label: '服务中心',
      value: '30'
    },
    {
      label: '服务站',
      value: '40'
    },
    {
      label: '出租车公司',
      value: '50'
    }
  ],
  groupClass: [
    // 组员分类
    {
      label: '审核组',
      value: 1
    }
  ],
  groupState: [
    {
      label: '正常',
      value: 1
    },
    {
      label: '已停用',
      value: 0
    }
  ],
  accountState: [
    {
      label: '正常',
      value: 1
    },
    {
      label: '已停用',
      value: -1
    }
  ],
  appType: [
    { value: 1, label: '乘客端' },
    { value: 2, label: '司机端' }
  ],
  sysType: [
    { value: 1, label: 'IOS' },
    { value: 2, label: 'Android' }
  ],
  sysFormType: [
    {
      value: 1,
      label: 'Android'
    },
    {
      value: 2,
      label: 'ios'
    },
    {
      value: 3,
      label: '微信'
    },
    {
      value: 4,
      label: 'H5'
    }
  ],
  processType: [
    // 我的代办， 参与流程记录
    {
      label: '服务站审核',
      value: 1
    },
    {
      label: '服务中心审核',
      value: 2
    },
    {
      label: '分公司审核',
      value: 3
    },
    {
      label: '出租车公司审核',
      value: 4
    },
    {
      label: '快车审核',
      value: 5
    }
  ],
  processStatus: [
    // 我的代办， 参与流程记录  审核状态
    {
      label: '待审核',
      value: 1
    },
    {
      label: '审核中',
      value: 2
    },
    {
      label: '审核通过',
      value: 3
    },
    {
      label: '审核不通过',
      value: 4
    }
  ],
  category: [
    {
      label: '出租车',
      value: '1'
    },
    {
      label: '分公司',
      value: '2'
    },
    {
      label: '出租车分公司',
      value: '3'
    }
  ],
  processIdLabel: [
    // 工作流列表
    {
      label: '服务站申请',
      value: 1
    },
    {
      label: '服务中心申请',
      value: 2
    },
    {
      label: '分公司申请',
      value: 3
    },
    {
      label: '出租车公司申请',
      value: 4
    },
    {
      label: '快车申请',
      value: 5
    }
  ],
  btnStatus: [
    // 1 审核通过  2 审核不通过 3 驳回上一节点 4 驳回到申请人
    {
      label: '审核通过',
      value: 1
    },
    {
      label: '审核不通过',
      value: 2
    },
    {
      label: '驳回上一节点',
      value: 3
    },
    {
      label: '驳回到申请人',
      value: 4
    }
  ],
  actType: [
    {
      label: '节目',
      value: 'jmhd'
    },
    {
      label: '游戏',
      value: 'yx'
    },
    {
      label: '红包',
      value: 'hb'
    }
  ],
  businessType: [
    {
      label: '快车',
      value: 1
    },
    {
      label: '专车',
      value: 2
    },
    {
      label: '出租车',
      value: 3
    }
  ],
  promiseType: [
    {
      label: '不允许',
      value: 0
    },
    {
      label: '允许',
      value: 1
    }
  ],
  trafficPromiseType: [
    {
      label: '不限行',
      value: 0
    },
    {
      label: '限行',
      value: 1
    }
  ],
  actSubType: [
    // 所有
    {
      label: '投票',
      value: 'jmhd_tp'
    },
    {
      label: '竞猜',
      value: 'jmhd_jc'
    },
    {
      label: '闯关答题',
      value: 'jmhd_cgdt'
    },
    {
      label: '展示',
      value: 'jmhd_zs'
    },
    {
      label: '抽奖红包',
      value: 'yx_cjhb'
    },
    {
      label: '签到活动',
      value: 'yx_jdqd'
    }
  ],
  actSubType_jmhd: [
    // 节目
    {
      label: '投票',
      value: 'jmhd_tp',
      img: 'assets/images/activity/jmhd_tp.png',
      content: '让观众表达自己喜欢的角色或节目'
    },
    {
      label: '竞猜',
      value: 'jmhd_jc',
      img: 'assets/images/activity/jmhd_jc.png',
      content: '让观众预测比赛结果或剧情发展'
    },
    {
      label: '闯关答题',
      value: 'jmhd_cgdt',
      img: 'assets/images/activity/jmhd_cgdt.png',
      content: '设置几个小问题，激发观众的洪荒之力'
    },
    {
      label: '展示',
      value: 'jmhd_zs',
      img: 'assets/images/activity/jmhd_zs.png',
      content: '适用于节目推荐订阅'
    }
  ],
  advUseType: [
    {
      label: '消息冠名广告',
      value: '1'
    },
    {
      label: '角标冠名广告',
      value: '2'
    },
    {
      label: '广告',
      value: '3'
    }
  ],
  showType: [
    {
      label: '走马灯',
      value: '1'
    },
    {
      label: '自动弹出',
      value: '2'
    }
  ],
  activityServiceType: [
    {
      label: '关闭',
      value: 'close'
    },
    {
      label: '外链',
      value: 'link'
    },
    {
      label: '二维码',
      value: 'qr'
    },
    {
      label: '频道跳转',
      value: 'channel'
    },
    {
      label: '关联',
      value: 'activity'
    }
  ],
  actSubType_yx: [
    // 游戏
    {
      label: '抽奖红包',
      value: 'yx_cjhb'
    },
    {
      label: '签到活动',
      value: 'yx_jdqd'
    }
  ],
  activityState: [
    {
      label: '接受',
      value: GLOBAL.activityState.valid
    },
    {
      label: '不接受',
      value: GLOBAL.activityState.invalid
    }
  ],
  eventDate: [
    {
      label: '未开始 ',
      value: 2
    },
    {
      label: '已过期',
      value: 0
    },
    {
      label: '有效',
      value: 1
    }
  ],
  useStatus: [
    {
      label: '未使用',
      value: 0
    },
    {
      label: '使用',
      value: 1
    }
  ],
  sex: [
    {
      label: '男',
      value: 1
    },
    {
      label: '女',
      value: 2
    }
  ],

  dateTime: [
    {
      label: '日',
      value: 1
    },
    {
      label: '月',
      value: 2
    }
  ],
  startDateTime: [
    {
      label: '一月',
      value: 1
    },
    {
      label: '二月',
      value: 2
    },
    {
      label: '三月',
      value: 3
    },
    {
      label: '四月',
      value: 4
    },
    {
      label: '五月',
      value: 5
    },
    {
      label: '六月',
      value: 6
    },
    {
      label: '七月',
      value: 7
    },
    {
      label: '八月',
      value: 8
    },
    {
      label: '九月',
      value: 9
    },
    {
      label: '十月',
      value: 10
    },
    {
      label: '十一月',
      value: 11
    },
    {
      label: '十二月',
      value: 12
    }
  ]
};
