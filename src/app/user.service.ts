import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  apiUrlRegister:string = 'http://localhost:4201/register';
  apiUrl:string = 'http://localhost:4201/users';
  apiMenu:string = 'http://localhost:4201/menu'


  registerUser(user:any) {
    return this.http.post(this.apiUrlRegister, user)
  }

  getUser(id:number) {
    return this.http.get(this.apiUrl+'/'+id)//'http://localhost:4201/users/1'
  }

  datiUtente(datiutente:any){
    return this.http.get(this.apiUrl, datiutente)
  }

  getpanini(title:string){
    return this.http.get(this.apiMenu + '?title=' + title)
  }
}
