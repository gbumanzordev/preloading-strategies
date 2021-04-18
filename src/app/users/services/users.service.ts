import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable()
export class UsersService {
  url = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`${this.url}/users`);
  }

  getSingleUser(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.url}/users/${id}`);
  }
}
