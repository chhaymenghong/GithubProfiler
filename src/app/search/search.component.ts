import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  host: {class : 'row'}
})
export class SearchComponent implements OnInit {

  constructor( private _elementRef : ElementRef, private _searchService: SearchService ) {
  }

  ngOnInit() {
    Observable.fromEvent( this._elementRef.nativeElement, 'keyup')
      .map( ( event : any ) => event.target.value )
      .filter ( value => value.length > 0 )
      .debounceTime(1000)
      .subscribe( value => this._searchService.updateUser( value ) );
  }

}
