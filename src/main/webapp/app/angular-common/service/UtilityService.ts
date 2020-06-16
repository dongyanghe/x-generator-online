import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { DynamicFormTemplate, FormControlBase, EditDynamicTableCol, EditDynamicTable } from '../module/dynamic-form/entity';

@Injectable()
export class UtilityService {
  /**
   * @Title 判断空
   * @Description 判断空
   * @author hedongyang
   * @param value
   * @returns {Boolean} 空返回true
   */
  static isEmpty(value: any): value is Object {
    if (typeof value === 'string' || value instanceof String) {
      value = value.replace(/\s/g, '');
    }
    if (value === null) {
      return !!1;
    }
    if (value === undefined || value === 'undefined') {
      return !!1;
    }
    if (value === '') {
      return !!1;
    }
    if (value.length === 0) {
      return !!1;
    }
    if (!/[^(^\s*)|(\s*$)]/.test(value)) {
      return !!1;
    }
    return !!0;
  }

  /**
   * 判断obj对象是否没有属性
   * 空返回true
   * @param obj 只接收obj
   * @returns {boolean}
   */
  static isEmptyProperty(value: any): value is Object {
    let key;
    for (key in value) {
      if (value.hasOwnProperty(key)) {
        return !!0; //  不为空返回false
      }
    }
    return !!1; //  空返回true
  }

  /**
   * @ngdoc function
   * @name angular.isObject
   * @module ng
   * @kind function
   *
   * @description
   * Determines if a reference is an `Object`. Unlike `typeof` in JavaScript, `null`s are not
   * considered to be objects. Note that JavaScript arrays are objects.
   *
   * @param {*} value Reference to check.
   * @returns {boolean} True if `value` is an `Object` but not `null`.
   */
  static isObject(value: any): value is Object {
    //  http:// jsperf.com/isobject4
    return value !== null && typeof value === 'object';
  }

  /**
   * @Title  深度不带地址拷贝
   * @Description 将多个参数的属性拷贝给第一个参数
   * @author hedongyang
   * @version V1.0
   */
  static extendDeep(...paramList: Array<any>): any {
    //  dst为要拷入属性值的对象，使用浅拷贝去除第一级地址指向
    let dst = paramList[0]; //  Object.assign({}, paramList[0]);
    for (const obj of paramList) {
      if (obj !== dst) {
        for (const key in obj) {
          /*排除原型属性*/
          if (obj.hasOwnProperty(key)) {
            let value = obj[key];
            let dstValue = dst[key];
            if (this.isObject(dstValue) || Array.isArray(dstValue)) {
              this.extendDeep(dst[key], value);
            } else {
              if (!value || !value.__proto__) {
                dst[key] = value;
              } else {
                dst[key] = Object.assign(value);
              }
            }
          }
        }
      }
    }
    return dst;
  }
  /**
   * Object删除空属性
   * @param val,n
   * @returns [] 选中的数据
   */
  static deleteEmptyAttr(obj: Object): Object {
    for (let i in obj) {
      if (this.isEmpty(obj[i])) {
        delete obj[i];
      }
    }
    return obj || {};
  }
}
