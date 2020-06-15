"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL = {
    //  本地开发的路径配置
    deBug: {
        requestUrl: '/',
        loginUrl: 'login',
    },
    serviceTest: {
        requestUrl: '/systemManager',
        loginUrl: 'login',
    },
    deBugSZ: {
        requestUrl: 'http://172.16.3.10:9400/systemManager/',
        loginUrl: 'login',
    },
    deBugZZQ: {
        requestUrl: 'http://172.16.2.139:9400/systemManager/',
        loginUrl: 'login',
    },
    //  本地开发的模拟路径配置
    mock: {
        requestUrl: '/',
        loginUrl: 'login',
    },
    //  服务器环境的路径配置
    service: {
        requestUrl: '/systemManager',
        loginUrl: 'login',
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
        },
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
        demo: {
            select: 'mock-data/test-list',
            detail: 'mock-data/detail',
            save: 'mock-data/save',
            update: 'mock-data/update',
            delete: 'mock-data/delete',
        },
        taxiCompany: {
            select: 'mock-data/test-list',
            detail: 'mock-data/detail',
            save: 'mock-data/save',
            update: 'mock-data/update',
            delete: 'mock-data/delete',
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
        },
        system: {
            menuManageTreeList: 'system/sysMenu/select',
            update: 'system/sysMenu/update',
            save: 'system/sysMenu/save',
            delete: 'system/sysMenu/delete',
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
                selectSelected: 'system/role/obtainMenu',
                authorizeUrl: 'system/role/grant'
            },
            operateAccount: {
                select: 'system/user/sysUser/select',
                save: 'system/user/sysUser/save',
                update: 'system/user/sysUser/update'
            },
            bigArea: {
                save: 'org/regionInfo/save',
                update: 'org/regionInfo/update',
                delete: 'org/regionInfo/delete',
            }
        }
    },
    unLoading: [],
    permissionUrl: {
        common: {
            heartbeat: '/heartbeat',
            login: '/login',
            logout: '/logout',
            menu: '/menu',
            updatePassword: '/updatePassword' // 修改密码
        },
        option: {
            cityService: '/system/service/systemService/select',
            systemCategory: '/system/category/save',
            system: '/system/category/update',
            common: '/comment/city/select',
            couponType: '/coupon/select',
            active: '/active/select',
            order: '/report/order/select',
            drawcash: '/report/drawcash/select',
            income: '/report/income/select',
        },
        associaSearch: {
            station: '',
            carBrand: '/system/serve/specialCarBrand/select',
            carType: '/system/serve/specialCarBrand/select',
            companyName: '/resource/sysCompany/select'
        },
        exceed: {
            activeRuleSelect: '/active/rule/select',
            activeRuleSave: '/active/rule/save',
            activeRuleUpdate: '/active/rule/update'
        }
    },
    op: {
        select: 'select',
        count: 'selectCount',
        update: 'update',
        save: 'save',
        delete: 'delete',
        detail: 'detail',
        //by zyh
        SysRoleSelectOption: 'SysRoleSelectOption',
        SysDataRoleSelectOption: 'SysDataRoleSelectOption',
        ReportSelectBusinessByDay: 'ReportSelectBusinessByDay',
        ReportSelectBusinessByMonth: 'ReportSelectBusinessByMonth',
        // ReportSelectBusinessByDay: 'ReportSelectBusinessByDay',  // 业务日查询
        // ReportSelectBusinessByMonth: 'ReportSelectBusinessByMonth',  // 业务月查询
        ReportSelectCompanyByDay: 'ReportSelectCompanyByDay',
        ReportSelectCompanyByMonth: 'ReportSelectCompanyByMonth',
        // ReportSelectBusinessByDay: 'ReportSelectBusinessByDay',  // 业务收入日报表
        // ReportSelectBusinessByMonth: 'ReportSelectBusinessByMonth', // 业务收入月报表
        couponSelect: 'couponSelect',
        activeCouponRuleDetail: 'activeCouponRuleDetail',
        activeCouponRuleSave: 'activeCouponRuleSave',
        activeCouponRuleUpdate: 'activeCouponRuleUpdate',
        activeCouponRuleDelete: 'activeCouponRuleDelete',
        activeAwardRuleDelete: 'activeAwardRuleDelete',
        activeAwardRuleDetail: 'activeAwardRuleDetail',
        activeAwardTypeSelect: 'activeAwardTypeSelect',
        couponTypeSelect: 'couponTypeSelect',
        activeSave: 'activeSave',
        activeUpdate: 'activeUpdate',
        activeAwardRuleSave: 'activeAwardRuleSave',
        activeAwardRuleUpdate: 'activeAwardRuleUpdate',
        busSelectCitywide: 'BusSelectCitywide',
        busSelectTransRegional: 'BusSelectTransRegional',
        busLineScheduleSelectDetail: 'BusLineScheduleSelectDetail',
        selectRoleOption: 'SysRoleSelectOption',
        SysCompanySelectDetail: 'SysCompanySelectDetail',
        selectCompanyOption: 'companyOption',
        SysCompanySelect: 'SysCompanySelect',
        sysCompanySelectList: 'SysCompanySelectList',
        SysRoleSelectTree: 'SysRoleSelectTree',
        CompanyUserSelect: 'CompanyUserSelect',
        SysUserSelect: 'SysUserSelect',
        SysAppUserSelectDetail: 'SysAppUserSelectDetail',
        SysVersionsSelectDetail: 'SysVersionsSelectDetail',
        taxiDriver: 'SysTaxiDriverSelectDetail',
        specialDriver: 'SysSpecialcarDriverSelectDetail',
        taxiDriverAudit: 'TaxiDriverAuditSelectDetail',
        specialDriverAudit: 'SpecialcarDriverAuditSelectDetail',
        SysBrandSelectDetail: 'SysBrandSelectDetail',
        carBrand: 'SysBrandSelectByName',
        carType: 'SysBrandSelectByType',
        taxiCarDetail: 'SysTaxiCarSelectDetail',
        specialCarDetail: 'SysSpecialcarSelectDetail',
        inspectCompanyUserLoginName: 'inspectLoginName',
        companyTreeSelect: 'companyTreeSelect',
        sysUserSelectDetail: 'SysUserSelectDetail',
        sysUserUpdate: 'SysUserUpdate',
        passengerOrderHistory: 'passengerOrderHistory',
        sysCompanyAuditSelectDetail: 'SysCompanyAuditSelectDetail',
        SelectSysServiceDetail: 'SelectSysServiceDetail',
        selectAllBusPosition: '',
        taxiCatgoryDelete: 'taxiCatgoryDelete',
        specialCarCatgoryDelete: 'specialCarCatgoryDelete',
        sysMenuUpdate: 'SysMenuUpdate',
        companyMenuUpdate: 'CompanyMenuUpdate',
        busCompanyMenuUpdate: 'BusCompanyMenuUpdate',
        sysMenuSortUpdate: 'SysMenuSortUpdate',
        companyMenuSortUpdate: 'CompanyMenuSortUpdate',
        busCompanyMenuSortUpdate: 'BusCompanyMenuSortUpdate',
        BusPaidOrderSelectDetail: 'BusPaidOrderSelectDetail',
        BusRefundOrderSelectDetail: 'BusRefundOrderSelectDetail',
        busSpecialTicketConfigSelectDetail: 'BusSpecialTicketConfigSelectDetail',
        positionSelect: 'positionSelect',
        trajectorySelect: 'trajectorySelect',
        instantSelect: 'instantSelect',
        instantSelectCount: 'instantSelectCount',
        instantDetail: 'instantDetail',
        reserveSelect: 'reserveSelect',
        reserveSelectCount: 'reserveSelectCount',
        reserveDetail: 'reserveDetail',
        userPassWordUpdate: 'UserPassWordUpdate',
        SysUserUpdate: 'SysUserUpdate',
        companyAudit: {
            selectImg: {
                selectImgLetterOfCommitment: 'selectImgLetterOfCommitment',
                selectImgApplicationFormForProtection: 'selectImgApplicationFormForProtection' //   保护申请表
            },
            addImg: {
                addImgLetterOfCommitment: 'addImgLetterOfCommitment',
                addImgApplicationFormForProtection: 'addImgApplicationFormForProtection' //   保护申请表
            }
        },
        addServiceCityImg: {
            addSpecialCarCategoryMap: 'addSpecialCarCategoryMap',
            addSpecialCarCategoryIcon: 'addSpecialCarCategoryIcon',
            addTaxiCategoryMap: 'addTaxiCategoryMap',
            addTaxiCategoryIcon: 'addTaxiCategoryIcon' // 出租车车型列表图标
        },
        selectServiceCityImg: {
            selectSpecialCarCategoryMap: 'selectSpecialCarCategoryMap',
            selectSpecialCarCategoryIcon: 'selectSpecialCarCategoryIcon',
            selectTaxiCategoryMap: 'selectTaxiCategoryMap',
            selectTaxiCategoryIcon: 'selectTaxiCategoryIcon' // 出租车车型列表图标
        },
    },
    //  模版路径
    pageUrl: {
        loginPage: '/login',
        // 系统管理模块
        roleForm: 'module/system/role/roleForm.html',
        companyUserForm: 'module/system/user/companyUser/companyUserForm.html',
        sysUserForm: 'module/system/user/sysUser/sysUserForm.html',
        brandModelForm: 'module/system/brandModel/brandModelForm.html',
        brandModelAddForm: 'module/system/brandModel/brandModelAddForm.html',
        appVersionForm: 'module/system/appVersion/appVersionForm.html',
        //   平台运营模块
        expChargingRuleForm: 'module/operation/expChargingRule/form.html',
        selectChargTimeForm: 'angularCommon/modal/selectChargTime/form.html',
        dispatchOrderRuleForm: 'module/operation/dispatchOrderRule/form.html',
        cityServiceForm: 'module/operation/cityService/form.html',
        // 资源管理模块
        companyForm: 'module/resource/company/companyForm.html',
        specialCarForm: 'module/resource/car/specialCar/specialCarForm.html',
        taxiCarForm: 'module/resource/car/taxiCar/taxiCarForm.html',
        passengerForm: 'module/resource/passenger/passengerForm.html',
        passengerOrderForm: 'module/resource/passenger/passengerOrderForm.html',
        taxiDriverForm: 'module/resource/driver/taxiDriver/taxiDriverForm.html',
        locLineForm: 'module/monitor/loc/locLine.html',
        // activeBasicForm : 'module/active/activeBasic/activeBasicForm.html' ,   //  活动表单
        couponForm: 'module/coupon/coupon/couponForm.html',
        activeBasicFormAdd: 'module/active/activeBasic/activeBasicFormAdd.html',
        activeRuleAdd: 'module/active/activeBasic/activeRuleAdd.html',
        carForm: 'module/bus/basic/car/carForm.html',
        driverForm: 'module/bus/basic/driver/driverForm.html',
        checkForm: 'module/bus/basic/check/checkForm.html',
        paidOrderForm: 'module/bus/order/paidOrder/paidOrderForm.html',
        sameCityPaidOrderForm: 'module/bus/order/sameCityPaidOrder/sameCityPaidOrderForm.html',
        sameCityRefundOrderForm: 'module/bus/order/sameCityRefundOrder/sameCityRefundOrderForm.html',
        refundOrderForm: 'module/bus/order/refundOrder/refundOrderForm.html',
        cheapTicketForm: 'module/bus/cheapTicket/cheapTicketForm.html',
        cheapTicketFormAdd: 'module/bus/cheapTicket/cheapTicketFormAdd.html',
        qrCode: 'module/bus/line/lineData/qrCode.html',
        // 线路信息模块
        citySetForm: 'module/bus/line/citySet/citySetForm.html',
        lineDataForm: 'module/bus/line/lineData/lineDataForm.html',
        lineTaskForm: 'module/bus/line/lineTask/lineTaskForm.html',
        ruleSetForm: 'module/bus/system/ruleSet/ruleSetForm.html',
        crossCityRuleSetForm: 'module/bus/system/crossCityRuleSet/crossCityRuleSetForm.html',
        scheduleForm: 'module/bus/schedule/scheduleForm.html',
        //   弹窗选择
        chooseCompanyModal: 'common/modal/company/chooseCompanyModal.html',
        chooseServiceCenterModal: 'common/modal/serviceCenter/chooseServiceCenterModal.html',
        chooseTaxiCompanyModal: 'common/modal/taxiCompany/chooseTaxiCompanyModal.html',
        confirmModal: 'angular1Common/service/modal/confirmModal.html',
        interheadPreview: '',
        review_info: 'module/operat/review/modal/review_info.html',
        interactionReviewModal: 'module/operat/interaction/modal/interactionReviewModal.html',
        actRetServiceForm: 'module/resource/activity/modal/actRetServiceFormModal.html',
        publishSelectModal: 'module/resource/activity/modal/publishSelectModal.html',
        imgUpdateModal: 'module/resource/activity/modal/imgUpdateModal.html',
        activitySelectModal: 'common/modal/activity/activitySelectModal.html',
        channelSelectModal: 'common/modal/channel/channelSelectModal.html',
    }
};
