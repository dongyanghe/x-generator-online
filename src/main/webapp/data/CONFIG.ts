import { URL as Url } from './URL';
export const CONFIG = {
  /*
   'deBug'：本地开发，'service'：在线服务，'serviceTest'：测试服务，'serviceDev'：测试服务，'deBugZZQ'：朱章清，'deBugSZ'：舒展 ,'deBugFQK': 启凯, 'deBugLT':刘涛
   */
  serviceType: 'deBugLT',
  projectName: 'system-manager',
  loginTime: 60 * 60 * 1000 /*//  登录信息保存时长*/,
  durationDuration: 60 /*//  验证码时长*/,
  ok: 1,
  unLogin: [-13, -18, -48, -51] /*不能登录的错误码*/,
  sessionDue: -25 /* 会话信息过期  */,
  noData: -200,
  maxHeadTab: 8,
  heartBeatTime: 0, // 1000 * 60 * 2, //  1000 * 60 * 2, /*//  心跳请求时间间隔，0为不请求*/
  uploadTime: 1000 * 60 * 1 /*//  文件上传提示的关闭延时*/,
  cgdtNumMax: 10,
  timeout: 8000 /*//  请求超时时间*/,
  nzModalConfig: {
    width: '78vw'
  },
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
    login: {
      name: 'login',
      url: '/login'
    },
    operateDashboard: {
      //   频道首页
      name: 'app.operat_index',
      url: '/operate/dashboard'
    },
    review: {
      //   审核列表
      name: 'app.operat_review',
      url: '/operate/review/demo/list'
    },
    main: {
      name: 'workspace',
      url: '/workspace'
    },
    user: {
      name: 'mainFrame.system/user/sysUser/list',
      url: 'system/user'
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
    message: {
      fetch: 'message/get', //  消息详情
      review: 'message/reviewSendMessageToBox'
    },
    channel: {
      list: 'channel/list'
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
    }
  },
  //  模版路径
  pageUrl: {
    confirmModal: 'angular1Common/service/modal/confirmModal.html', //   确认弹窗
    interheadPreview: '', //  预览
    review_info: 'module/operat/review/modal/review_info.html',
    interactionReviewModal: 'module/operat/interaction/modal/interactionReviewModal.html',
    actRetServiceForm: 'module/resource/activity/modal/actRetServiceFormModal.html',
    publishSelectModal: 'module/resource/activity/modal/publishSelectModal.html',
    imgUpdateModal: 'module/resource/activity/modal/imgUpdateModal.html',
    activitySelectModal: 'common/modal/activity/activitySelectModal.html',
    channelSelectModal: 'common/modal/channel/channelSelectModal.html'
  },
  unLoading: [
    Url.permissionUrl.common.menu, // 获取菜单,
    Url.permissionUrl.common.updatePassword, // 修改密码
    Url.permissionUrl.common.address, //  对应权限的全国地址信息
    Url.permissionUrl.common.selectPossessCityTree, //  对应权限和派单配置的全国地址信息
    Url.permissionUrl.common.selectBusinessCityTree, //  对应权限的全国地址信息
    Url.permissionUrl.common.cityName, // 业务城市选择
    Url.permissionUrl.common.attchmentList, // 运营管理分公司附件列表
    Url.permissionUrl.common.upload, // 运营管理分公司附件列表
    Url.permissionUrl.common.menuTree,
    Url.permissionUrl.common.validateCode, //  获取验证码
    Url.permissionUrl.common.SysRoleSelectOption, // 账号管理，功能角色
    Url.permissionUrl.common.SysDataRoleSelectOption, // 账号管理，数据角色
    Url.permissionUrl.common.CompanyRoleSelectOption, // 合伙人系统获取角色
    Url.permissionUrl.common.selectAllGroup, // 工作流获取所有账号组
    Url.permissionUrl.common.parentOption, // 分公司上级机构下拉选项
    Url.permissionUrl.common.CompanyOption, // 服务中心 分公司名称下拉选项
    Url.permissionUrl.common.selectCompanyOption, // 服务站管理 服务中心下拉选项
    // Url.permissionUrl.common.serviceCenterStatusUpdate, // 服务中心状态更新
    Url.permissionUrl.common.taxiOption, // 出租车上级机构下拉选项
    Url.permissionUrl.common.selectOrgOption
  ],
  defaultGridOptions: {
    multiSelect: false,
    enableCellSelection: false,
    /*//  如果这个值为true，表格里自定义cellTemplate里面最外层div里面不能有ng-if属性？？？否则报错‘indexOf’*/
    enableFullRowSelection: false,
    enableRowSelection: false,
    enableCellEdit: false,
    enablePinning: false,
    enableColumnResize: true,
    showColumnMenu: true,
    showFilter: false,
    enablePaging: true,
    enableFiltering: false,
    enableSorting: false,
    showFooter: true,
    paginationPageSizes: [
      //  每页条数选项
      10,
      30,
      80
    ],
    totalItems: 0, //  总条数，为0时智能下一页，无法跳页
    paginationPageSize: 10, //  当前每页条数
    paginationCurrentPage: 1, //  当前页码
    useExternalPagination: true, //  是否使用自定义分页，默认否
    useExternalSorting: true, //  是否使用自定义排序，默认否
    enablePaginationControls: true, //  翻页是否显示，默认是
    filterOptions: {
      filterText: '',
      useExternalFilter: false
    }
  },
  listComponentOptions: {
    url: {
      list: '',
      update: '',
      delete: '',
      batchDelete: ''
    },
    //   初始化页面时查询
    queryAfterInit: true,
    //   服务端分页
    serverPage: true,
    modelName: '',
    //   有需要行选中功能时，这个参数必填
    formDataIdKey: 'id',
    formDataNameKey: 'name',
    //   排序
    orderParams: [],
    //   查询条件
    filterParam: {},
    originFilterParam: {}, //   原查询条件
    nowFilterParam: {}, //   当前查询条件
    gridData: [], //   表格数据
    sumData: {}, //   返回数据总数
    totalServerItems: 0, //   数据库总条数
    gridOptions: {}
  },
  listControllerOptions: {
    scope: null,
    url: {
      //  删除请求路径
      list: '',
      //  删除请求路径
      delete: '',
      //  批量删除请求路径
      batchDelete: '',
      //  总条数请求路径
      count: ''
    },
    serverPage: true, //  服务端分页
    ifJson: false, //  请求数据是否是json而非json字符串，默认是
    modelName: '',
    requestDataFormat: 'busNewFormat',
    responseDataFormat: 'busNewFormat',
    formDataIdKey: 'id', //  *有需要行选中功能时，这个参数必填*
    formDataNameKey: 'name',
    orderParams: [], //  排序
    filterParam: {}, //  查询条件
    _originFilterParam: {}, //  原固定查询条件
    _nowFilterParam: {}, //  当前查询条件
    listData: [], //  表格数据
    selectedData: [], //  表格数据
    sumData: {}, //  返回数据总数
    totalItems: 0, //  客户端总条数
    totalServerItems: 0, //  数据库总条数
    columns: {}, //  列对象，用于控制列的隐藏和显示，如果需要控制列的隐藏和显示，则传入columns，不传入listOptions.columnDefs
    selectedItems: [], //  选中的数据
    multiSelect: false, //  是否多选，默认单选
    laypage: null,
    pagingOptions: {
      laypageOptions: {
        cont: 'laypageId', //  容器。值支持id名、原生dom对象，jquery对象,
        pages: 1000, //  总页数
        skip: true, //  是否开启跳页
        skin: '#32c5d2',
        groups: 3 //  连续显示分页数
      },
      pageSizes: [30, 50, 100, 500],
      pageSize: 30, //  每页条数
      currentPage: 1, //  当前页码
      sort: null
    }
  },
  formControllerOptions: {
    scope: null,
    id: 0,
    url: {
      //  查询请求路径
      fetch: '',
      //  新增请求路径
      add: '',
      //  保存请求路径
      save: ''
    },
    formType: null,
    backStateName: '', //   Form操作后，对应的基础跳转页面，

    ifModal: false, //  默认不是弹窗
    formData: {},
    uiControl: {},
    modelName: null,
    formDataIdKey: 'id',
    formDataNameKey: 'name'
  },
  gridModalControllerOptions: {
    scope: null,
    uiCtrl: {}, //   控制搜索条件的disabled

    filterSrcData: {}, //  各搜索条件的源数据，主要指选择类控件的源数据
    filter: [],
    alerts: [],
    selectedData: [],
    filterParam: {},
    modalInstance: null,
    indexFieldName: null,
    gridOptions: {
      multiSelect: false, //  多选
      enableFullRowSelection: true, //  选择
      enableRowSelection: false, //  行点击选择
      enableSelectAll: true //  全选
    }
  },
  echartsControllerOptions: {
    scope: null,
    id: 'chartsId',
    title: '报表',
    lineOp: '',
    ifJson: false, //  请求数据是否是json而非json字符串，默认是
    requestDataFormat: 'default', //  请求数据格式
    responseDataFormat: 'default', //  请求数据格式
    tipLegend: '',
    legendData: [],
    finishCount: 0,
    isHttping: false, //  是否在查询
    filterParam: {}, //  查询条件
    _originFilterParam: {} //  原查询条件
  },
  toasterOptions: {
    closeButton: false, //  按钮，默认没有
    debug: false,
    newestOnTop: false, //  多个弹窗内容堆叠顺序，默认从上往下弹出
    progressBar: false, //  时间进度条，默认没有
    positionClass: 'toast-top-center', //  弹窗位置
    preventDuplicates: false,
    onclick: null,
    showDuration: '300', //  显示时间300毫秒
    hideDuration: '1000', //  隐藏时间1000毫秒
    timeOut: '5000', //  5000毫秒后关闭
    extendedTimeOut: '1000',
    showEasing: 'swing', //  显示速度方式
    hideEasing: 'linear', //  隐藏速度方式
    showMethod: 'fadeIn', //  显示方式
    hideMethod: 'fadeOut' //  隐藏方式
  }
};
