import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  host: {class: 'row'}
})
export class PieChartComponent implements OnInit {
  public options;
  public isLoading;
  constructor( private _searchService: SearchService ) {
    this.isLoading = _searchService.isLoadingRepos$;
  }

  ngOnInit() {
    this._searchService.data$.subscribe( data => this._createChartOption( data ) );
  }
  private _createChartOption( data ) {
    this.options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Languages'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data : data
        }]
      }
  }

}
