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
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { createRequestOption } from 'app/shared/util/request-util';
import { FieldMetadata } from './field-metadata.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FieldMetadataService {
  private metadataUrl = 'api/field-metadata';

  private jdlUrl = 'api/field';

  constructor(private http: HttpClient) {}

  update(fieldMetadata: FieldMetadata): Observable<FieldMetadata> {
    const copy = this.convert(fieldMetadata);
    return this.http.put<FieldMetadata>(this.metadataUrl, copy).pipe(map((res: FieldMetadata) => res));
  }

  find(id: number): Observable<FieldMetadata> {
    return this.http.get<FieldMetadata>(`${this.metadataUrl}/${id}`);
  }

  query(req?: any): Observable<FieldMetadata[]> {
    const options = createRequestOption(req);
    return this.http.get<FieldMetadata[]>(this.metadataUrl, { params: options });
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${this.jdlUrl}/${id}`);
  }

  private convert(fieldMetadata: FieldMetadata): FieldMetadata {
    const copy: FieldMetadata = Object.assign({}, fieldMetadata);
    return copy;
  }
}
