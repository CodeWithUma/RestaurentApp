import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  data: any;
  constructor(private _http: HttpClient) {}
  id: any;

  // CREATE RESTAURENT USING POST METHOD
  postRestaurent(data: any) {
    return this._http.post<any>('http://localhost:3000/posts', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  // GET RESTAURENT DATA USING GET METHOD
  getRestaurent() {
    return this._http.get<any>('http://localhost:3000/posts').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  // UPDATE RESTAURENT DATA USING PUT METHOD
  updateRestaurent() {
    return this._http
      .put<any>('http://localhost:3000/posts/' + this.id, this.data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  // DELETE RESTAURENT DATA USING DELETE METHOD
  deleteRestaurent() {
    return this._http
      .delete<any>('http://localhost:3000/posts/' + this.id)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
