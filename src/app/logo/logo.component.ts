import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  host: {class: 'row'}
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
