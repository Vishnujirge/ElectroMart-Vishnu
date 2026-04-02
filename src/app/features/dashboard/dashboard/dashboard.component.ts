import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    { title: 'Products', value: '85' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}
  isDashboardRoute(): boolean {
    return this.router.url === '/dashboard' || this.router.url === '/';
  }
}
