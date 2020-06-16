import { OnInit } from '@angular/core';
import { MsgService } from '../service/MsgService';
import { UtilityService } from '../service/UtilityService';
import { FormService } from '../service/FormService';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { HttpService } from '../service/HttpService';
import { FormControl, FormGroup } from '@angular/forms';
import { DynamicFormTemplate, FormControlBase, DynamicFormGroup } from '../module/dynamic-form/entity';
/**
 * 实体类
 */
import { Result } from '../../angular-common/entity/Result';
/**
 * 配置类
 */
import { CONFIG } from '../../data/CONFIG';
import { URL } from '../../data/URL';
import { CODE } from '../../data/CODE';
import { UserService } from '../service/UserService';

/**implements OnInit
 * @Title 表单页公共控制器，本模版跟业务强绑定
 * @Description 表单页基本功能的封装
 * @author hedongyang
 * @date 2017-07-03
 * @version V1.0
 */
export abstract class FormBaseComponent implements OnInit {
  /**
   * 页面载入后获取路径参数
   * ngOnInit触发后才有值
   * @type {{}}
   * @private
   */
  _params: any = {};
  imagesList: any;
  protected _requestUrl: string = URL[CONFIG.serviceType].requestUrl;
  _CONFIG: any = CONFIG;
  _CODE: any = CODE;
  private _URL: any = URL;
  // _url: {
  //   //  查询请求路径
  //   select?: string,
  //   //  新增和修改的请求路径
  //   save?: string,
  //   //  修改的请求路径
  //   update?: string,
  //   //  删除请求路径
  //   delete?: string,
  // };
  private _op: OP = new OP();
  _backUrl!: string; //  返回按钮跳转的页面
  private _templateName: string = 'form';
  _ifModal: boolean = false; // 默认不是弹窗
  private _isFormAddBol: boolean = true; // 是否是新增页面，默认根据formDataIdKeyStr是否有值来判断
  private _isFormModifyBol: boolean = false; // 表单是否被修改过，默认否
  _formControlLists!: Array<Array<FormControlBase<any> | DynamicFormGroup>>;
  /**
   * 必须理解数据模型是如何映射到表单模型中的属性的。
   * 用户修改时的数据流是从DOM元素流向表单模型（_form）的，而不是数据模型（_formData）。表单控件永远不会修改数据模型。
   */
  _formGroup!: FormGroup; //  由一堆FormControl组成
  _formData: any = {}; //  当前显示在界面的表单数据——void：模板驱动的表单使用改对象，如果是响应式表单则直接读取formGroup.value
  _orginalData: any = {}; //  原始传入或后台返回的表单数据，用于重置时恢复原数据，在数据源（eg:后台数据库）更新后需手动同步
  _moduleName: string = '';
  _componentNameStr: string = ''; //  模块名称
  //  有需要行选中功能或表单修改功能时这个参数必填
  _formDataIdKeyStr: string = 'id';
  _formDataNameKeyStr: string = 'name';
  _msgService!: MsgService;
  userService!: UserService;
  _activatedRoute!: ActivatedRoute;
  _httpService!: HttpService;
  private _nzModalModule?: NzModalModule;
  _router!: Router;

  /**
   * 初始化列表模块
   * @param activatedRoute
   * @param router
   * @param http
   * @param confirmationService
   * @param msgService
   */
  constructor(
    activatedRoute: ActivatedRoute,
    router: Router,
    http: HttpService,
    msgService: MsgService,
    userService: UserService,
    nzModalModule?: NzModalModule
  ) {
    // UtilityService.extendDeep(this, options);
    this._activatedRoute = activatedRoute;
    this.router = router;
    this.http = http;
    this.msgService = msgService;
    this.userService = userService;
  }

  /**
   * 生命周期
   * 在第一轮 ngOnChanges 完成之后调用。
   * ( 译注：也就是说当每个输入属性的值都被触发了一次 ngOnChanges 之后才会调用 ngOnInit ，
   * 此时所有输入属性都已经有了正确的初始绑定值 )
   * 1.获取params参数
   * 2.发起fetch查询
   * 3.判断是否是新增页
   * 4.初始化formGroup表单
   */
  ngOnInit(): void {
    // const pathname = window.location.pathname;
    //  路由改变后触发查询
    // this.router.events.filter(e => e instanceof NavigationEnd).subscribe(e => {
    //   const nowPathname = this.router.url.split(/^[\;\?]$/)[0];
    //   if (nowPathname == pathname) {
    //     this.fetch();
    //     // if (this.paginatorFlag) {
    //     //   this.getPageDataCount();
    //     // }
    //   }
    // });
    this.activatedRoute.params.subscribe(params => {
      console.dir('FormBaseComponent ngOnInit activatedRoute', params);
      this.params = params || {};
      //  如果orginalData没有id则从页面路径带的参数获取
      this.orginalData[this.formDataIdKeyStr] = this.orginalData[this.formDataIdKeyStr] || this.params[this.formDataIdKeyStr];
      //  如果未配置isFormAddBol则依据formDataId值来判断是否是新增页面
      if (this.isFormAddBol === null && !this.orginalData[this.formDataIdKeyStr]) {
        this.isFormAddBol = true;
      } else {
        this.isFormAddBol = false;
      }
      if (this.onBeforeOnInit()) {
        return;
      }
      this.formGroup = FormService.toFormGroup(...this.formControlLists);
      //  careful:formGroup改变时必须同步orginalData以保证formGroup初始数据与orginalData一致
      //  如果orginalData有值就覆盖formControlList默认的值
      this.formGroup.patchValue(this.orginalData || {});
      //  将formControlList和orginalData合并后的表单值赋给orginalData,orginalData保留原始数据（eg:id,type...）
      Object.assign(this.orginalData, this.formGroup.getRawValue());
      if (!this.onAfterOnInit(params) && this.orginalData[this.formDataIdKeyStr]) {
        // debugger;
        this.fetch();
      }
    });
    // this.orginalData = this.formGroup.value;
  }

  /**
   * Callback
   */
  onBeforeOnInit(): boolean {
    return false;
  }

  /**
   * Callback
   */
  onAfterOnInit(params: any): boolean {
    return false;
  }

  /**
   * Callback
   */
  onBeforeQuery(): boolean {
    return false;
  }

  /**
   * 查询前置切入
   * eg:
   * 1.后台格式转为视图格式
   * 2.单位转换
   */
  onAfterQuery(response: any, result: Result): boolean {
    return false;
  }

  /**
   * 保存前置切入
   * eg:
   * 1.视图格式转为后台格式
   * 2.单位转换
   * 3.表单校验
   * return: true 中断保存
   */
  onBeforeSave(): boolean {
    return false;
  }

  /**
   * 保存后置切入
   * return: true 中断成功操作
   */
  onAfterSave(result: any): boolean {
    return false;
  }
  /**
   * 保存前置切入
   * return: true 中断保存
   */
  onBeforeUpdate(): boolean {
    return false;
  }

  /**
   * 保存后置切入
   * return: true 中断成功操作
   */
  onAfterUpdate(result: any): boolean {
    return false;
  }

  /**
   * Callback
   */
  onBeforeDataQueried(data: any): boolean {
    return false;
  }

  /**
   * Callback
   */
  onAfterDataQueried(data: any): boolean {
    return false;
  }

  // 删除
  onBeforeDelete(): boolean {
    return false;
  }

  onAfterDelete(result: any): boolean {
    return false;
  }

  // 重置
  onBeforeReset(): boolean {
    return false;
  }

  onAfterReset(): boolean {
    return false;
  }

  /**
   * 返回
   * 有返回页backStateName时就返回该页，没有则返回上一页
   * bug:弹窗模式下，数据有修改或新增时对应表格应刷新
   */
  back(type: string = 'onOk', param: any = {}): void {
    if (this._ifModal) {
      console.error('modal unBack');
    } else if (this.backUrl) {
      this.router.navigateByUrl(this.backUrl, param);
    } else {
      history.back();
    }
  }

  /**
   * 查询表单调用方法：
   */
  fetch(): void {
    if (this.onBeforeQuery()) {
      return;
    }
    let url = this.userService.getUrl(this.op.detail, this.moduleName);
    let reqData = {
      data: this.orginalData,
      op: this.op.detail
    };
    /**
     * 请求成功处理
     * 请求成功且errcode为通过
     * @param response
     * @param result
     */
    let success = (response: any, result: Result = new Result()) => {
      if (!result.data) {
        this.msgService.pop({ type: 'error', body: CODE.dataError });
        return;
      }
      this.orginalData = result.data;
      //  将数据模型的部分值赋给表单模式用以展示
      this.formGroup.reset(this.orginalData);
    };
    /**
     * 异常处理
     * 带exception为请求异常或代码异常，其中请求异常拦截器会有所处理
     * @param response
     * @param exception
     */
    let error = (response: any, exception?: any) => {
      if (exception) {
        console.error(exception);
      }
    };
    this.http.post(url, reqData).subscribe(
      (response: any) => {
        try {
          let result: Result = new Result(response.json());
          /*如果返回正常*/
          if (result.code === CONFIG.ok) {
            if (this.onAfterQuery(response, result)) {
              return;
            }
            success(response, result);
          } else {
            /*后台返回异常*/
            this.msgService.pop({ type: 'error', body: result.msg });
            error(response);
          }
        } catch (exception) {
          error(response, exception);
        }
        // line = data;
      },
      (response: any) => {
        error(response);
      }
    );
  }

  /**
   * 新增
   */
  save(): void {
    // 把视图上的数据赋给模型formData
    // this.formData = this.formGroup.value;
    let formData = this.formGroup.getRawValue();
    this.formData = Object.assign({}, this.orginalData, this.formGroup.getRawValue());
    // this.formData =  UtilityService.extendDeep( this.orginalData, this.formGroup.value);
    if (this.onBeforeSave()) {
      return;
    }
    if (this.formGroup.status !== 'VALID') {
      this.msgService.pop({ type: 'info', body: CODE.formError });
      return;
    }
    let url = this.userService.getUrl(this.op.save, this.moduleName);
    let reqData = {
      data: UtilityService.deleteEmptyAttr(this.formData),
      op: this.op.save
    };
    /**
     * 请求成功处理
     * 请求成功且errcode为通过
     * @param response
     * @param result
     */
    let success = (response: any, result?: Result) => {
      this.msgService.pop({ type: 'success', body: CODE.saveSuccess });
      this.reset();
      this.back();
    };
    /**
     * 异常处理
     * 带exception为请求异常或代码异常，其中请求异常拦截器会有所处理
     * @param response
     * @param exception
     */
    let error = (response: any, exception?: any) => {
      if (exception) {
        console.error(exception);
      }
    };
    this.http.post(url, reqData).subscribe(
      (response: any) => {
        try {
          let result: Result = new Result(response.json());
          /*如果返回正常*/
          if (result.code === CONFIG.ok) {
            if (this.onAfterSave(result)) {
              return;
            }
            success(response, result);
          } else {
            /*后台返回异常*/
            this.msgService.pop({ type: 'error', body: result.msg });
            error(response);
          }
        } catch (exception) {
          error(response, exception);
        }
        // line = data;
      },
      (response: any) => {
        error(response);
      }
    );
  }

  /**
   * 修改方法
   * 部分save接口方法也能修改
   */
  update(): void {
    // 把视图上的数据赋给模型formData
    this.formData = Object.assign({}, this.orginalData, this.formGroup.getRawValue());
    // let a =  UtilityService.extendDeep({}, this.orginalData, this.formGroup.value);
    //  this.formData =  UtilityService.extendDeep({}, this.orginalData, this.formGroup.value);

    if (this.onBeforeUpdate()) {
      return;
    }
    if (this.formGroup.status !== 'VALID') {
      this.msgService.pop({ type: 'info', body: CODE.formError });
      return;
    }
    let url = this.userService.getUrl(this.op.update, this.moduleName);
    let reqData = {
      data: UtilityService.deleteEmptyAttr(this.formData),
      op: this.op.update
      //  token:'MjAxNzEyMjAxMjA0MTk2MTc6YWRtaW46QEIjMzImKkFCYWI6REVTS1RPUC1FVEkyREhUOjA\\u003d\\'
    };
    /**
     * 请求成功处理
     * 请求成功且errcode为通过
     * @param response
     * @param result
     */
    let success = (response: any, result?: Result) => {
      console.error('success', response, result);
      this.msgService.pop({ type: 'success', body: CODE.updateSuccess });
      this.orginalData = Object.assign({}, this.orginalData, this.formGroup.getRawValue());
      // this.orginalData = JSON.parse(JSON.stringify(this.formGroup.value));
      this.back();
    };
    /**
     * 异常处理
     * 带exception为请求异常或代码异常，其中请求异常拦截器会有所处理
     * @param response
     * @param exception
     */
    let error = (response: any, exception?: any) => {
      if (exception) {
        console.error('error', response, exception);
      }
    };
    this.http.post(url, reqData).subscribe(
      (response: any) => {
        try {
          let result: Result = new Result(response.json());
          /*如果返回正常*/
          if (result.code === CONFIG.ok) {
            if (this.onAfterUpdate(result)) {
              return;
            }
            success(response, result);
          } else {
            /*后台返回异常*/
            this.msgService.pop({ type: 'error', body: result.msg });
            error(response);
          }
        } catch (exception) {
          error(response, exception);
        }
        // line = data;
      },
      (response: any) => {
        error(response);
      }
    );
  }

  /**
   * 删除
   */
  delete(): void {
    if (this.onBeforeDelete()) {
      return;
    }
    let url = this.userService.getUrl(this.op.delete, this.moduleName);
    let reqData = {
      data: UtilityService.deleteEmptyAttr(this.formGroup.getRawValue()),
      op: this.op.delete
    };
    /**
     * 请求成功处理
     * 请求成功且errcode为通过
     * @param response
     * @param result
     */
    let success = (response: any, result?: Result) => {
      console.error('success', response, result);
      this.msgService.pop({ type: 'success', body: CODE.saveSuccess });
      this.back();
    };
    /**
     * 异常处理
     * 带exception为请求异常或代码异常，其中请求异常拦截器会有所处理
     * @param response
     * @param exception
     */
    let error = (response: any, exception?: any) => {
      if (exception) {
        console.error('error', response, exception);
      }
    };
    this.http.post(url, reqData).subscribe(
      (response: any) => {
        try {
          let result: Result = new Result(response.json());
          /*如果返回正常*/
          if (result.code === CONFIG.ok) {
            if (this.onAfterDelete(result)) {
              return;
            }
            success(response, result);
          } else {
            /*后台返回异常*/
            this.msgService.pop({ type: 'error', body: result.msg });
            error(response);
          }
        } catch (exception) {
          error(response, exception);
        }
        // line = data;
      },
      (response: any) => {
        error(response);
      }
    );
  }

  /**
   * 重置按钮的调用方法：
   */
  reset(): void {
    this.onBeforeReset();
    this.formGroup.reset({});
    this.formGroup.reset(this.orginalData || {});
    this.onAfterReset();
  }

  get ifModal(): boolean {
    return this._ifModal;
  }

  set ifModal(value: boolean) {
    this._ifModal = value;
  }

  get formData(): any {
    return this._formData;
  }

  set formData(value: any) {
    this._formData = value;
  }

  get orginalData(): any {
    return this._orginalData;
  }

  set orginalData(value: any) {
    this._orginalData = value;
  }

  get requestUrl(): string {
    return this._requestUrl;
  }

  set requestUrl(value: string) {
    this._requestUrl = value;
  }

  get backUrl(): string {
    return this._backUrl;
  }

  set backUrl(value: string) {
    this._backUrl = value;
  }

  get formDataIdKeyStr(): string {
    return this._formDataIdKeyStr;
  }

  set formDataIdKeyStr(value) {
    this._formDataIdKeyStr = value;
  }

  get formDataNameKeyStr(): string {
    return this._formDataNameKeyStr;
  }

  set formDataNameKeyStr(value) {
    this._formDataNameKeyStr = value;
  }

  get CONFIG(): any {
    return this._CONFIG;
  }

  set CONFIG(value: any) {
    this._CONFIG = value;
  }

  get msgService(): MsgService {
    return this._msgService;
  }

  set msgService(value: MsgService) {
    this._msgService = value;
  }

  get http(): HttpService {
    return this._httpService;
  }

  set http(value: HttpService) {
    this._httpService = value;
  }

  get router(): Router {
    return this._router;
  }

  set router(value: Router) {
    this._router = value;
  }

  get activatedRoute(): ActivatedRoute {
    return this._activatedRoute;
  }

  set activatedRoute(value: ActivatedRoute) {
    this._activatedRoute = value;
  }

  get params(): any {
    return this._params;
  }

  set params(value: any) {
    this._params = value;
  }

  get CODE(): any {
    return this._CODE;
  }

  set CODE(value: any) {
    this._CODE = value;
  }

  get templateName(): string {
    return this._templateName;
  }

  set templateName(value) {
    this._templateName = value;
  }

  get formGroup(): FormGroup {
    return this._formGroup;
  }

  set formGroup(value: FormGroup) {
    this._formGroup = value;
  }

  get formControlLists(): Array<Array<FormControlBase<any> | DynamicFormGroup>> {
    return this._formControlLists;
  }

  set formControlLists(value: Array<Array<FormControlBase<any> | DynamicFormGroup>>) {
    this._formControlLists = value;
  }

  get moduleName(): string {
    return this._moduleName;
  }

  set moduleName(value: string) {
    this._moduleName = value;
  }
  get componentNameStr(): string {
    return this._componentNameStr;
  }

  set componentNameStr(value: string) {
    this._componentNameStr = value;
  }

  get URL(): any {
    return this._URL;
  }

  set URL(value: any) {
    this._URL = value;
  }

  get op(): OP {
    return this._op;
  }

  set op(value: OP) {
    this._op = value;
  }

  get isFormAddBol(): boolean {
    return this._isFormAddBol;
  }

  set isFormAddBol(value: boolean) {
    this._isFormAddBol = value;
  }

  get isFormModifyBol(): boolean {
    return this._isFormModifyBol;
  }

  set isFormModifyBol(value: boolean) {
    this._isFormModifyBol = value;
  }

  get nzModalModule(): NzModalModule | undefined {
    return this._nzModalModule;
  }

  set nzModalModule(value: NzModalModule | undefined) {
    this._nzModalModule = value;
  }
}

class OP {
  detail: string = URL.op.detail;
  save: string = URL.op.save;
  update: string = URL.op.update;
  delete: string = URL.op.delete;
}
