import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service'

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css'],
  host: {class: 'row'}
})
export class RepositoryComponent implements OnInit {
  public listOfRespos;
  public isLoading;
  constructor( private _searchService : SearchService ) {
    this.listOfRespos = _searchService.userRepos$;
    this.isLoading = _searchService.isLoadingRepos$;
  }

  ngOnInit() {
  }
  public getLanguageData() {

  }

}
