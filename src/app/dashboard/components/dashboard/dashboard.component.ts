import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
  trigger('rotate',[
    transition(':enter', [
      animate('2000ms',
      keyframes([
        style({transform: 'rotate(0deg)', offset: '0'}),
        style({transform: 'rotate(2turn)', offset: '1'}),
      ])
      )
    ])
  ])
]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
