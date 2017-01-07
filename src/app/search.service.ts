import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../environments/environment';

import { User } from './user';
import { Repository } from './repository';

@Injectable()
export class SearchService {
  public user$ : BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public userRepos$ : BehaviorSubject<Repository[]> = new BehaviorSubject<Repository[]>([]);
  public username$ : BehaviorSubject<string> = new BehaviorSubject<string>('chhaymenghong');
  public data$: Subject<Object> = new Subject<Object>();

  public isLoadingUser$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoadingRepos$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor( private _http: Http ) {
    this.username$
      .filter( val => val !== '' )
      .subscribe( username => {
        this.getUserInfo( username );
        this.getUserRepos( username );
    } );

    this.userRepos$.subscribe(
      repos => this._computeLanguageCount( repos )
    );
  }

  public updateUser( username :string ) {
    this.username$.next( username );
  }

  public getUserRepos( username: string ) {
    this.isLoadingUser$.next(true);
    console.log('loading it true');
    this._makeHttpRequest( `users/${username}/repos`, {page_size: 100} )
      .subscribe(
        allReposJson => {
          console.log(allReposJson);
          var repos : Repository[] = allReposJson.map( eachRepoJson => {
            return new Repository( eachRepoJson );
          });
          this.userRepos$.next( repos );
          this.isLoadingUser$.next(false);
        },
        (error) => this.isLoadingUser$.next(false)
     );
  }

  public getUserInfo( username: string ) {
    this.isLoadingRepos$.next( true );
    this._makeHttpRequest( `users/${username}` )
      .subscribe(
        json => {
          console.log( json );
          var user: User = new User( json );
          this.user$.next([user]);
          this.isLoadingRepos$.next(false);
        },
        (error) => this.isLoadingRepos$.next(false)
      );
  }

  private _computeLanguageCount( repos ) {
      let data = []
      let totalRepos = repos.length;
      let result = repos.reduce(
        (acc, repo) => {
          var lang = (<Repository>repo).language;
          if ( lang === null ) {
              lang = 'Not Specified';
          }

          var count = acc[lang];
          if ( count ) {
              acc[lang] = acc[lang] + 1;
          } else {
              acc[lang] = 1;
          }
          return acc;
        },
        {}
      );
      for(var key in result) {
          data.push({name: key, y: (100 * result[key])/totalRepos})
      }
      this.data$.next( data );
  }

  private _makeHttpRequest( path: string, params? ) : any {
    var searchParam = new URLSearchParams();
    if ( params ) {
      for ( let key in params ) {
        searchParam.set(key, params[key]);
      }
    }

    return this._http.get( `${environment.baseUrl}${path}`, { search: searchParam})
      .map( resp => {
        console.log( resp );
        return resp.json();
       } );
  }

}
