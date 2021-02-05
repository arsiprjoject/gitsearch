import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { ApiService } from 'src/app/Service/api.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search3',
  templateUrl: './search3.component.html',
  styleUrls: ['./search3.component.css']
})
export class Search3Component implements OnInit {

  searchTermChanged: Subject<string> = new Subject<string>();
  gitRepoList = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  onSearch(event: any) {
    if (this.searchTermChanged.observers.length === 0) {
      this.searchTermChanged.pipe(debounceTime(300), distinctUntilChanged())
        .subscribe(term => {
          if (term) { // call api only if there is any value from serch input
            this.getRepositoryDetails(term);
          }
        });
    }
    this.searchTermChanged.next(event);
  }

  getRepositoryDetails(queryParm: string) {
    this.apiService.getMostWatched(queryParm).subscribe((data) => { // Get Most watched repos
      this.gitRepoList = data['items']
    }, (error) => {
      console.error('Error in search request', error)
      //Show message to user
    })
  }
}
