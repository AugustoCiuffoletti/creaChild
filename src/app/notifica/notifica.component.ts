import { Component, Input, OnInit } from '@angular/core';
import { cityTemp } from '../app.component';

@Component({
  selector: 'app-notifica',
  templateUrl: './notifica.component.html',
  styleUrls: ['./notifica.component.css']
})
export class NotificaComponent implements OnInit {
  @Input() selezione: cityTemp;
  constructor() { }
  clean() {
    this.selezione.luogo = undefined;
  }

  ngOnInit() {
  }

}