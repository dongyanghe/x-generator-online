import { Injectable } from '@angular/core';
import { User } from '../entity/User';
import 'rxjs/add/operator/map';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
/**
 * 全局变量
 */
import { CONFIG } from '../../data/CONFIG';
import { URL } from '../../data/URL';
import { UtilityService } from './UtilityService';

@Injectable()
export class UserService {
  expiresDate!: Date;

  private _user: User = new User();
  private i: number = 1;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    let self = this;
    const userStr = window.localStorage.getItem('userStr');
    if (userStr) {
      try {
        self._user.JSONStringTo(userStr);
      } catch (e) {
        console.error(e);
        self._user = new User();
      }
    }
    self._user.permissionUrl = UtilityService.isEmptyProperty(self._user.permissionUrl) ? URL.permissionUrl : self._user.permissionUrl;
    //   刷新页面会重新获取请求权限，未防止时差，先从会话取数据
    // const permissionUrlStr = window.sessionStorage.getItem('permissionUrl');
    // if (permissionUrlStr) {
    //   self._user.permissionUrl = JSON.parse(permissionUrlStr);
    // }
    // self.http = http;
    self.expiresDate = new Date();
    self.expiresDate.setTime(self.expiresDate.getTime() + CONFIG.loginTime);
    window.console.info('UserService i' + self.i++);
    window.console.info('UserService self.expiresDate' + self.expiresDate);
  }
  /**
   * 返回拥有权限的请求地址
   * @param opration  :请求op
   * @param {string} moduleName 模块名称或者页面路由
   * @param type  请求类型，mock=虚拟数据
   * @returns {any}
   */
  public getUrl(opration: string, moduleName: string = this.router.url.replace('/workspace/', ''), type = ''): string {
    //  需登录的请求若未登录则返回空字符串
    if (opration !== URL.permissionUrl.common.heartbeat && opration !== URL.permissionUrl.common.login) {
      //  未登录不返回url也不报错
      if (!this.user) {
        console.warn('该请求路径需要登录：', opration, moduleName, type);
        return '';
      }
    }
    if (!moduleName) {
      moduleName = this.router.url.replace('/workspace/', '');
    }
    moduleName = moduleName.split(';')[0];
    console.dir(this.activatedRoute);
    if (!this.user.permissionUrl[moduleName]) {
      console.warn('找不到对应的请求路径：', opration, moduleName, type);
      return '';
    }
    if (!this.user.permissionUrl[moduleName][opration]) {
      console.warn('找不到对应的请求路径：', opration, moduleName, type);
      return '';
    }
    if (type === 'mock') {
      return this.user.permissionUrl[moduleName][opration] + '.json';
    } else {
      return this.user.url + this.user.permissionUrl[moduleName][opration];
    }
  }
  /**
   * 发送登录请求
   * 需先调用accessServer()
   * bug:设备号是临时的
   * @param user {code:验证码，phone：手机号；deviceId:设备号}
  login(user: { code: string, phone: string, deviceId?: string }) {

  }
   */

  /**
   * 退出登录(清空cookieService数据)
   */
  logout(): void {
    let self = this;
    window.localStorage.setItem('userStr', '');
    self.user = new User();
    /*self.toastCtrl.create({
     message: CODE[705],//提示弹窗
     duration: 3000, //时间周期,毫秒
     position: 'top'
     }).present();*/
  } //  logout -end

  /**
   * 校验登录信息
   * @return true：登录信息有效  false:登录信息无效
   */
  checkLogin(): boolean {
    return true;
    // if (this.user && this.user.id && this.user.token) {
    //   return true;
    // } else {
    //   return false;
    // }
  }
  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
