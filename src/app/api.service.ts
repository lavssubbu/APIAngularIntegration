import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './Company';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
   
  private apiurl ="https://localhost:7113/api/Companies"

  constructor(private http:HttpClient) { }
  
  get():Observable<any>
  {
     return this.http.get(this.apiurl);
  }

  getbyid(id:number):Observable<any>
  {
    return this.http.get(`${this.apiurl}/${id}`)
  }

  postcomp(company:Company):Observable<any>
  {
     return this.http.post<any>(`${this.apiurl}`,company)
  }

  deletecomp(id:number):Observable<any>
  {
    return this.http.delete<any>(`${this.apiurl}/${id}`)
  }
  updateComp(id:number,company: Company): Observable<Company> {
    return this.http.put<Company>(`${this.apiurl}/${id}`,company);
  }
}
