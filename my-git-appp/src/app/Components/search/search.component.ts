import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  gitRepoList = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getRepositoryDetails("Android");
  }

  getRepositoryDetails(queryParm : string) {
    this.apiService.getRepos(queryParm).subscribe((data) => {
      this.gitRepoList =  data['items']
    }, (error) => {                              //Error callback
      console.error('Error in search request', error)
      //Show message to user
    })
  }

}
