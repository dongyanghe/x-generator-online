var _config = {
    serviceType : "deBugHDY",//"deBug"：本地服务，"mock"：本地虚拟数据，"service"：在线服务，"serviceTest"：测试服务
    "projectName": "taxi",
    "version": "0",
    "platform": "taxipc",
    "base64Key": "yaotaxi",
    "ok": 1,
    sessionDue : -25,//会话信息过期
    "noData": -200,
    maxHeadTab : 8,
    heartBeatTime: 1000 * 60 * 2, //心跳请求时间间隔
    uploadTime: 1000 * 60 * 1,//文件上传提示的关闭延时
    "timeout": 8000,//请求超时时间
    mapIntervalTime: 1000 * 10,//地图车辆位置刷新间隔
    defaultServiceCityCode: "0755",//默认服务城市Code（深圳）
    defaultServiceCityId: 1,//默认服务城市id（深圳）
    "defaultGridOptions": {
        exporterMenuCsv: true,
        exporterMenuPdf: false,
        enableGridMenu: true,
        "multiSelect": false,
        "enableCellSelection": false,
        //如果这个值为true，表格里自定义cellTemplate里面最外层div里面不能有ng-if属性？？？否则报错‘indexOf’
        "enableFullRowSelection": false,
        "enableRowSelection": false,
        "enableCellEdit": false,
        "enablePinning": false,
        "enableColumnResize": true,
        "showColumnMenu": true,
        "showFilter": true,
        "enablePaging": true,
        "enableFiltering": true,
        "enableSorting": true,
        "showFooter": true,
        "paginationPageSizes": [    //  每页条数选项
            30, 50, 100, 500
        ],
        totalItems : 0,//总条数，为0时智能下一页，无法跳页
        "paginationPageSize": 30,//当前每页条数
        paginationCurrentPage : 1,//当前页码
        "useExternalPagination": true,//是否使用自定义分页，默认否
        "useExternalSorting": false,//是否使用自定义排序，默认否
        enablePaginationControls: true,//翻页是否显示，默认是
        "filterOptions": {
            "filterText": "",
            "useExternalFilter": false
        }
    },
    "gridModuleOptions": {
        scope: null,
        url : {
            select: "",
            count: "",
            update: "",
            delete: ""
        },
        op : {
            select: _url.op.select,
            count: _url.op.count,
            update: _url.op.update,
            delete: _url.op.delete
        },
        serverPage: true, //服务端分页
        ifJson: false,//请求数据类型，是为json，否为json字符串
        isRefreshGridDataCount : false,//是否正在查询总条数，默认否
        modelName: "",
        requestDataFormat: "busNewFormat",  //请求数据格式
        responseDataFormat: "busNewFormat", //请求数据格式
        formDataIdKey: "id",    //*有需要行选中功能时，这个参数必填*
        formDataNameKey: "name",
        orderParams: [],    //排序
        filterParam: {},    //查询条件
        _originFilterParam: {},  //原查询条件
        _nowFilterParam: {},//当前查询条件
        gridData: [],   //表格数据
        sumData: {},    //返回数据总数
        totalServerItems: 0,    //数据库总条数
        columns: {},//列对象，用于控制列的隐藏和显示，如果需要控制列的隐藏和显示，则传入columns，不传入gridOptions.columnDefs
        gridOptions: {
            selectedItems: [],
            sumData: "sumData",
            totalServerItems: "totalServerItems"
        }
    },
    "listControllerOptions": {
        scope: null,
        urlList: "",
        urlDelete: "",
        lineOp: "",
        serverPage: true, //服务端分页
        ifJson: false,//请求数据是否是json而非json字符串，默认是
        modelName: "",
        requestDataFormat: "busNewFormat",
        responseDataFormat: "busNewFormat",
        formDataIdKey: "id",    //*有需要行选中功能时，这个参数必填*
        formDataNameKey: "name",
        orderParams: [],    //排序
        filterParam: {},    //查询条件
        _originFilterParam: {},  //原固定查询条件
        _nowFilterParam: {},//当前查询条件
        listData: [],   //表格数据
        selectedData: [],   //表格数据
        sumData: {},    //返回数据总数
        totalItems: 0,  //客户端总条数
        totalServerItems: 0,    //数据库总条数
        columns: {},//列对象，用于控制列的隐藏和显示，如果需要控制列的隐藏和显示，则传入columns，不传入listOptions.columnDefs
        selectedItems: [], //选中的数据
        multiSelect: false, //是否多选，默认单选
        laypage: null,
        pagingOptions: {
            "laypageOptions": {
                cont: 'laypageId', //容器。值支持id名、原生dom对象，jquery对象,
                pages: 1000, //总页数
                skip: true, //是否开启跳页
                skin: '#32c5d2',
                groups: 3 //连续显示分页数
            },
            "pageSizes": [
                30, 50, 100, 500
            ],
            "pageSize": 30,//每页条数
            "currentPage": 1,//当前页码
            "sort": null
        }
    },
    "formControllerOptions": {
        scope: null,
        formDataIdKey: "id",    //*有需要行选中功能时，这个参数必填*
        formDataNameKey: "name",
        formDataName:"name",
        id: 0,
        url : {
            select: "",
            count: "",
            update: "",
            delete: ""
        },
        op : {
            select: _url.op.select,
            count: _url.op.count,
            update: _url.op.update,
            delete: _url.op.delete
        },
        formType : null,
        backStateName: "",  // Form操作后，对应的基础跳转页面，
        lineOp: "",
        ifModal: false, //默认不是弹窗
        formData: {},
        uiControl: {},
        modelName: null
    },
    "gridModalControllerOptions": {
        scope: null,
        uiCtrl: {}, // 控制搜索条件的disabled
        lineOp: "",
        filterSrcData: {},//各搜索条件的源数据，主要指选择类控件的源数据
        filter: [],
        alerts: [],
        selectedData: [],
        filterParam: {},
        modalInstance: null,
        indexFieldName: null,
        gridOptions: {
            multiSelect: false, //多选
            enableFullRowSelection: true,   //选择
            enableRowSelection: false,  //行点击选择
            enableSelectAll: true   //全选
        }
    },
    "echartsControllerOptions": {
        scope: null,
        id: "chartsId",
        title: "报表",
        lineOp: "",
        ifJson: false,//请求数据是否是json而非json字符串，默认是
        requestDataFormat: "default",  //请求数据格式
        responseDataFormat: "default", //请求数据格式
        tipLegend: "",
        legendData: [],
        finishCount: 0,
        isHttping: false,    //是否在查询
        filterParam: {},    //查询条件
        _originFilterParam: {}  //原查询条件
    },
    "toasterOptions": {
        closeButton: false,//按钮，默认没有
        debug: false,
        newestOnTop: false,//多个弹窗内容堆叠顺序，默认从上往下弹出
        progressBar: false,//时间进度条，默认没有
        positionClass: "toast-top-center",//弹窗位置
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",//显示时间300毫秒
        hideDuration: "1000",//隐藏时间1000毫秒
        timeOut: "5000",//5000毫秒后关闭
        extendedTimeOut: "1000",
        showEasing: "swing",//显示速度方式
        hideEasing: "linear",//隐藏速度方式
        showMethod: "fadeIn",//显示方式
        hideMethod: "fadeOut"//隐藏方式
    }
}