import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  inputs: [ 'isLoading']
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
