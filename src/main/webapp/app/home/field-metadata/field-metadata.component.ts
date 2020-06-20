/**
 * Copyright 2017-2020 the original author or authors from the JHipster Online project.
 *
 * This file is part of the JHipster Online project, see https://github.com/jhipster/jhipster-online
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { JhiAlertService, JhiEventManager } from 'ng-jhipster';
// import { FieldMetadata } from './field-metadata.model';
// import { FieldMetadataService } from './field-metadata.service';
import { AccountService } from 'app/core/auth/account.service';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'jhi-field-metadata',
  templateUrl: './field-metadata.component.html'
})
// implements OnInit, OnDestroy
export class FieldMetadataComponent {
  params: any = {};
  url = `/user`;
  @ViewChild('st', { static: true })
  st!: STComponent;
  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号'
      }
    }
  };
  columns: STColumn[] = [
    { title: '编号', index: 'no' },
    { title: '调用次数', type: 'number', index: 'callNo' },
    { title: '头像', type: 'img', width: '50px', index: 'avatar' },
    { title: '时间', type: 'date', index: 'updatedAt' }
  ];

  constructor(
    // private fieldMetadataService: FieldMetadataService,
    private alertService: JhiAlertService,
    private eventManager: JhiEventManager,
    private accountService: AccountService,
    private http: _HttpClient
  ) {}

  // ngOnInit(): void {
  //   console.log('ngOnInit')
  // }

  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy')
  // }
}
