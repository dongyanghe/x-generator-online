// import { CONFIG } from "../../data/CONFIG";

/**
 * 响应数据容器
 * @author   hedongyang
 * @version  1.0
 * @since
 * @see
 */
export class Result {
  get data(): any {
    // 自动将json字符串转换成data对象
    if (this._data && typeof this._data === 'string' && (this._data.indexOf('{') > -1 || this._data.indexOf('[') > -1)) {
      try {
        this._data = JSON.parse(this._data);
      } catch (error) {
        console.error('result error info：', this._data);
      }
    }
    return this._data;
  }

  set data(value: any) {
    this._data = value;
  }

  get code(): number {
    return this._code;
  }

  set code(value: number) {
    this._code = value;
  }

  get msg(): string {
    return this._msg;
  }

  set msg(value: string) {
    this._msg = value;
  }
  /**
   * 信息体字符串
   */
  private _data: any = {};
  /**
   * msg
   */
  private _msg: string;
  /**
   * 网关响应码
   */
  private _code: number;

  constructor(obj?: any) {
    this._data = obj.data;
    this._code = obj.code;
    this._msg = obj.msg;
    // 自动将json字符串转换成data对象
    if (this._data && typeof this._data === 'string' && (this._data.indexOf('{') > -1 || this._data.indexOf('[') > -1)) {
      try {
        this._data = JSON.parse(this._data);
      } catch (error) {
        console.error('result error info：', this._data);
      }
    }
  }
}

/**
 * 表格列表数据
 */
class DataList {
  currentPage!: number;
  pageSize!: number;
  body!: Array<Object>;
}
