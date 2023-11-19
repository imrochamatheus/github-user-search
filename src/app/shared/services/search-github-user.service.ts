import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { GithubUser } from './search-github-user.interfaces';

@Injectable()
export class SearchGithubUserService {
  private baseUrl: string = 'https://api.github.com/users/';

  constructor(private readonly http: HttpClient) {}

  public searchUser(username: string): Observable<GithubUser> {
    const url = this.baseUrl + username;

    return this.http.get<GithubUser>(url);
  }
}
