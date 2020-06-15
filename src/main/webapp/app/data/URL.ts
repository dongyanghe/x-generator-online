import { MyworkspaceModule } from '../app/myworkspace/myworkspace.module';
export const URL = {
  //  本地开发的路径配置
  deBug: {
    requestUrl: 'http://127.0.0.1:9400/'
  },
  serviceDev: {
    requestUrl: 'http://manager-dev.wsecar.com:9400/' //  http://manager-test.wsecar.com:9400/  https://manager-test.wsecar.com:9401/
  },
  serviceTest: {
    requestUrl: 'https://manager-test.wsecar.com:9401/' //  http://manager-test.wsecar.com:9400/  https://manager-test.wsecar.com:9401/
  },
  deBugCWK: {
    requestUrl: 'http://172.16.1.96:9400/systemManager/'
  },
  deBugSZ: {
    requestUrl: 'http://192.168.1.100:9400/systemManager/'
  },
  deBugZZQ: {
    requestUrl: 'http://172.16.2.101:9400/systemManager/'
  },
  deBugFQK: {
    requestUrl: 'http://172.16.2.107:9400/systemManager/'
  },
  deBugLCX: {
    requestUrl: 'http://172.16.1.12:9400/'
  },
  deBugLT: {
    requestUrl: 'http://172.16.2.89:9400/systemManager/'
  },
  //  本地开发的模拟路径配置
  mock: {
    requestUrl: '/'
  },
  //  服务器环境的路径配置
  service: {
    requestUrl: '/systemManager/'
  },
  //  请求路径通用尾椎
  suffix: {
    logout: 'logout',
    select: 'select',
    update: 'update',
    save: 'save',
    delete: 'delete',
    detail: 'detail',
    map: 'map',
    addImg: 'addImg',
    selectImg: 'selectImg',
    updatePassword: 'updatePassword' //  修改密码
  },
  //  所有图片地址
  imgUrl: {
    delete: 'assets/images/sys/deleteImg.png',
    undefined: 'angular1Common/assets/images/undefined.png',
    add: 'angular1Common/assets/images/add.png',
    defMes: 'assets/images/sys/defMsgImg.png',
    message: 'assets/images/activity/message.png'
  },
  //  路由名称
  stateProvider: {
    index: {
      name: 'workspace',
      url: 'workspace'
    },
    main: {
      name: 'workspace',
      url: '/workspace'
    },
    login: {
      name: 'login',
      url: '/login'
    }
  },
  //  所有模块的请求路径
  commonUrl: {
    unLogin: {
      //   无需登录请求
      login: '/login'
    },
    associaSearch: {},
    user: {
      login: 'api/public/oauth.login',
      captcha: 'api/public/oauth.captcha?rnd=',
      fetch: 'user/getPersonal',
      update: 'user/updatePersonal',
      menu: 'api/oauth.user.menu',
      updatePassword: 'user/updatePersonalPassword' //  修改密码
    },
    demo: {
      select: 'test-list', //  'demo/a/select',
      detail: 'detail', //  'demo/a/select',  //  获取表单详情一般共用select，只是op不一样
      save: 'save', //  'demo/a/save',
      update: 'update', //  'demo/a/update',
      delete: 'delete' //  'demo/a/delete',
    },
    taxiCompany: {
      select: 'test-list',
      detail: 'detail', //  'demo/a/select',  //  获取表单详情一般共用select，只是op不一样
      save: 'save', //  'demo/a/save',
      update: 'update', //  'demo/a/update',
      delete: 'delete' //  'demo/a/delete',
    },
    message: {
      fetch: 'message/get', //  消息详情
      review: 'message/reviewSendMessageToBox'
    },
    channel: {
      list: 'channel/list'
    },
    myworkspace: {
      myagent: {
        select: 'myWorkSpace/myToDo/select',
        workFlowDetail: 'workFlow/instance/findWorkFlowInfo'
      },
      myprocess: {}
    },
    column: {
      list: 'cms/programGuideList/byBaseCodes'
    },
    activity: {
      list: 'activity/v2/management/list',
      delete: 'activity/v2/batchDeleteAct',
      batchDelete: 'activity/v2/batchDeleteAct', //  批量删除请求路径
      add: 'activity/v2/saveOrUpdateActAllInfo', //  保存表单
      fetch: 'activity/v2/getActInfoById',
      //  新增请求路径
      update: 'activity/v2/saveOrUpdateActAllInfo',
      actRetServiceDelete: '',
      publishList: 'activity/v2/findSubjectOptionByActId', //   答案列表
      activitySettle: 'activity/v2/activitySettle', //  公布答案
      setSubOptionRight: 'activity/v2/setSubOptionRight' //  保存答案
    },
    system: {
      menuManageTreeList: 'system/sysMenu/select', //  查询树形结构
      update: 'system/sysMenu/update', //  修改菜单
      save: 'system/sysMenu/save', //  新增菜单
      delete: 'system/sysMenu/delete', //  删除菜单
      dataRole: {
        selectTable: 'system/dataRole/select',
        selectCityTree: 'local/selectCityTree',
        selectMechanismTree: 'system/orgTree/select',
        selectCitySelected: 'system/dataRole/select',
        authorizeUrl: 'system/dataRole/save',
        update: 'system/dataRole/update',
        save: 'system/dataRole/save',
        delete: 'system/dataRole/delete'
      },
      funcRole: {
        select: 'system/role/select',
        update: 'system/role/update',
        delete: 'system/role/delete',
        save: 'system/role/save',
        selectSelected: 'system/role/select'
      },
      operateAccount: {
        select: 'system/user/sysUser/select',
        save: 'system/user/sysUser/save',
        update: 'system/user/sysUser/update'
      },
      bigArea: {
        save: 'org/regionInfo/save',
        update: 'org/regionInfo/update',
        delete: 'org/regionInfo/delete'
      },
      parnter: {
        orgPermission: {
          select: 'system/orgPermission/select',
          authorize: 'system/orgPermission/save'
        },
        menu: {
          select: 'system/sysPartnerMenu/select',
          delete: 'system/sysPartnerMenu/delete',
          save: 'system/sysPartnerMenu/save',
          update: 'system/sysPartnerMenu/update'
        },
        partneraccount: {
          // 合伙人系统账号
          select: 'system/companyUser/select',
          save: 'system/companyUser/save',
          update: 'system/companyUser/update',
          delete: 'system/companyUser/delete'
        },
        citybase: {
          // 城市基础配置
          select: 'system/cityService/select',
          update: 'system/cityService/update'
        }
      },
      organizationSub: {
        //  机构字段维护
        select: 'system/attachment/select',
        save: 'system/attachment/save',
        delete: 'system/attachment/delete'
      },
      accountgroup: {
        // 账号组
        select: 'system/acctGroup/select',
        save: 'system/acctGroup/save',
        update: 'system/acctGroup/update',
        delete: 'system/acctGroup/delete'
      },
      partneraccount: {
        // 合伙人系统账号
        select: 'system/companyUser/select',
        save: 'system/companyUser/save',
        update: 'system/companyUser/update',
        delete: 'system/companyUser/delete'
      },
      workFlow: {
        // 工作流
        select: 'workFlow/processTask/select'
      }
    }
  },
  permissionUrl: {
    common: {
      //  基础请求
      heartbeat: 'heartbeat', // 登录状态校验
      login: 'login', // 二次登录校验
      menu: 'menu', // 获取菜单,
      updatePassword: 'updatePassword', // 修改密码
      address: 'local/localTree', //  对应权限的全国地址信息
      selectPossessCityTree: 'local/selectPossessCityTree', //  对应权限和派单配置的全国地址信息
      selectBusinessCityTree: 'local/selectBusinessCityTree', //  对应权限的全国地址信息
      cityName: 'local/selectPossessCityTree', // 业务城市选择
      attchmentList: 'system/attachment/select', // 运营管理分公司附件列表
      upload: 'system/file/upload', // 运营管理分公司附件列表
      menuTree: 'system/sysMenu/select',
      validateCode: 'getValidateCode', //  获取验证码
      SysRoleSelectOption: 'system/user/sysUser/select', // 账号管理，功能角色
      SysDataRoleSelectOption: 'system/user/sysUser/select', // 账号管理，数据角色
      CompanyRoleSelectOption: 'system/companyUser/select', // 合伙人系统获取角色
      selectAllGroup: 'system/acctGroup/select', // 工作流获取所有账号组
      parentOption: 'resource/sysCompany/select', // 分公司上级机构下拉选项
      CompanyOption: 'resource/companyServiceCenter/select', // 服务中心 分公司名称下拉选项
      selectCompanyOption: 'resource/companyServiceStation/select', // 服务站管理 服务中心下拉选项
      // serviceCenterStatusUpdate: 'resource/companyServiceCenter/update', // 服务中心状态更新
      taxiOption: 'resource/sysCompany/select', // 出租车上级机构下拉选项
      selectOrgOption: 'local/selectOrgOption'
    },

    option: {
      //  下拉搜索
      cityService: 'system/service/systemService/select',
      systemCategory: 'system/category/save',
      system: 'system/category/update',
      common: 'comment/city/select',
      couponType: 'coupon/select',
      active: 'active/select',
      order: 'report/order/select',
      drawcash: 'report/drawcash/select',
      income: 'report/income/select'
    },
    associaSearch: {
      //  联想搜索
      station: '',
      carBrand: 'system/serve/specialCarBrand/select',
      carType: 'system/serve/specialCarBrand/select',
      companyName: 'resource/sysCompany/select'
    },
    exceed: {
      //  活动页其他请求
      activeRuleSelect: 'active/rule/select',
      activeRuleSave: 'active/rule/save',
      activeRuleUpdate: 'active/rule/update'
    }
  },
  op: {
    select: 'select',
    count: 'selectCount', // 列表总条数
    update: 'update',
    save: 'save',
    delete: 'delete',
    detail: 'detail',
    selectCompanyCenterAll: 'selectCompanyCenterAll', // 服务站管理 服务中心下拉选项
    regionAll: 'selectOrgionInfo', // 分公司管理， 上级机构
    selectCompanyAll: 'selectCompanyAll', // 服务中心 分公司名称下拉选择
    selectOrgCompanyTaxi: 'selectOrgCompanyTaxi', // 出租车公司管理 上级机构下拉选择
    //  by zyh
    SysRoleSelectOption: 'SysRoleSelectOption', // 账号管理，功能角色
    SysDataRoleSelectOption: 'SysDataRoleSelectOption', // 账号管理，数据角色
    SysUserUpdate: 'SysUserUpdate', // 账号管理，账号更新
    AllRoleSelectOption: 'rolesSelect',
    SysUserSelectDetail: 'SysUserSelectDetail', // 账号管理，账号详情
    CompanyDataRoleSelectTree: 'CompanyDataRoleSelectTree', // 合伙人系统下拉机构数据
    CompanyRoleSelectOption: 'CompanyRoleSelectOption', // 合伙人系统下拉角色数据
    selectProvince: 'selectProvince', // 城市基础配置 查询省份
    selectCity: 'selectCity', // 城市基础配置 查询市级

    ReportSelectBusinessByDay: 'ReportSelectBusinessByDay', // 车辆日报表统计
    ReportSelectBusinessByMonth: 'ReportSelectBusinessByMonth', // 车辆月报表
    // ReportSelectBusinessByDay: 'ReportSelectBusinessByDay',  // 业务日查询
    // ReportSelectBusinessByMonth: 'ReportSelectBusinessByMonth',  // 业务月查询
    ReportSelectCompanyByDay: 'ReportSelectCompanyByDay', // 公司日报表
    ReportSelectCompanyByMonth: 'ReportSelectCompanyByMonth', // 公司月报表
    // ReportSelectBusinessByDay: 'ReportSelectBusinessByDay',  // 业务收入日报表
    // ReportSelectBusinessByMonth: 'ReportSelectBusinessByMonth', // 业务收入月报表
    couponSelect: 'couponSelect',
    activeCouponRuleDetail: 'activeCouponRuleDetail', // 活动优惠券规则详情
    activeCouponRuleSave: 'activeCouponRuleSave', // 活动优惠券规则添加
    activeCouponRuleUpdate: 'activeCouponRuleUpdate', // 活动优惠券规则更新
    activeCouponRuleDelete: 'activeCouponRuleDelete', // 活动优惠券规则删除
    activeAwardRuleDelete: 'activeAwardRuleDelete', // 活动奖励规则删除
    activeAwardRuleDetail: 'activeAwardRuleDetail', // 活动奖励规则详情
    activeAwardTypeSelect: 'activeAwardTypeSelect', // 活动类型列表
    couponTypeSelect: 'couponTypeSelect', // 优惠券类型列表
    activeSave: 'activeSave', // 活动基本信息添加
    activeUpdate: 'activeUpdate', // 活动基本信息修改
    activeAwardRuleSave: 'activeAwardRuleSave', // 活动奖励规则添加
    activeAwardRuleUpdate: 'activeAwardRuleUpdate', // 活动奖励规则修改
    busSelectCitywide: 'BusSelectCitywide', // 同城规则op
    busSelectTransRegional: 'BusSelectTransRegional', // 跨城规则op
    busLineScheduleSelectDetail: 'BusLineScheduleSelectDetail', // 获取调度信息闲情
    selectRoleOption: 'SysRoleSelectOption', // 获取角色下拉
    SysCompanySelectDetail: 'SysCompanySelectDetail', // 公司详情
    selectCompanyOption: 'companyOption', // 获取公司名下拉
    SysCompanySelect: 'SysCompanySelect', // 公司名模糊查询
    sysCompanySelectList: 'SysCompanySelectList', // 公司名模糊查询
    SysRoleSelectTree: 'SysRoleSelectTree', // 系统权限菜单树
    CompanyUserSelect: 'CompanyUserSelect', // 商户系统 用户列表查询
    SysUserSelect: 'SysUserSelect', // 运营系统 用户列表查询
    SysAppUserSelectDetail: 'SysAppUserSelectDetail', // 运营系统 乘客详情查询
    SysVersionsSelectDetail: 'SysVersionsSelectDetail', // 系统管理  APP版本列表详情
    taxiDriver: 'SysTaxiDriverSelectDetail', // 出租车司机详情
    specialDriver: 'SysSpecialcarDriverSelectDetail', // 专车司机详情
    taxiDriverAudit: 'TaxiDriverAuditSelectDetail', // 出租车司机审核详情
    specialDriverAudit: 'SpecialcarDriverAuditSelectDetail', // 专车司机审核详情
    SysBrandSelectDetail: 'SysBrandSelectDetail', // 系统管理 车辆品牌详情
    carBrand: 'SysBrandSelectByName', // 品牌联想搜索
    carType: 'SysBrandSelectByType', // 品牌型号联想搜索
    taxiCarDetail: 'SysTaxiCarSelectDetail',
    specialCarDetail: 'SysSpecialcarSelectDetail',
    inspectCompanyUserLoginName: 'inspectLoginName', // 用户名是否存在
    companyTreeSelect: 'companyTreeSelect', // 公司树
    sysUserSelectDetail: 'SysUserSelectDetail', // 运营系统   运营用户详情查询
    sysUserUpdate: 'SysUserUpdate', // 运营系统   运营用户修改
    passengerOrderHistory: 'passengerOrderHistory', // 乘客管理   追踪订单列表
    sysCompanyAuditSelectDetail: 'SysCompanyAuditSelectDetail', // 公司审核详情
    SelectSysServiceDetail: 'SelectSysServiceDetail', // 城市服务详情
    selectAllBusPosition: '',
    taxiCatgoryDelete: 'taxiCatgoryDelete', // 城市服务出租车类型删除
    specialCarCatgoryDelete: 'specialCarCatgoryDelete', // 城市服务专车类型删除
    sysMenuUpdate: 'SysMenuUpdate', // 运营系统菜单修改
    companyMenuUpdate: 'CompanyMenuUpdate', // 出租车商户系统菜单修改
    busCompanyMenuUpdate: 'BusCompanyMenuUpdate', // 巴士商户系统菜单修改
    sysMenuSortUpdate: 'SysMenuSortUpdate', // 运营系统菜单排序
    companyMenuSortUpdate: 'CompanyMenuSortUpdate', // 出租车商户系统菜单排序
    busCompanyMenuSortUpdate: 'BusCompanyMenuSortUpdate', // 巴士商户系统菜单排序
    BusPaidOrderSelectDetail: 'BusPaidOrderSelectDetail', // 巴士已支付订单详情
    BusRefundOrderSelectDetail: 'BusRefundOrderSelectDetail', // 巴士退款订单详情
    busSpecialTicketConfigSelectDetail: 'BusSpecialTicketConfigSelectDetail', // 巴士特价票详情
    positionSelect: 'positionSelect', // 车辆位置
    trajectorySelect: 'trajectorySelect', // 车辆轨迹
    instantSelect: 'instantSelect', // 实时订单
    instantSelectCount: 'instantSelectCount', // 实时订单总条数
    instantDetail: 'instantDetail', // 实时订单详情
    reserveSelect: 'reserveSelect', // 预约订单
    reserveSelectCount: 'reserveSelectCount', // 预约订单总条数
    reserveDetail: 'reserveDetail', // 预约订单详情
    userPassWordUpdate: 'UserPassWordUpdate', //
    companyAudit: {
      selectImg: {
        selectImgLetterOfCommitment: 'selectImgLetterOfCommitment', //   承诺书
        selectImgApplicationFormForProtection: 'selectImgApplicationFormForProtection' //   保护申请表
      },
      addImg: {
        addImgLetterOfCommitment: 'addImgLetterOfCommitment', //   承诺书
        addImgApplicationFormForProtection: 'addImgApplicationFormForProtection' //   保护申请表
      }
    },
    addServiceCityImg: {
      addSpecialCarCategoryMap: 'addSpecialCarCategoryMap', // 专车车型地图图标
      addSpecialCarCategoryIcon: 'addSpecialCarCategoryIcon', // 专车车型列表图标
      addTaxiCategoryMap: 'addTaxiCategoryMap', // 出租车车型地图图标
      addTaxiCategoryIcon: 'addTaxiCategoryIcon' // 出租车车型列表图标
    },
    selectServiceCityImg: {
      selectSpecialCarCategoryMap: 'selectSpecialCarCategoryMap', // 专车车型地图图标
      selectSpecialCarCategoryIcon: 'selectSpecialCarCategoryIcon', // 专车车型列表图标
      selectTaxiCategoryMap: 'selectTaxiCategoryMap', // 出租车车型地图图标
      selectTaxiCategoryIcon: 'selectTaxiCategoryIcon' // 出租车车型列表图标
    }
    // orderCount : {
    //         reserveErrorOrderCount : 'reserveErrorOrderCount', // 预约异常订单
    //         instantErrorOrderCount : 'instantErrorOrderCount', // 实时异常订单
    //         instantOrderCount : 'instantOrderCount', // 实时未完成订单
    //         reserveOrderCount : 'reserveOrderCount', // 预约未完成订单
    //         reserveHistoryOrderCount : 'reserveHistoryOrderCount', // 预约历史订单
    //         instantHistoryOrderCount  : 'instantHistoryOrderCount', // 实时历史订单
    //     }
  },
  //  模版路径
  pageUrl: {
    loginPage: '/login', // 登录页
    // 系统管理模块
    roleForm: 'module/system/role/roleForm.html', // 角色权限管理
    companyUserForm: 'module/system/user/companyUser/companyUserForm.html', // 商户用户表单页
    sysUserForm: 'module/system/user/sysUser/sysUserForm.html', // 运营用户表单页
    brandModelForm: 'module/system/brandModel/brandModelForm.html', // 品牌类型表单页
    brandModelAddForm: 'module/system/brandModel/brandModelAddForm.html', // 品牌类型表单页
    appVersionForm: 'module/system/appVersion/appVersionForm.html', // app版本管理
    //   平台运营模块
    expChargingRuleForm: 'module/operation/expChargingRule/form.html', //  服务城市计价规则
    selectChargTimeForm: 'angularCommon/modal/selectChargTime/form.html', //  服务城市计价规则时段选择
    dispatchOrderRuleForm: 'module/operation/dispatchOrderRule/form.html', //  服务城市叫单规则
    cityServiceForm: 'module/operation/cityService/form.html', //  城市服务
    // 资源管理模块
    companyForm: 'module/resource/company/companyForm.html', //   公司表单页
    specialCarForm: 'module/resource/car/specialCar/specialCarForm.html', //  专车表单页
    taxiCarForm: 'module/resource/car/taxiCar/taxiCarForm.html', //   出租车表单页
    passengerForm: 'module/resource/passenger/passengerForm.html', //     乘客管理表单页
    passengerOrderForm: 'module/resource/passenger/passengerOrderForm.html', //    乘客管理表单--》追踪订单
    taxiDriverForm: 'module/resource/driver/taxiDriver/taxiDriverForm.html', //  出租车司机表单页
    locLineForm: 'module/monitor/loc/locLine.html', //   车辆位置
    // activeBasicForm : 'module/active/activeBasic/activeBasicForm.html' ,   //  活动表单
    couponForm: 'module/coupon/coupon/couponForm.html', //   优惠券
    activeBasicFormAdd: 'module/active/activeBasic/activeBasicFormAdd.html', //    活动规则
    activeRuleAdd: 'module/active/activeBasic/activeRuleAdd.html', //    活动规则详情
    carForm: 'module/bus/basic/car/carForm.html', //  车辆数据
    driverForm: 'module/bus/basic/driver/driverForm.html', // 司机数据
    checkForm: 'module/bus/basic/check/checkForm.html', // 验票人员数据
    paidOrderForm: 'module/bus/order/paidOrder/paidOrderForm.html', // 跨城巴士已支付订单
    sameCityPaidOrderForm: 'module/bus/order/sameCityPaidOrder/sameCityPaidOrderForm.html', // 同城巴士已支付订单
    sameCityRefundOrderForm: 'module/bus/order/sameCityRefundOrder/sameCityRefundOrderForm.html', // 同城巴士退款订单
    refundOrderForm: 'module/bus/order/refundOrder/refundOrderForm.html', // 跨城巴士退款订单
    cheapTicketForm: 'module/bus/cheapTicket/cheapTicketForm.html', // 特价票详情
    cheapTicketFormAdd: 'module/bus/cheapTicket/cheapTicketFormAdd.html', // 特价票新增
    qrCode: 'module/bus/line/lineData/qrCode.html', // 二维码
    // 线路信息模块
    citySetForm: 'module/bus/line/citySet/citySetForm.html', // 城市设置
    lineDataForm: 'module/bus/line/lineData/lineDataForm.html', // 线路详情
    lineTaskForm: 'module/bus/line/lineTask/lineTaskForm.html', // 线路任务
    ruleSetForm: 'module/bus/system/ruleSet/ruleSetForm.html', // 同城规则设置
    crossCityRuleSetForm: 'module/bus/system/crossCityRuleSet/crossCityRuleSetForm.html', // 跨城规则设置
    scheduleForm: 'module/bus/schedule/scheduleForm.html', // 调度详情
    //   弹窗选择
    chooseCompanyModal: 'common/modal/company/chooseCompanyModal.html', //     分公司
    chooseServiceCenterModal: 'common/modal/serviceCenter/chooseServiceCenterModal.html', //     服务中心
    chooseTaxiCompanyModal: 'common/modal/taxiCompany/chooseTaxiCompanyModal.html', //     出租车公司
    confirmModal: 'angular1Common/service/modal/confirmModal.html', //   确认弹窗
    interheadPreview: '', //  预览
    review_info: 'module/operat/review/modal/review_info.html',
    interactionReviewModal: 'module/operat/interaction/modal/interactionReviewModal.html',
    actRetServiceForm: 'module/resource/activity/modal/actRetServiceFormModal.html',
    publishSelectModal: 'module/resource/activity/modal/publishSelectModal.html',
    imgUpdateModal: 'module/resource/activity/modal/imgUpdateModal.html',
    activitySelectModal: 'common/modal/activity/activitySelectModal.html',
    channelSelectModal: 'common/modal/channel/channelSelectModal.html'
  }
};
