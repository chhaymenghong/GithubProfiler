webpackJsonp([0,3],{322:function(e,t,n){"use strict";var o=n(1),i=n(79);n.d(t,"a",function(){return s});var r=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(){}return e=r([n.i(o.Component)({selector:"app-root",template:n(674),styles:[n(667)],providers:[i.a]}),a("design:paramtypes",[])],e)}()},323:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={production:!0,baseUrl:"https://api.github.com/"}},393:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=393},394:function(e,t,n){"use strict";var o=n(505),i=(n.n(o),n(477)),r=n(1),a=n(323),s=n(496);a.a.production&&n.i(r.enableProdMode)(),n.i(i.a)().bootstrapModule(s.a)},495:function(e,t,n){"use strict";var o=n(204),i=n(1),r=n(470),a=n(303),s=n(514),c=(n.n(s),n(322)),l=n(497),u=n(501),p=n(79),f=n(504),d=n(500),h=n(498),g=n(502);n.d(t,"a",function(){return b});var v=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},m=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(){function e(){}return e=v([n.i(i.NgModule)({declarations:[c.a,l.a,u.a,f.a,d.a,h.a,g.a],imports:[o.b,r.a,a.c,s.ChartModule],providers:[p.a],bootstrap:[c.a]}),m("design:paramtypes",[])],e)}()},496:function(e,t,n){"use strict";var o=(n(322),n(495));n.d(t,"a",function(){return o.a})},497:function(e,t,n){"use strict";var o=n(1);n.d(t,"a",function(){return a});var i=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){}return e.prototype.ngOnInit=function(){},e=i([n.i(o.Component)({selector:"app-logo",template:n(675),styles:[n(668)],host:{class:"row"}}),r("design:paramtypes",[])],e)}()},498:function(e,t,n){"use strict";var o=n(1),i=n(79);n.d(t,"a",function(){return s});var r=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){this._searchService=e,this.isLoading=e.isLoadingRepos$}return e.prototype.ngOnInit=function(){var e=this;this._searchService.data$.subscribe(function(t){return e._createChartOption(t)})},e.prototype._createChartOption=function(e){this.options={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:"Languages"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f} %"}}},series:[{name:"Brands",colorByPoint:!0,data:e}]}},e=r([n.i(o.Component)({selector:"app-pie-chart",template:n(676),styles:[n(669)],host:{class:"row"}}),a("design:paramtypes",["function"==typeof(t="undefined"!=typeof i.a&&i.a)&&t||Object])],e);var t}()},499:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o=function(){function e(e){this.description=e.description,this.forks=e.forks,this.watchers=e.watchers,this.stargazers_count=e.stargazers_count,this.git_url=e.git_url,this.full_name=e.full_name,this.language=e.language,this.name=e.name,this.repoUrl=e.html_url}return e}()},500:function(e,t,n){"use strict";var o=n(1),i=n(79);n.d(t,"a",function(){return s});var r=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){this._searchService=e,this.listOfRespos=e.userRepos$,this.isLoading=e.isLoadingRepos$}return e.prototype.ngOnInit=function(){},e.prototype.getLanguageData=function(){},e=r([n.i(o.Component)({selector:"app-repository",template:n(677),styles:[n(670)],host:{class:"row"}}),a("design:paramtypes",["function"==typeof(t="undefined"!=typeof i.a&&i.a)&&t||Object])],e);var t}()},501:function(e,t,n){"use strict";var o=n(1),i=n(366),r=(n.n(i),n(79));n.d(t,"a",function(){return c});var a=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e,t){this._elementRef=e,this._searchService=t}return e.prototype.ngOnInit=function(){var e=this;i.Observable.fromEvent(this._elementRef.nativeElement,"keyup").map(function(e){return e.target.value}).filter(function(e){return e.length>0}).debounceTime(1e3).subscribe(function(t){return e._searchService.updateUser(t)})},e=a([n.i(o.Component)({selector:"app-search",template:n(678),styles:[n(671)],host:{class:"row"}}),s("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.ElementRef&&o.ElementRef)&&t||Object,"function"==typeof(c="undefined"!=typeof r.a&&r.a)&&c||Object])],e);var t,c}()},502:function(e,t,n){"use strict";var o=n(1);n.d(t,"a",function(){return a});var i=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){}return e.prototype.ngOnInit=function(){},e=i([n.i(o.Component)({selector:"app-spinner",template:n(679),styles:[n(672)],inputs:["isLoading"]}),r("design:paramtypes",[])],e)}()},503:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o=function(){function e(e){this.UNKNOWN="Unknown",this.name=e.name||this.UNKNOWN,this.avatar_url=e.avatar_url,this.email=e.email||this.UNKNOWN,this.followers=e.followers,this.following=e.following,this.location=e.location||this.UNKNOWN,this.profileUrl=e.html_url,this.memberSince=e.created_at,this.public_repos=e.public_repos,this.public_gists=e.public_gists}return e}()},504:function(e,t,n){"use strict";var o=n(1),i=n(79);n.d(t,"a",function(){return s});var r=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){this._searchService=e,this.user=e.user$,this.isLoading=e.isLoadingUser$}return e.prototype.ngOnInit=function(){},e=r([n.i(o.Component)({selector:"app-user",template:n(680),styles:[n(673)],host:{class:"row"}}),a("design:paramtypes",["function"==typeof(t="undefined"!=typeof i.a&&i.a)&&t||Object])],e);var t}()},505:function(e,t,n){"use strict";var o=n(528),i=(n.n(o),n(521)),r=(n.n(i),n(517)),a=(n.n(r),n(523)),s=(n.n(a),n(522)),c=(n.n(s),n(520)),l=(n.n(c),n(519)),u=(n.n(l),n(527)),p=(n.n(u),n(516)),f=(n.n(p),n(515)),d=(n.n(f),n(525)),h=(n.n(d),n(518)),g=(n.n(h),n(526)),v=(n.n(g),n(524)),m=(n.n(v),n(529)),b=(n.n(m),n(958));n.n(b)},667:function(e,t){e.exports=""},668:function(e,t){e.exports="#logo{\n  text-align:center;\n}\n#logImage{\n  background-color:#8a6c6c;\n  border-radius:50%;\n  border:20px dashed white;\n  width:100%;\n  height:100%;\n  max-width:200px;\n  max-height:200px;\n  -webkit-transition:border 300ms ease-out;\n  -moz-transition:border 500ms ease-out;\n  -o-transition:border 500ms ease-out;\n}\n\n#logImage:hover{\n  border:30px dashed #ffa1a1;\n  background-color:white;\n}\n"},669:function(e,t){e.exports="chart{\n  display:block;\n}\n"},670:function(e,t){e.exports=""},671:function(e,t){e.exports="#searchBox input{\n  text-align:center;\n  \n}\n"},672:function(e,t){e.exports="#iconContainer{\n  text-align:center;;\n}\n\ni{\n  font-size:100px;\n  color:#8a6c6c\n}\n"},673:function(e,t){e.exports=".userImg{\n  max-width:70%;\n  max-height:70%;\n  border:20px dashed #8a6c6c;\n  -webkit-transition:border 300ms ease-out;\n}\n\n.userImg:hover{\n  border:30px dashed #ffa1a1;\n}\n"},674:function(e,t){e.exports='<div class="container-fluid">\n  <app-logo></app-logo>\n  <app-search></app-search>\n  <app-user></app-user>\n  <app-pie-chart></app-pie-chart>\n  <app-repository></app-repository>\n</div>\n'},675:function(e,t){e.exports='<div class="col-xs-12" id="logo">\n  <img id="logImage" alt="Brand" src="/GithubProfiler/assets/logo2.jpg" class="img-circle">\n</div>\n'},676:function(e,t){e.exports='<div class="col-lg-12">\n  <div class="panel panel-default">\n    <div class="panel-heading">Languages Profile</div>\n      <div class="panel-body">\n        <div class="row">\n          <app-spinner [isLoading]="isLoading"></app-spinner>\n          <div *ngIf="!( isLoading | async )">\n              <chart [options]="options"></chart>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n'},677:function(e,t){e.exports='<div class="col-lg-12">\n  <div class="panel panel-default">\n    <div class="panel-heading">Repositories</div>\n    <div class="panel-body">\n      <div class="row">\n        <div class="col-lg-12">\n          <app-spinner [isLoading]="isLoading"></app-spinner>\n        </div>\n      </div>\n      <div *ngIf="!(isLoading | async)">\n        <ul class=list-group>\n          <div *ngFor="let repo of listOfRespos | async">\n            <li class="list-group-item">\n              <div class="row">\n                <div class="col-lg-9">\n                  <a [href]="repo.repoUrl" target="_blank">{{repo.name}}</a>\n                </div>\n                <div class="col-lg-3">\n                  <span class="label label-primary">Watchers: {{repo.watchers}}</span>\n                  <span class="label label-success">Forks: {{repo.forks}}</span>\n                  <span class="label label-info">Stars: {{repo.stargazers_count}}</span>\n                </div>\n              </div>\n            </li>\n          </div>\n        </ul>\n\n      </div>\n    </div>\n  </div>\n</div>\n'},678:function(e,t){e.exports='<div class="col-lg-12" id="searchBox">\n  <form>\n    <div class="form-group">\n      <input class="form-control" type="text" name="" value="" placeholder="Enter Github username....">\n    </div>\n  </form>\n</div>\n'},679:function(e,t){e.exports='<div id="iconContainer" *ngIf="isLoading | async">\n    <i class="fa fa-spinner fa-spin"></i>\n</div>\n'},680:function(e,t){e.exports='<div class="col-lg-12">\n  <div class="panel panel-default">\n    <div class="panel-heading">User information</div>\n    <div class="panel-body">\n      <div class="row">\n        <div class="col-lg-12">\n          <app-spinner [isLoading]="isLoading"></app-spinner>\n        </div>\n      </div>\n      <div *ngIf="!(isLoading | async)">\n        <div *ngFor="let u of user | async" >\n          <div class="row">\n              <div class="col-xs-12 col-sm-5 col-md-4 col-lg-3" [ngStyle]="{\'text-align\':\'center\'}">\n                <a [href]="u.profileUrl" target="_blank">\n                  <img class="img-reponsive userImg img-circle" [src]="u.avatar_url" alt="">\n                </a>\n              </div>\n              <div class="col-xs-12 col-sm-7 col-md-8 col-lg-9">\n                <div class="stats">\n                  <span class="label label-primary">following: {{u.following}}</span>\n                  <span class="label label-success">followers: {{u.followers}}</span>\n                  <span class="label label-info">#public repos: {{u.public_repos}}</span>\n                  <span class="label label-warning">#public gists: {{u.public_gists}}</span>\n                </div>\n                <br>\n                <ul class="list-group">\n                  <li class="list-group-item"><strong>Username: </strong>{{u.name}}</li>\n                  <li class="list-group-item"><strong>Location: </strong>{{u.location}}</li>\n                  <li class="list-group-item"><strong>Email: </strong>{{u.email}}</li>\n                  <li class="list-group-item"><strong>Member Since: </strong>{{u.memberSince}}</li>\n                </ul>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'},79:function(e,t,n){"use strict";var o=n(1),i=n(303),r=n(366),a=(n.n(r),n(323)),s=n(503),c=n(499);n.d(t,"a",function(){return p});var l=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},u=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(){function e(e){var t=this;this._http=e,this.user$=new r.BehaviorSubject([]),this.userRepos$=new r.BehaviorSubject([]),this.username$=new r.BehaviorSubject("chhaymenghong"),this.data$=new r.Subject,this.isLoadingUser$=new r.BehaviorSubject(!1),this.isLoadingRepos$=new r.BehaviorSubject(!1),this.username$.filter(function(e){return""!==e}).subscribe(function(e){t.getUserInfo(e),t.getUserRepos(e)}),this.userRepos$.subscribe(function(e){return t._computeLanguageCount(e)})}return e.prototype.updateUser=function(e){this.username$.next(e)},e.prototype.getUserRepos=function(e){var t=this;this.isLoadingUser$.next(!0),this._makeHttpRequest("users/"+e+"/repos",{page_size:100}).subscribe(function(e){console.log(e);var n=e.map(function(e){return new c.a(e)});t.userRepos$.next(n),t.isLoadingUser$.next(!1)},function(e){return t.isLoadingUser$.next(!1)})},e.prototype.getUserInfo=function(e){var t=this;this.isLoadingRepos$.next(!0),this._makeHttpRequest("users/"+e).subscribe(function(e){console.log(e);var n=new s.a(e);t.user$.next([n]),t.isLoadingRepos$.next(!1)},function(e){return t.isLoadingRepos$.next(!1)})},e.prototype._computeLanguageCount=function(e){var t=[],n=e.length,o=e.reduce(function(e,t){var n=t.language;null===n&&(n="Not Specified");var o=e[n];return o?e[n]=e[n]+1:e[n]=1,e},{});for(var i in o)t.push({name:i,y:100*o[i]/n});this.data$.next(t)},e.prototype._makeHttpRequest=function(e,t){var n=new i.a;if(t)for(var o in t)n.set(o,t[o]);return this._http.get(""+a.a.baseUrl+e,{search:n}).map(function(e){return e.json()})},e=l([n.i(o.Injectable)(),u("design:paramtypes",["function"==typeof(t="undefined"!=typeof i.b&&i.b)&&t||Object])],e);var t}()},959:function(e,t,n){e.exports=n(394)}},[959]);
//# sourceMappingURL=main.b6c9db16bad9f31cc6b3.bundle.map