import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './../interfaces/interface';

export const SH_DEMO = 'https://my-json-server.typicode.com/ShalaevDS/demo';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private url = `${SH_DEMO}`;

  constructor(
      private http: HttpClient
  ) { }

  collectionsPost() {
    return this.http.get<IPost>(`${this.url}/posts`);
  }

  collectionsComments() {
    return this.http.get<IPost>(`${this.url}/comments`);
  }

  collectionsProfile() {
    return this.http.get<IPost>(`${this.url}/profile`);
  }

  collectionsUrls() {
    return this.http.get<IPost>(`${this.url}/profile`);
  }
}
