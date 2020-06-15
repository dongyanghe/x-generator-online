"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = {
    /*
     'deBug'：本地开发，'service'：在线服务，'serviceTest'：测试服务
     */
    serviceType: 'deBugZZQ',
    transferProtocol: 'http://  ',
    projectName: 'system-manager',
    loginTime: 60 * 60 * 1000,
    durationDuration: 60,
    ok: 1,
    unLogin: [-13, -18, -48, -51],
    sessionDue: -25,
    'noData': -200,
    maxHeadTab: 8,
    cgdtNumMax: 10,
    heartBeatTime: 0,
    uploadTime: 1000 * 60 * 1,
    'timeout': 8000,
    nzModalConfig: {
        width: '78vw'
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
        login: {
            'name': 'login',
            'url': '/login'
        },
        operateDashboard: {
            name: 'app.operat_index',
            url: '/operate/dashboard'
        },
        review: {
            name: 'app.operat_review',
            url: '/operate/review/demo/list'
        },
        main: {
            'name': 'workspace',
            'url': '/workspace'
        },
        user: {
            'name': 'mainFrame.system/user/sysUser/list',
            'url': 'system/user'
        }
    },
    //  所有模块的请求路径
    commonUrl: {
        unLogin: {
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
            fetch: 'message/get',
            review: 'message/reviewSendMessageToBox',
        },
        channel: {
            list: 'channel/list',
        },
        column: {
            list: 'cms/programGuideList/byBaseCodes',
        },
        activity: {
            list: 'activity/v2/management/list',
            delete: 'activity/v2/batchDeleteAct',
            batchDelete: 'activity/v2/batchDeleteAct',
            add: 'activity/v2/saveOrUpdateActAllInfo',
            fetch: 'activity/v2/getActInfoById',
            //  新增请求路径
            update: 'activity/v2/saveOrUpdateActAllInfo',
            actRetServiceDelete: '',
            publishList: 'activity/v2/findSubjectOptionByActId',
            activitySettle: 'activity/v2/activitySettle',
            setSubOptionRight: 'activity/v2/setSubOptionRight',
        }
    },
    //  模版路径
    pageUrl: {
        confirmModal: 'angular1Common/service/modal/confirmModal.html',
        interheadPreview: '',
        review_info: 'module/operat/review/modal/review_info.html',
        interactionReviewModal: 'module/operat/interaction/modal/interactionReviewModal.html',
        actRetServiceForm: 'module/resource/activity/modal/actRetServiceFormModal.html',
        publishSelectModal: 'module/resource/activity/modal/publishSelectModal.html',
        imgUpdateModal: 'module/resource/activity/modal/imgUpdateModal.html',
        activitySelectModal: 'common/modal/activity/activitySelectModal.html',
        channelSelectModal: 'common/modal/channel/channelSelectModal.html',
    },
    unLoading: [],
    'defaultGridOptions': {
        'multiSelect': false,
        'enableCellSelection': false,
        /*//  如果这个值为true，表格里自定义cellTemplate里面最外层div里面不能有ng-if属性？？？否则报错‘indexOf’*/
        'enableFullRowSelection': false,
        'enableRowSelection': false,
        'enableCellEdit': false,
        'enablePinning': false,
        'enableColumnResize': true,
        'showColumnMenu': true,
        'showFilter': false,
        'enablePaging': true,
        'enableFiltering': false,
        'enableSorting': false,
        'showFooter': true,
        'paginationPageSizes': [
            10, 30, 80
        ],
        totalItems: 0,
        'paginationPageSize': 10,
        paginationCurrentPage: 1,
        'useExternalPagination': true,
        'useExternalSorting': true,
        enablePaginationControls: true,
        'filterOptions': {
            'filterText': '',
            'useExternalFilter': false
        }
    },
    'listComponentOptions': {
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
        originFilterParam: {},
        nowFilterParam: {},
        gridData: [],
        sumData: {},
        totalServerItems: 0,
        gridOptions: {}
    },
    'listControllerOptions': {
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
        serverPage: true,
        ifJson: false,
        modelName: '',
        requestDataFormat: 'busNewFormat',
        responseDataFormat: 'busNewFormat',
        formDataIdKey: 'id',
        formDataNameKey: 'name',
        orderParams: [],
        filterParam: {},
        _originFilterParam: {},
        _nowFilterParam: {},
        listData: [],
        selectedData: [],
        sumData: {},
        totalItems: 0,
        totalServerItems: 0,
        columns: {},
        selectedItems: [],
        multiSelect: false,
        laypage: null,
        pagingOptions: {
            'laypageOptions': {
                cont: 'laypageId',
                pages: 1000,
                skip: true,
                skin: '#32c5d2',
                groups: 3 //  连续显示分页数
            },
            'pageSizes': [
                30, 50, 100, 500
            ],
            'pageSize': 30,
            'currentPage': 1,
            'sort': null
        }
    },
    'formControllerOptions': {
        scope: null,
        id: 0,
        url: {
            //  查询请求路径
            fetch: '',
            //  新增请求路径
            add: '',
            //  保存请求路径
            save: '',
        },
        formType: null,
        backStateName: '',
        ifModal: false,
        formData: {},
        uiControl: {},
        modelName: null,
        formDataIdKey: 'id',
        formDataNameKey: 'name'
    },
    'gridModalControllerOptions': {
        scope: null,
        uiCtrl: {},
        filterSrcData: {},
        filter: [],
        alerts: [],
        selectedData: [],
        filterParam: {},
        modalInstance: null,
        indexFieldName: null,
        gridOptions: {
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowSelection: false,
            enableSelectAll: true //  全选
        }
    },
    'echartsControllerOptions': {
        scope: null,
        id: 'chartsId',
        title: '报表',
        lineOp: '',
        ifJson: false,
        requestDataFormat: 'default',
        responseDataFormat: 'default',
        tipLegend: '',
        legendData: [],
        finishCount: 0,
        isHttping: false,
        filterParam: {},
        _originFilterParam: {} //  原查询条件
    },
    'toasterOptions': {
        closeButton: false,
        debug: false,
        newestOnTop: false,
        progressBar: false,
        positionClass: 'toast-top-center',
        preventDuplicates: false,
        onclick: null,
        showDuration: '300',
        hideDuration: '1000',
        timeOut: '5000',
        extendedTimeOut: '1000',
        showEasing: 'swing',
        hideEasing: 'linear',
        showMethod: 'fadeIn',
        hideMethod: 'fadeOut' //  隐藏方式
    }
};
