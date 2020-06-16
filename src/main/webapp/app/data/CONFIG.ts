// import { URL as Url } from './URL';
export const CONFIG = {
  /*
   'deBug'：本地开发，'service'：在线服务，'serviceTest'：测试服务，'serviceDev'：测试服务
   */
  serviceType: 'deBug',
  projectName: 'system-manager',
  loginTime: 60 * 60 * 1000 /*//  登录信息保存时长*/,
  ok: 1,
  unLogin: [-13, -18, -48, -51] /*不能登录的错误码*/,
  sessionDue: -25 /* 会话信息过期  */,
  noData: -200,
  maxHeadTab: 8, //  最大页面标签
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
  //  路由名称
  stateProvider: {
    index: {
      name: 'home',
      url: '/'
    }
  },
  //  所有模块的请求路径
  commonUrl: {
    unLogin: {
      //   无需登录请求
      login: '/login'
    }
  },
  unLoading: [],
  //  插件默认配置
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
