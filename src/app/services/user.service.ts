import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL: string = "http://localhost:3000/api/users";
  constructor(private http: HttpClient) { }
  Login(user) {
    return this.http.post<{user:any;msg:string}>(this.userURL + "/login", user);
  }
  getUserById(id){
    return this.http.get<{user:any;msg:string}>(`${this.userURL}/${id}`)
  }
  singup(user: any, avatar: File) {
    let formData = new FormData();
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("pwd", user.pwd);
    formData.append("img", avatar);
    return this.http.post(this.userURL + "/signup", formData);

  }
  edit(user:any,avatar:File){
    let formData = new FormData();
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("pwd", user.pwd);
    formData.append("img", avatar);
    return this.http.put(this.userURL,formData);
  }
}
