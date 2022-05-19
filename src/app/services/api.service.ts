import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getAllPost(): Observable<any> {
    const url = this.apiUrl + '/posts';
    return this.http.get(url);
  }

  deletePost(paramId: number): Observable<any> {
    const url = this.apiUrl + '/posts/' + paramId;
    return this.http.delete(url);
  }

  getAllPostUsingRxjs(): Observable<any> {
    const url = this.apiUrl + '/posts';
    // getJSON similar with http get request. 
    return ajax.getJSON(url).pipe(
      map((data: any) => {
        if (data.length > 0) {
          data.map((eachData: any) => {
            eachData.author = eachData.author.toUpperCase();
            return eachData;
          });
        }
        return data
      }),
      catchError((error) => {
        return throwError(error);
      }));
  }
}
