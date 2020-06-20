import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { FormGroup, NgModel, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { HttpService } from '../../service/HttpService';
import { DynamicFormTemplate, FormControlBase, Textbox, SelectDialog } from './entity';
import { NzRadioGroupComponent } from 'ng-zorro-antd';
import { VALIDATION } from '../../../data/VALIDATION';

import * as moment from 'moment';
import { UtilityService } from '../../service/UtilityService';
import { MsgService } from '../../service/MsgService';
import { FormService } from '../../service/FormService';

@Component({
  selector: 'x-dynamic-form',
  templateUrl: 'dynamic-form.component.html',
  providers: [MsgService, UtilityService, NzRadioGroupComponent],
  styleUrls: ['dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() formData?: any; //  void:作废
  @Input() formControlList!: Array<FormControlBase<any>>;
  @Input() type!: String;
  @Input() title?: String;
  @Input() msg?: String;
  @Input() msgLink?: String;
  selectedColumn: any;
  VALIDATION: any = VALIDATION;
  constructor(public nzModalService: NzModalService, httpService: HttpService) {}
  ngOnInit(): void {
    // console.log('DynamicFormComponent form：', this.formGroup);
    // console.log('DynamicFormComponent templateName：', this.formControlList);
  }
  getValidationMsg(validationStr: string): string {
    let msg = '输入格式有误';
    if (VALIDATION[validationStr]) {
      msg = VALIDATION[validationStr].label;
    } else {
      const regExpList = validationStr.split('_');
      if (regExpList[0] === 'float') {
        const m: any = regExpList.length > 1 ? '最多' + regExpList[1] : '任意';
        const n: any = regExpList.length > 2 ? '最多' + regExpList[2] : '任意';
        // m = m > 1 ? (m - 1) : 0;
        // n = n > 0 ? n : 0;

        msg = VALIDATION[regExpList[0]].label;
        msg = msg.replace('regexp_m', m);
        msg = msg.replace('regexp_n', n);
      }
    }
    return msg;
  }
}
