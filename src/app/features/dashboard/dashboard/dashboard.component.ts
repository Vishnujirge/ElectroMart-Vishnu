import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  cards = [
  { title: 'Total Sales', value: '₹1,25,000' },
  { title: 'Orders', value: '320' },
  { title: 'Customers', value: '150' },
  { title: 'Products', value: '85' }
];

  constructor() {}

  ngOnInit(): void {}
}
