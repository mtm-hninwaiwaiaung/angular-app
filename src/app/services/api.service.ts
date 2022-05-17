import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../interfaces/interface';

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

  getEachPostDetail(paramId: number): Observable<any> {
    const url = this.apiUrl + '/posts/' + paramId;
    return this.http.get(url);
  }

  deletePost(paramId: number): Observable<any> {
    const url = this.apiUrl + '/posts/' + paramId;
    return this.http.delete(url);
  }

  editPost(paramData: Post): Observable<any> {
    const url = this.apiUrl + '/posts/' + paramData.id;
    const option = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.http.put(url, paramData, option);
  }

  createPost(paramData: Post): Observable<any> {
    const url = this.apiUrl + '/posts';
    const option = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.http.post(url, paramData, option);
  }

}
