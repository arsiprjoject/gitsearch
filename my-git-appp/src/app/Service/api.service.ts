import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getRepos(searchQuery :string) {
    return this.http.get("https://api.github.com/search/repositories?q="+searchQuery+" in:name&per_page=10");
  }

  public getMostWatched(searchQuery :string) {
    return this.http.get("https://api.github.com/search/repositories?q="+searchQuery+" in:name&sort=forks&per_page=10");
  }
}
