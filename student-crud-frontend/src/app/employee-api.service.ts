import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from './model/Employee';

@Injectable({ providedIn: 'root' })
export class EmployeeApiService {
  private apiUrl = '/employees';

  constructor(private http: HttpClient) {}

  getAll(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(this.apiUrl + '/');
  }

  getById(id: number): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>(`${this.apiUrl}/${id}`);
  }

  create(employee: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(this.apiUrl + '/', employee);
  }

  update(id: number, employee: EmployeeModel): Observable<EmployeeModel> {
    return this.http.put<EmployeeModel>(`${this.apiUrl}/${id}`, employee);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
