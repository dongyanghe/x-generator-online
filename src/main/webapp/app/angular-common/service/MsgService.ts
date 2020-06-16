import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToasterService, Toast } from 'angular2-toaster';
import { CONFIG } from '../../data/CONFIG';
import { CODE } from '../../data/CODE';
/**
 * 消息提示代理类
 *
 */
@Injectable()
export class MsgService {
  constructor(private toasterService: ToasterService) {}

  /**
   * 打开toaster提示
   * 只有通过校验的提示才会展示
   * @param toastOption
   * @returns boolean 是否执行了消息弹出功能
   */
  public pop(toast: Toast): boolean {
    let self = this;
    if (!toast.body) {
      toast.body = CODE.systemError;
    }
    if (self.checkPopRepeat(toast)) {
      // debugger;
      //  bug:调用时可能为初始化
      self.toasterService.pop(toast);
      return true;
    }
    return false;
  }

  /**
   * 检查toaster提示是否重复
   * @param postId
   * @returns boolean 是否通过校验
   */
  public checkPopRepeat(toast: Toast): boolean {
    return true;
  }
}
