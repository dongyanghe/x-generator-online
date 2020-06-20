import { Injectable } from '@angular/core';
//  import { BrowserService } from '../../angular2Common/service/BrowserService';

/**
 * by chenxingwu,hedongyang
 * 此处时间的处理代码，还需再优化，不要着急
 * 分析参数类型，容错判断
 */
@Injectable()
export class DateService {
  /**
   * 日期对象转为日期字符串
   * @param date 需要格式化的日期对象
   * @param sFormat 输出格式,默认为yyyy-MM-dd                         年：y，月：M，日：d，时：h，分：m，秒：s
   * @example  dateFormat(new Date())                                '2017-02-28'
   * @example  dateFormat(new Date(),'yyyy-MM-dd')                   '2017-02-28'
   * @example  dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss')         '2017-02-28 12:24:00'
   * @example  dateFormat(new Date(),'yyyy-MM-dd HH:mm:ss')         '2017-02-28 24:24:00'
   * @example  dateFormat(new Date(),'hh:mm')                       '09:24'
   * @example  dateFormat(new Date(),'yyyy-MM-ddThh:mm:ss+08:00')   '2017-02-28T09:24:00+08:00'
   * @returns {string}
   */
  static dateFormat(date: Date | string | number, sFormat: String = 'yyyy-MM-dd HH:mm:ss'): string {
    if (!date) {
      return '';
    }
    if (typeof date === 'string') {
      //  兼容苹果系统
      date = new Date(date.replace(/-/g, '/'));
    }
    if (typeof date === 'number') {
      // 考虑了纯秒数传入情况
      date = new Date(date);
    }
    if (!(date instanceof Date)) {
      return '';
    }
    let time = {
      Year: 0,
      TYear: '0',
      Month: 0,
      TMonth: '0',
      Day: 0,
      TDay: '0',
      Hour: 0,
      THour: '0',
      hour: 0,
      Thour: '0',
      Minute: 0,
      TMinute: '0',
      Second: 0,
      TSecond: '0',
      Millisecond: 0
    };
    time.Year = date.getFullYear();
    time.TYear = String(time.Year).substr(2);
    time.Month = date.getMonth() + 1;
    time.TMonth = time.Month < 10 ? '0' + time.Month : String(time.Month);
    time.Day = date.getDate();
    time.TDay = time.Day < 10 ? '0' + time.Day : String(time.Day);
    time.Hour = date.getHours();
    time.THour = time.Hour < 10 ? '0' + time.Hour : String(time.Hour);
    time.hour = time.Hour < 13 ? time.Hour : time.Hour;
    time.Thour = time.hour < 10 ? '0' + time.hour : String(time.hour);
    time.Minute = date.getMinutes();
    time.TMinute = time.Minute < 10 ? '0' + time.Minute : String(time.Minute);
    time.Second = date.getSeconds();
    time.TSecond = time.Second < 10 ? '0' + time.Second : String(time.Second);
    time.Millisecond = date.getMilliseconds();
    console.log(
      'dateFormat：',
      date,
      sFormat,
      sFormat
        .replace(/yyyy/gi, String(time.Year))
        .replace(/yyy/gi, String(time.Year))
        .replace(/yy/gi, time.TYear)
        .replace(/y/gi, time.TYear)
        .replace(/MM/g, time.TMonth)
        .replace(/M/g, String(time.Month))
        .replace(/dd/gi, time.TDay)
        .replace(/d/gi, String(time.Day))
        .replace(/HH/g, time.THour)
        .replace(/H/g, String(time.Hour))
        .replace(/hh/g, time.Thour)
        .replace(/h/g, String(time.hour))
        .replace(/mm/g, time.TMinute)
        .replace(/m/g, String(time.Minute))
        .replace(/ss/gi, time.TSecond)
        .replace(/s/gi, String(time.Second))
        .replace(/fff/gi, String(time.Millisecond))
    );
    return sFormat
      .replace(/yyyy/gi, String(time.Year))
      .replace(/yyy/gi, String(time.Year))
      .replace(/yy/gi, time.TYear)
      .replace(/y/gi, time.TYear)
      .replace(/MM/g, time.TMonth)
      .replace(/M/g, String(time.Month))
      .replace(/dd/gi, time.TDay)
      .replace(/d/gi, String(time.Day))
      .replace(/HH/g, time.THour)
      .replace(/H/g, String(time.Hour))
      .replace(/hh/g, time.Thour)
      .replace(/h/g, String(time.hour))
      .replace(/mm/g, time.TMinute)
      .replace(/m/g, String(time.Minute))
      .replace(/ss/gi, time.TSecond)
      .replace(/s/gi, String(time.Second))
      .replace(/fff/gi, String(time.Millisecond));
  }
  /**
   * 日期的加减，只是天数的加减
   *
   * @param date,num
   * @return date
   */
  addDate(date: string | Date, num: number): Date {
    if (!date) {
      date = new Date(); // 如果没有传入，默认为当前时间
    }
    if (!num) {
      num = 0; // 如果没有传入，默认为0
    }
    if (typeof date == 'string') {
      let dateArr = date.replace(/-/g, '/');
      date = new Date(dateArr); // 转date对象
    } else {
      date = date.toString();
      let dateArr = date.replace(/-/g, '/');
      date = new Date(dateArr);
    }
    if (typeof date == 'number') {
      // 考虑纯秒数传入情况
      date = new Date(date);
    }
    date = date.valueOf();
    date = date + num * 24 * 60 * 60 * 1000;
    date = new Date(date);
    return date;
  }
}
