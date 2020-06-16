import { NgModule } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { NgZorroAntdModule, NzRadioGroupComponent } from 'ng-zorro-antd';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ValueToLabelPipe, ValueToLabelImpurePipe } from '../pipe/DictPipe';
// import {DpDatePickerModule} from 'ng2-date-picker';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NzRadioGroupComponent,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [DynamicFormComponent, ValueToLabelPipe, ValueToLabelImpurePipe],
  exports: [DynamicFormComponent],
  providers: []
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProjectCommonModule {}
