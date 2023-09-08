import data from 'src/assets/json/data.json';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGetContentResponse } from '../content';
import { Observable } from 'rxjs';

@Injectable()
export class ContentService {
  private _url: string = '/assets/json/data.json';

  constructor(private http: HttpClient) {}
  // Emulate the API call to get data from the JSON file
  getContent(): Observable<IGetContentResponse> {
    return this.http.get<IGetContentResponse>(this._url);
  }


}
