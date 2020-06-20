import { PipeTransform, Pipe } from '@angular/core';
import { DateService } from '../service/DateService';

@Pipe({
  name: 'translationDate'
})
export class TranslationDatePipe implements PipeTransform {
  /**
   * 将时间转换为语意化的描述
   * 转换格式：2月18日 后天（周三）
   * @param dateAny
   * @param format
   * @returns {any}
   */
  transform(dateAny: Date | string | number, format: any): string {
    if (!dateAny) {
      // 判断空
      return '';
    }
    return DateService.dateFormat(dateAny, format);
  }
}
/**
 * 同上
 * 非纯版
 */
@Pipe({
  name: 'translationDateImpure',
  pure: false
})
export class TranslationDateImpurePipe extends TranslationDatePipe implements PipeTransform {}
