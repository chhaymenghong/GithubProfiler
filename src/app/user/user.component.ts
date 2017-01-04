import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  host: {class: 'row'}
})
export class UserComponent implements OnInit {
  public user;
  public isLoading: Observable<boolean>;

  constructor( private _searchService : SearchService ) {
    this.user = _searchService.user$;
    this.isLoading = _searchService.isLoadingUser$;
  }

  ngOnInit() {
  }

}
