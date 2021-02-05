import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-search2',
  templateUrl: './search2.component.html',
  styleUrls: ['./search2.component.css']
})
export class Search2Component implements OnInit {

  gitRepoList = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getRepositoryDetails("Android");
  }

  getRepositoryDetails(queryParm : string) {
    this.apiService.getMostWatched(queryParm).subscribe((data) => { // Refactored to get most wathced repos
      this.gitRepoList =  data['items']
    }, (error) => {                              //Error callback
      console.error('Error in search request', error)
      //Show message to user
    })
  }
}
