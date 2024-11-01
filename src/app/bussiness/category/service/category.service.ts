import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

Category_URL: string = environment.URL_API;
constructor(private httpClient: HttpClient) { }

getCategories(): Observable<any> {
  debugger
  return this.httpClient.get(this.Category_URL+"/api/v1/categories").pipe(res=> res);
}
}
