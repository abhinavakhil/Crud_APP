import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

   getAll():Observable<any>{
     return this.http.get('http://localhost:3000/users');
   }

   create(user):Observable<any>{
     return this.http.post('http://localhost:3000/users/create',user);
   }

   update(id,data):Observable<any>{
     return this.http.put(`http://localhost:3000/users/${id}/update`,data);
   }

   delete(id):Observable<any>{
    return this.http.delete(`http://localhost:3000/users/${id}/delete`);
  }
}
