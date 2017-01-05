import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';
import { UserComponent } from './user/user.component';
import { RepositoryComponent } from './repository/repository.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SearchComponent,
    UserComponent,
    RepositoryComponent,
    PieChartComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule
  ],
  providers: [ SearchService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
