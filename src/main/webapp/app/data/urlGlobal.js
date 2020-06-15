/**
 *	文颗 192.168.1.234:8080;
 *	传军 192.168.1.96:8080;
 *  self 127.0.0.1:8080;
 * @type {{imgUrl: string, deBug: {requestUrl: string}, service: {requestUrl: string}, serviceTest: {requestUrl: string}, stateProvider: {login: {name: string, url: string}, main: {name: string, url: string}, user: {name: string, url: string}, taxiDriver: {list: {name: string, url: string, templateUrl: string}, form: {name: string, url: string, templateUrl: string}, addForm: {name: string, url: string, templateUrl: string}}, specialDriver: {list: {name: string, url: string, templateUrl: string}, form: {name: string, url: string, templateUrl: string}, addForm: {name: string, url: string, templateUrl: string}}, taxiCar: {list: {name: string, url: string, templateUrl: string}}, specialCar: {list: {name: string, url: string, templateUrl: string}}, taxiTeam: {list: {name: string, url: string, templateUrl: string}}, monitor: {list: {name: string, url: string, templateUrl: string}}, company: {list: {name: string, url: string, templateUrl: string}, form: {name: string, url: string, templateUrl: string}, addForm: {name: string, url: string, templateUrl: string}}, audit: {companyAudit: {list: {name: string, url: string, templateUrl: string}, form: {name: string, url: string, templateUrl: string}}, companyAuditUnpass: {list: {name: string, url: string, templateUrl: string}, form: {name: string, url: string, templateUrl: string}}, driverAudit: {taxiDriverAudit: {list: {name: string, url: string, templateUrl: string}, form: {name: string, url: string, templateUrl: string}}, specialDriverAudit: {list: {name: string, url: string, templateUrl: string}, form: {name: string, url: string, templateUrl: string}}}}}, httpRequestMethod: {post: string, get: string}, suffix: {logout: string, select: string, map: string, update: string, save: string, delete: string, detail: string, addImg: string, selectImg: string, updatePassword: string}, permissionUrl: {common: {heartbeat: string, login: string, logout: string, menu: string}, associaSearch: {carBrand: string, carType: string, companyName: string, companyAuditName: string, companyAuditUnpassName: string, taxiLicense: string, specialLicense: string, specialCarDriverAudit: string, taxiDriverAudit: string, specialCarDriver: string, taxiDriver: string}, updateUser: {updatePassword: string}}, templateUrl: {userForm: string, companyMsgForm: string, roleForm: string, companyForm: string, specialCarForm: string, taxiCarForm: string, specialCarDriver: string, taxiCarDriver: string, taxiTeamForm: string, chooseDriver: string}, op: {select: string, count: string, update: string, save: string, delete: string, detailSelect: string, currentSelect: string, selectRoleOption: string, selectRoleTree: string, selectCompanyTree: string, carBrand: string, carType: string, companyOption: string, inspectCompanyUserLoginName: string, driverEnable: string, driverDisable: string, byLicenseSelect: string, companySelectList: string, positionSelect: string, trajectorySelect: string, serviceCategorySelect: string, categorySelect: string, carTeam: string, selectServiceCity: string, verifyPassword: string, selectByLicense: string, companySelect: string, basedataByServiceDay: string, basedataByServiceMonth: string, orderByDay: string, orderByMonth: string, orderByServiceDay: string, orderByServiceMonth: string, companyIncomeByDay: string, companyIncomeByMonth: string, companyIncomeByServiceDay: string, companyIncomeByServiceMonth: string, basedataCount: string}}}
 * @private
 */
var _url = {
    "imgUrl" : "http://112.74.65.82:8090/avatar",
    //模拟开发的路径配置
    mock : {
        requestUrl : "/web/systemManager/mock",//后台服务器地址
        loginUrl: "login",//登录路径
    },
    //本地开发的路径配置
    deBug : {
        requestUrl : "http://127.0.0.1/systemManager",//后台服务器地址
        loginUrl: "login",//登录路径
    },
  deBugHDY: {
    requestUrl: 'http://192.168.1.79/systemManager',
    loginUrl: 'login', // 登录路径
  },
    //在线服务器环境的路径配置
    service : {
        requestUrl : "/systemManager",//后台服务器地址system/
        loginUrl: "login",//登录路径
    },
    //测试服务器环境的路径配置
    serviceTest : {
        requestUrl : "/systemManager",//后台服务器地址
        loginUrl: "login",//登录路径
    },
    //路由名称
    stateProvider: {
        login: {
            "name": "login",
            "url": "/login"
        },
        main: {
            "name": "mainFrame",
            "url": "/mainFrame"
        },
        user: {
            "name": "mainFrame.system/user/sysUser/list",
            "url": "system/user"
        },
        taxiDriver: {
            list : {
                "name": "mainFrame.resource/driver/taxiDriver/list",
                "url": "/resource/driver/taxiDriver/list",
                "templateUrl": "module/resource/driver/taxiDriver/taxiDriverList.html"
            },
            form : {
                "name": "mainFrame.resource/driver/taxiDriver/form",
                "url": "/resource/driver/taxiDriver/form?id&dataNodeId",
                "templateUrl": "module/resource/driver/taxiDriver/taxiDriverForm.html"
            }
        },
        specialDriver: {
            list : {
                "name": "mainFrame.resource/driver/specialDriver/list",
                "url": "/resource/driver/specialDriver/list",
                "templateUrl": "module/resource/driver/specialCarDriver/specialCarDriverList.html"
            },
            form : {
                "name": "mainFrame.resource/driver/specialDriver/form",
                "url": "/resource/driver/specialDriver/form?id&dataNodeId",
                "templateUrl": "module/resource/driver/specialCarDriver/specialCarDriverForm.html"
            }
        },

        company: {
            list : {
                "name": "mainFrame.resource/sysCompany/list",
                "url": "/resource/sysCompany/list",
                "templateUrl": "module/resource/company/companyList.html"
            },
            form : {
                "name": "mainFrame.resource/sysCompany/form",
                "url": "/resource/sysCompany/form?id",
                "templateUrl": "module/resource/company/companyForm.html"
            }
        },
        role: {
            list : {
                "name": "mainFrame.system/role/list",
                "url": "/system/role/list",
                "templateUrl": "module/system/role/roleList.html"
            },
            form : {
                "name": "mainFrame.system/role/form",
                "url": "/system/role/form?id",
                "templateUrl": "module/system/role/roleForm.html"
            }
        },
        serviceCity: {//服务城市
            list : {
                "name": "mainFrame.system/service/serviceCity/list",
                "url": "/system/serviceCity/list",
                "templateUrl": "module/system/serviceCity/serviceCity.html"
            },
            form : {
                "name": "mainFrame.system/service/serviceCityForm/form",
                "url": "/system/serviceCity/form?id&cityCode",
                "templateUrl": "module/system/serviceCity/serviceCityForm.html"
            }
        },
        cityService: {//服务城市
            list : {
                "name": "mainFrame.system/service/cityService/list",
                "url": "/system/cityService/list",
                "templateUrl": "module/system/cityService/cityServiceList.html"
            },
            form : {
                "name": "mainFrame.system/service/cityServiceForm/form",
                "url": "/system/cityService/form?id&cityCode",
                "templateUrl": "module/system/cityService/cityServiceForm.html"
            }
        },
        billingRule: { // 计费规则
          list : {
              "name": "mainFrame.system/service/billingRule/list",
              "url": "/system/billingRule/list",
              "templateUrl": "module/system/billingRule/billingRuleList.html"
          }
        },
        paidOrder: {//跨城已支付订单
            list : {
                "name": "mainFrame.busOrder/paidOrder/list",
                "url": "/bus/order/paidOrder/list?orderId&companyId&companyName&createTime",
                "templateUrl": "module/bus/order/paidOrder/paidOrderList.html"
            },
            form : {
                "name": "mainFrame.busOrder/paidOrder/form",
                "url": "/bus/order/paidOrder/form?orderId&companyId&companyName&createTime",
                "templateUrl": "module/bus/order/paidOrder/paidOrderForm.html"
            }
        },
        sameCityPaidOrder: {//同城已支付订单
            list : {
                "name": "mainFrame.busOrder/cityWide/paidOrder/list",
                "url": "/bus/order/sameCityPaidOrder/list?orderId&companyId&companyName&createTime",
                "templateUrl": "module/bus/order/sameCityPaidOrder/sameCityPaidOrderList.html"
            },
            form : {
                "name": "mainFrame.busOrder/cityWide/paidOrder/form",
                "url": "/bus/order/sameCityPaidOrder/form?orderId&companyId&companyName&createTime",
                "templateUrl": "module/bus/order/sameCityPaidOrder/sameCityPaidOrderForm.html"
            }
        },
        sameCityRefundOrder: {//同城退款订单
            list : {
                "name": "mainFrame.busOrder/cityWide/refundOrder/list",
                "url": "/bus/order/sameCityRefundOrder/list?orderId&companyId&companyName&createTime",
                "templateUrl": "module/bus/order/sameCityRefundOrder/sameCityRefundOrderList.html"
            },
            form : {
                "name": "mainFrame.busOrder/cityWide/refundOrder/form",
                "url": "/bus/order/sameCityRefundOrder/form?orderId&companyId&companyName&createTime",
                "templateUrl": "module/bus/order/sameCityRefundOrder/sameCityRefundOrderForm.html"
            }
        },
        refundOrder: {//跨城退款订单
            list : {
                "name": "mainFrame.busOrder/refundOrder/list",
                "url": "/bus/order/refundOrder/list?orderId&companyId&companyName&createTime",
                "templateUrl": "module/bus/order/refundOrder/refundOrderList.html"
            },
            form : {
                "name": "mainFrame.busOrder/refundOrder/form",
                "url": "/bus/order/refundOrder/form?orderId&companyId&companyName&createTime",
                "templateUrl": "module/bus/order/refundOrder/refundOrderForm.html"
            }
        },
        order: {
            //实时异常订单
            instantErrorOrder  : {
                "list": {
                    "name": "mainFrame.order/taxi/error",
                    "url": "/order/taxiOrder/taxiOrderDetail/list",
                    "templateUrl": "module/order/taxiOrder/taxiOrderList.html"
                },
                form : {
                    "name": "mainFrame.instantErrorOrder/taxiOrder/form",
                    "url": "/order/instantErrorOrder/form?id&taxiOrderType&nativeCityCode",
                    "templateUrl": "module/order/taxiOrder/taxiOrderDetails.html"
                }
            },
            // 预约异常订单
            reserveErrorOrder : {
                "list": {
                    "name": "mainFrame.order/taxi/error",
                    "url": "/order/taxi/error",
                    "templateUrl": "module/order/taxiOrder/taxiOrderList.html"
                },
                form : {
                    "name": "mainFrame.reserveErrorOrder/taxiOrder/form",
                    "url": "/order/reserveErrorOrder/form?id&taxiOrderType&nativeCityCode",
                    "templateUrl": "module/order/taxiOrder/taxiOrderDetails.html"
                }
            },
            // 实时历史订单
            instantHistoryOrder : {
                "list": {
                    "name": "mainFrame.order/taxi/history",
                    "url": "/order/taxi/history",
                    "templateUrl": "module/order/taxiOrder/taxiOrderList.html"
                },
                form : {
                    "name": "mainFrame.instantHistoryOrder/taxiOrder/form",
                    "url": "/order/instantHistoryOrder/form?id&taxiOrderType&nativeCityCode",
                    "templateUrl": "module/order/taxiOrder/taxiOrderDetails.html"
                }
            },
            // 预约未完成订单
            reserveOrder : {
                "list": {
                    "name": "mainFrame.order/taxi/current",
                    "url": "/order/taxiOrder/taxiOrderDetail/list",
                    "templateUrl": "module/order/taxiOrder/taxiOrderList.html"
                },
                form : {
                    "name": "mainFrame.reserveOrder/taxiOrder/form",
                    "url": "/order/reserveOrder/form?id&taxiOrderType&nativeCityCode",
                    "templateUrl": "module/order/taxiOrder/taxiOrderDetails.html"
                }
            },
            //  预约历史订单
            reserveHistoryOrder : {
                "list": {
                    "name": "mainFrame.order/taxi/history",
                    "url": "/order/taxiOrder/taxiOrderDetail/list",
                    "templateUrl": "module/order/taxiOrder/taxiOrderList.html"
                },
                form : {
                    "name": "mainFrame.reserveHistoryOrder/taxiOrder/form",
                    "url": "/order/reserveHistoryOrder/form?id&taxiOrderType&nativeCityCode",
                    "templateUrl": "module/order/taxiOrder/taxiOrderDetails.html"
                }
            },
            // 实时未完成订单
            instantOrder : {
                "list": {
                    "name": "mainFrame.order/taxi/current",
                    "url": "/order/taxiOrder/taxiOrderDetail/list",
                    "templateUrl": "module/order/taxiOrder/taxiOrderList.html"
                },
                form : {
                    "name": "mainFrame.instantOrder/taxiOrder/form",
                    "url": "/order/instantOrder/form?id&taxiOrderType&nativeCityCode",
                    "templateUrl": "module/order/taxiOrder/taxiOrderDetails.html"
                }
            }
        },
        specialCarOrder: {
            //实时异常订单
            instantErrorOrder : {
                "list": {
                    "name": "mainFrame.order/specialcar/error",
                    "url": "/order/specialCarOrder/specialCarOrderForm/list",
                    "templateUrl": "module/order/specialCarOrder/specialCarOrderList.html"
                },
                form : {
                    "name": "mainFrame.carInstantErrorOrder/specialCarOrder/form",
                    "url": "/order/carInstantErrorOrder/form?id&specialCarOrderType&nativeCityCode",
                    "templateUrl": "module/order/specialCarOrder/specialCarOrderForm.html"
                }
            },
            //预约异常订单
            reserveErrorOrder : {
                "list": {
                    "name": "mainFrame.order/specialcar/error",
                    "url": "/order/specialCarOrder/specialCarOrderForm/list",
                    "templateUrl": "module/order/specialCarOrder/specialCarOrderList.html"
                },
                form : {
                    "name": "mainFrame.reserveErrorOrder/specialCarOrder/form",
                    "url": "/order/carReserveErrorOrder/form?id&specialCarOrderType&nativeCityCode",
                    "templateUrl": "module/order/specialCarOrder/specialCarOrderForm.html"
                }
            },
            //实时历史订单
            instantHistoryOrder : {
                "list": {
                    "name": "mainFrame.order/specialcar/history",
                    "url": "/order/specialCarOrder/specialCarOrderForm/list",
                    "templateUrl": "module/order/specialCarOrder/specialCarOrderList.html"
                },
                form : {
                    "name": "mainFrame.instantHistoryOrder/specialCarOrder/form",
                    "url": "/order/carInstantHistoryOrder/form?id&specialCarOrderType&nativeCityCode",
                    "templateUrl": "module/order/specialCarOrder/specialCarOrderForm.html"
                }
            },
            //预约未完成订单
            reserveOrder : {
                "list": {
                    "name": "mainFrame.order/specialcar/current",
                    "url": "/order/specialCarOrder/specialCarOrderForm/list",
                    "templateUrl": "module/order/specialCarOrder/specialCarOrderList.html"
                },
                form : {
                    "name": "mainFrame.reserveOrder/specialCarOrder/form",
                    "url": "/order/carrReserveOrder/form?id&specialCarOrderType&nativeCityCode",
                    "templateUrl": "module/order/specialCarOrder/specialCarOrderForm.html"
                }
            },
            //预约历史订单
            reserveHistoryOrder  : {
                "list": {
                    "name": "mainFrame.order/specialcar/history",
                    "url": "/order/specialCarOrder/specialCarOrderForm/list",
                    "templateUrl": "module/order/specialCarOrder/specialCarOrderList.html"
                },
                form : {
                    "name": "mainFrame.reserveHistoryOrder/specialCarOrder/form",
                    "url": "/order/carReserveHistoryOrder/form?id&specialCarOrderType&nativeCityCode",
                    "templateUrl": "module/order/specialCarOrder/specialCarOrderForm.html"
                }
            },
            //实时未完成订单
            instantOrder  : {
                "list": {
                    "name": "mainFrame.order/specialcar/current",
                    "url": "/order/specialCarOrder/specialCarOrderForm/list",
                    "templateUrl": "module/order/specialCarOrder/specialCarOrderList.html"
                },
                form : {
                    "name": "mainFrame.instantOrder/specialCarOrder/form",
                    "url": "/order/carInstantOrder/form?id&specialCarOrderType&nativeCityCode",
                    "templateUrl": "module/order/specialCarOrder/specialCarOrderForm.html"
                }
            }
        },
        audit: {  //审核管理模块
            companyAudit: {   //公司审核
                list: {
                    "name": "mainFrame.partner/company/audit/list",
                    "url": "/partner/company/audit/list",
                    "templateUrl": "module/parther/audit/company/list.html"
                },
                form: {
                    "name": "mainFrame.partner/company/audit/form",
                    "url": "/partner/company/audit/form?id",
                    "templateUrl": "module/parther/audit/company/form.html"
                }
            },
            serviceCenterAudit: { //分公司审核
                list: {
                    "name": "mainFrame.partner/serviceCenter/audit/list",
                    "url": "/partner/serviceCenter/audit/list",
                    "templateUrl": "module/parther/audit/serviceCenter/list.html"
                },
                form: {
                    "name": "mainFrame.partner/serviceCenter/audit/form",
                    "url": "/partner/serviceCenter/audit/form?id",
                    "templateUrl": "module/parther/audit/serviceCenter/form.html"
                }
            },
            serviceStationAudit: { //服务站
                list: {
                    "name": "mainFrame.partner/serviceStation/audit/list",
                    "url": "/partner/serviceStation/audit/list",
                    "templateUrl": "module/parther/audit/serviceStation/list.html"
                },
                form: {
                    "name": "mainFrame.partner/company/audit/form",
                    "url": "/partner/company/audit/form?id",
                    "templateUrl": "module/parther/audit/company/form.html"
                }
            },
            driverAudit: {//司机审核
                taxiDriverAudit: {
                    list : {
                        "name": "mainFrame.driverPassenger/audit/taxiDriver/list",
                        "url": "/driverPassenger/audit/taxiDriver/list",
                        "templateUrl": "module/driverPassenger/audit/taxiDriver/list.html"
                    },
                    form : {
                        "name": "mainFrame.driverPassenger/audit/taxiDriver/from",
                        "url": "/driverPassenger/audit/taxiDriver/form?id",
                        "templateUrl": "module/driverPassenger/audit/taxiDriver/form.html"
                    }
                },
                expDriverAudit: {
                    list : {
                        "name": "mainFrame.driverPassenger/audit/specialDriver/list",
                        "url": "/driverPassenger/audit/specialDriver/list",
                        "templateUrl": "module/driverPassenger/audit/expDriver/list.html"
                    },
                    form : {
                        "name": "mainFrame.driverPassenger/audit/specialDriver/form",
                        "url": "driverPassenger/audit/specialDriver/form?id",
                        "templateUrl": "module/driverPassenger/audit/expDriver/form.html"
                    }
                },
            }
        },
        "manager": {  // 合伙人管理
            company: {
                list: {
                    "name": "mainFrame.partner/company/manage/list",
                    "url": "/partner/company/manage/list",
                    "templateUrl": "module/parther/manage/company/list.html"
                },
                form: {
                    "name": "mainFrame.partner/company/manage/form",
                    "url": "/partner/company/manage/form?id",
                    "templateUrl": "module/parther/manage/company/form.html"
                }
            },
            taxiCompany: {
                list: {
                    "name": "mainFrame.partner/taxiCompany/manage/list",
                    "url": "/partner/taxiCompany/manage/list",
                    "templateUrl": "module/parther/manage/taxiCompany/list.html"
                },
                form: {
                    "name": "mainFrame.partner/taxiCompany/manage/form",
                    "url": "/partner/taxiCompany/manage/form?id",
                    "templateUrl": "module/parther/manage/taxiCompany/form.html"
                }
            },
            serviceCenter: {
                list: {
                    "name": "mainFrame.partner/serviceCenter/manage/list",
                    "url": "/partner/serviceCenter/manage/list",
                    "templateUrl": "module/parther/manage/serviceCenter/list.html"
                },
                form: {
                    "name": "mainFrame.partner/serviceCenter/manage/form",
                    "url": "/partner/serviceCenter/manage/form?id",
                    "templateUrl": "module/parther/manage/serviceCenter/form.html"
                }
            },
            serviceStation: { //服务站
                list: {
                    "name": "mainFrame.partner/serviceStation/manage/list",
                    "url": "/partner/serviceStation/manage/list",
                    "templateUrl": "module/parther/manage/serviceStation/list.html"
                },
                form: {
                    "name": "mainFrame.partner/serviceStation/manage/form",
                    "url": "/partner/serviceStation/manage/form?id",
                    "templateUrl": "module/parther/manage/serviceStation/form.html"
                }
            }
        },
        "trajectory":{//车辆轨迹
            list:{
                "name": "mainFrame.position/trajectory",
                "url": "/monitor/trajectory/map",
                "templateUrl": "module/monitor/trajectory/trajectoryMap.html"
            }
        },
        "ruleSet":{//跨城规则接口设置
            form:{
                "name": "mainFrame.bus/system/ruleSet",
                "url": "/bus/system/crossCityRuleSet",
                "templateUrl": "module/bus/system/crossCityRuleSet/crossCityRuleSetForm.html"
            }
        },
        "active": {
            list: {
                "name": "mainFrame.active/list",
                "url": "/active/activeBasic/list",
                "templateUrl": "module/active/activeBasic/activeBasicList.html"
            },
            form: {
                "name": "mainFrame.active/form",
                "url": "/active/activeBasic/form?id",
                "templateUrl": "module/active/activeBasic/activeBasicForm.html"
            }
        }

    },
    //http请求方式
    httpRequestMethod: {
        post: "post",
        get: "get",
    },
    suffix: {
        logout: "logout",
        select: "select",
        update: "update",
        save: "save",
        delete: "delete",
        detail: "detail",
        addImg: "addImg",
        selectImg: "selectImg",
        orders:"orders",
        updatePassword:"updatePassword"
    },
    permissionUrl: {
        common: {//基础请求
            heartbeat: "/heartbeat",//登录状态校验
            login: "/login",//二次登录校验
            logout: "/logout",//退出登录
            menu: "/menu",//获取菜单,
            updatePassword:"/updatePassword"//修改密码
        },
        option : {//下拉搜索
            cityService : "/system/service/systemService/select",
            systemCategory:"/system/category/save",
            system:"/system/category/update",
            common:"/comment/city/select",
            couponType:"/coupon/select",
            active:"/active/select",
            order:"/report/order/select",
            drawcash:"/report/drawcash/select",
            income:"/report/income/select",
        },
        associaSearch : {//联想搜索
            station:"",
            carBrand : "/system/serve/specialCarBrand/select",
            carType : "/system/serve/specialCarBrand/select",
            companyName: "/resource/sysCompany/select"
        },
        exceed:{//活动页其他请求
            activeRuleSelect:"/active/rule/select",
            activeRuleSave:"/active/rule/save",
            activeRuleUpdate:"/active/rule/update"
        }
    },
    templateUrl: {
        loginPage: "http://127.0.0.1/system/index.html",//登录页
        //系统管理模块
        roleForm: "module/system/role/roleForm.html",//角色权限管理
        companyUserForm: "module/system/user/companyUser/companyUserForm.html",//商户用户表单页
        sysUserForm: "module/system/user/sysUser/sysUserForm.html",//运营用户表单页
        brandModelForm: "module/system/brandModel/brandModelForm.html",//品牌类型表单页
        brandModelAddForm: "module/system/brandModel/brandModelAddForm.html",//品牌类型表单页
        appVersionForm: "module/system/appVersion/appVersionForm.html",//app版本管理
        cityServiceForm:"module/system/cityService/cityServiceForm.html",//服务城市 --废弃
        //  平台运营模块
        expChargingRuleForm:"module/operation/expChargingRule/form.html",// 服务城市计价规则
        selectChargTimeForm:"angularCommon/modal/selectChargTime/form.html",// 服务城市计价规则时段选择
        dispatchOrderRuleForm:"module/operation/dispatchOrderRule/form.html",// 服务城市叫单规则
        cityServiceForm:"module/operation/cityService/form.html",// 城市服务
        //资源管理模块
        companyForm: 'module/resource/company/companyForm.html',    //  公司表单页
        specialCarForm: 'module/resource/car/specialCar/specialCarForm.html',    // 专车表单页
        taxiCarForm: 'module/resource/car/taxiCar/taxiCarForm.html',    //  出租车表单页
        passengerForm: "module/resource/passenger/passengerForm.html",//    乘客管理表单页
        passengerOrderForm:"module/resource/passenger/passengerOrderForm.html",//   乘客管理表单--》追踪订单
        taxiDriverForm : "module/resource/driver/taxiDriver/taxiDriverForm.html" ,   // 出租车司机表单页
        locLineForm : "module/monitor/loc/locLine.html" ,   //  车辆位置
        //activeBasicForm : "module/active/activeBasic/activeBasicForm.html" ,   // 活动表单
        couponForm : "module/coupon/coupon/couponForm.html" ,   //  优惠券
        activeBasicFormAdd:"module/active/activeBasic/activeBasicFormAdd.html",//   活动规则
        activeRuleAdd:"module/active/activeBasic/activeRuleAdd.html",  //   活动规则详情
        carForm:"module/bus/basic/car/carForm.html",     // 车辆数据
        driverForm:"module/bus/basic/driver/driverForm.html",     //司机数据
        checkForm:"module/bus/basic/check/checkForm.html",     //验票人员数据
        paidOrderForm : "module/bus/order/paidOrder/paidOrderForm.html" ,   //跨城巴士已支付订单
        sameCityPaidOrderForm : "module/bus/order/sameCityPaidOrder/sameCityPaidOrderForm.html" ,   //同城巴士已支付订单
        sameCityRefundOrderForm : "module/bus/order/sameCityRefundOrder/sameCityRefundOrderForm.html" ,   //同城巴士退款订单
        refundOrderForm : "module/bus/order/refundOrder/refundOrderForm.html" ,   //跨城巴士退款订单
        cheapTicketForm:"module/bus/cheapTicket/cheapTicketForm.html",//特价票详情
        cheapTicketFormAdd:"module/bus/cheapTicket/cheapTicketFormAdd.html",//特价票新增
        qrCode:"module/bus/line/lineData/qrCode.html",  //二维码
        //线路信息模块
        citySetForm: "module/bus/line/citySet/citySetForm.html",    //城市设置
        lineDataForm:"module/bus/line/lineData/lineDataForm.html", //线路详情
        lineTaskForm: "module/bus/line/lineTask/lineTaskForm.html", //线路任务
        ruleSetForm: "module/bus/system/ruleSet/ruleSetForm.html" ,  //同城规则设置
        crossCityRuleSetForm: "module/bus/system/crossCityRuleSet/crossCityRuleSetForm.html" ,  //跨城规则设置
        scheduleForm: "module/bus/schedule/scheduleForm.html",    //调度详情
        //  弹窗选择
        chooseCompanyModal: "common/modal/company/chooseCompanyModal.html" ,   //    分公司
        chooseServiceCenterModal: "common/modal/serviceCenter/chooseServiceCenterModal.html" ,   //    服务中心
        chooseTaxiCompanyModal: "common/modal/taxiCompany/chooseTaxiCompanyModal.html" ,   //    出租车公司
  },
    op: {
        select: "select",
        count: "selectCount",       //列表总条数
        update: "auditCompanyService",
        save: "save",
        delete: "delete",
        detail: "detail",
        SysCompanySelect:"SysCompanySelect",
        ReportSelectBusinessByDay:"ReportSelectBusinessByDay", //车辆日报表统计
        ReportSelectBusinessByMonth:"ReportSelectBusinessByMonth",  //车辆月报表
        //ReportSelectBusinessByDay:"ReportSelectBusinessByDay",  //业务日查询
        //ReportSelectBusinessByMonth:"ReportSelectBusinessByMonth",  //业务月查询
        ReportSelectCompanyByDay:"ReportSelectCompanyByDay", //公司日报表
        ReportSelectCompanyByMonth:"ReportSelectCompanyByMonth", //公司月报表
        //ReportSelectBusinessByDay:"ReportSelectBusinessByDay",  //业务收入日报表
        //ReportSelectBusinessByMonth:"ReportSelectBusinessByMonth", //业务收入月报表

        couponSelect:"couponSelect",
        activeCouponRuleDetail:"activeCouponRuleDetail",   //活动优惠券规则详情
        activeCouponRuleSave:"activeCouponRuleSave",    //活动优惠券规则添加
        activeCouponRuleUpdate:"activeCouponRuleUpdate",   //活动优惠券规则更新
        activeCouponRuleDelete:"activeCouponRuleDelete",  //活动优惠券规则删除
        activeAwardRuleDelete:"activeAwardRuleDelete",   //活动奖励规则删除
        activeAwardRuleDetail:"activeAwardRuleDetail",  //活动奖励规则详情
        activeAwardTypeSelect:"activeAwardTypeSelect", //活动类型列表
        couponTypeSelect:"couponTypeSelect", //优惠券类型列表
        activeSave:"activeSave",  //活动基本信息添加
        activeUpdate:"activeUpdate",  //活动基本信息修改
        activeAwardRuleSave:"activeAwardRuleSave",  //活动奖励规则添加
        activeAwardRuleUpdate:"activeAwardRuleUpdate",  //活动奖励规则修改
        busSelectCitywide:"BusSelectCitywide",  //同城规则op
        busSelectTransRegional:"BusSelectTransRegional",  //跨城规则op
        busLineScheduleSelectDetail:"BusLineScheduleSelectDetail", //获取调度信息闲情
        selectRoleOption: "SysRoleSelectOption",     //获取角色下拉
        SysCompanySelectDetail:"SysCompanySelectDetail",    //公司详情
        selectCompanyOption: "companyOption",     //获取公司名下拉
        SysCompanySelect:"SysCompanySelect",//公司名模糊查询
        sysCompanySelectList:"SysCompanySelectList",    //公司名模糊查询
        SysRoleSelectTree: "SysRoleSelectTree",   //系统权限菜单树
        CompanyUserSelect:"CompanyUserSelect",      //商户系统 用户列表查询
        SysUserSelect:"SysUserSelect",      //运营系统 用户列表查询
        SysAppUserSelectDetail:"SysAppUserSelectDetail",      //运营系统 乘客详情查询
        SysVersionsSelectDetail:"SysVersionsSelectDetail",//系统管理  APP版本列表详情
        taxiDriver:"SysTaxiDriverSelectDetail",//出租车司机详情
        specialDriver:"SysSpecialcarDriverSelectDetail",//专车司机详情
        taxiDriverAudit:"TaxiDriverAuditSelectDetail",//出租车司机审核详情
        specialDriverAudit:"SpecialcarDriverAuditSelectDetail",//专车司机审核详情
        SysBrandSelectDetail:"SysBrandSelectDetail",//系统管理 车辆品牌详情
        carBrand:"SysBrandSelectByName" ,//品牌联想搜索
        carType:"SysBrandSelectByType" ,//品牌型号联想搜索
        taxiCarDetail:"SysTaxiCarSelectDetail",
        specialCarDetail:"SysSpecialcarSelectDetail",
        inspectCompanyUserLoginName: "inspectLoginName", //用户名是否存在
        companyTreeSelect:"companyTreeSelect",  //公司树
        sysUserSelectDetail:"SysUserSelectDetail",     //运营系统   运营用户详情查询
        sysUserUpdate:"SysUserUpdate",     //运营系统   运营用户修改
        passengerOrderHistory:"passengerOrderHistory",//乘客管理   追踪订单列表
        sysCompanyAuditSelectDetail: "SysCompanyAuditSelectDetail",     //公司审核详情
		SelectSysServiceDetail: "SelectSysServiceDetail",       //城市服务详情
        selectAllBusPosition : "",
        taxiCatgoryDelete: "taxiCatgoryDelete",   //城市服务出租车类型删除
        specialCarCatgoryDelete: "specialCarCatgoryDelete",      //城市服务专车类型删除
        sysMenuUpdate: "SysMenuUpdate",     //运营系统菜单修改
        companyMenuUpdate: "CompanyMenuUpdate",     //出租车商户系统菜单修改
        busCompanyMenuUpdate: "BusCompanyMenuUpdate",     //巴士商户系统菜单修改
        sysMenuSortUpdate: "SysMenuSortUpdate",     //运营系统菜单排序
        companyMenuSortUpdate: "CompanyMenuSortUpdate",     //出租车商户系统菜单排序
        busCompanyMenuSortUpdate: "BusCompanyMenuSortUpdate",     //巴士商户系统菜单排序
        BusPaidOrderSelectDetail:"BusPaidOrderSelectDetail", //巴士已支付订单详情
        BusRefundOrderSelectDetail:"BusRefundOrderSelectDetail",//巴士退款订单详情
        busSpecialTicketConfigSelectDetail: "BusSpecialTicketConfigSelectDetail",//巴士特价票详情
        positionSelect : "positionSelect",    //车辆位置
        trajectorySelect : "trajectorySelect",    //车辆轨迹
        instantSelect:"instantSelect",  //实时订单
        instantSelectCount:"instantSelectCount",    //实时订单总条数
        instantDetail:"instantDetail",      //实时订单详情
        reserveSelect:"reserveSelect",      //预约订单
        reserveSelectCount:"reserveSelectCount",        //预约订单总条数
        reserveDetail:"reserveDetail",      //预约订单详情
        userPassWordUpdate:"UserPassWordUpdate",//
        SysUserUpdate:"SysUserUpdate",//
        companyAudit:{
            selectImg: {
                selectImgLetterOfCommitment: "selectImgLetterOfCommitment", //  承诺书
                selectImgApplicationFormForProtection: "selectImgApplicationFormForProtection"  //  保护申请表
            },
            addImg:{
                addImgLetterOfCommitment: "addImgLetterOfCommitment",   //  承诺书
                addImgApplicationFormForProtection : "addImgApplicationFormForProtection"   //  保护申请表
            }
        },
        addServiceCityImg : {
            addSpecialCarCategoryMap : "addSpecialCarCategoryMap",//专车车型地图图标
            addSpecialCarCategoryIcon: "addSpecialCarCategoryIcon" ,//专车车型列表图标
            addTaxiCategoryMap: "addTaxiCategoryMap" ,//出租车车型地图图标
            addTaxiCategoryIcon: "addTaxiCategoryIcon"//出租车车型列表图标
        },
        selectServiceCityImg : {
            selectSpecialCarCategoryMap : "selectSpecialCarCategoryMap",   //专车车型地图图标
            selectSpecialCarCategoryIcon : "selectSpecialCarCategoryIcon",  //专车车型列表图标
            selectTaxiCategoryMap : "selectTaxiCategoryMap",    //出租车车型地图图标
            selectTaxiCategoryIcon: "selectTaxiCategoryIcon"    //出租车车型列表图标
        },
        //orderCount : {
        //        reserveErrorOrderCount : "reserveErrorOrderCount",//预约异常订单
        //        instantErrorOrderCount : "instantErrorOrderCount",//实时异常订单
        //        instantOrderCount : "instantOrderCount",//实时未完成订单
        //        reserveOrderCount : "reserveOrderCount",//预约未完成订单
        //        reserveHistoryOrderCount : "reserveHistoryOrderCount",//预约历史订单
        //        instantHistoryOrderCount  : "instantHistoryOrderCount",//实时历史订单
        //    }
        }
}
