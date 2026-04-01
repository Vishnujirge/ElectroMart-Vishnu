import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: MainLayoutComponent,
//     children: [
//       {
//         path: '',
//         loadChildren: () =>
//           import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
//       }
//     ]
//   }
// ];

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then(
            (m) => m.DashboardModule,
          ),
      },
      {
        path: '',
        component: MainLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./features/dashboard/dashboard.module').then(
                (m) => m.DashboardModule,
              ),
          },
          {
            path: 'users',
            loadChildren: () =>
              import('./features/users/users.module').then(
                (m) => m.UsersModule,
              ),
          },
          {
            path: 'products',
            loadChildren: () =>
              import('./features/products/products.module').then(
                (m) => m.ProductsModule,
              ),
          },
          {
            path: 'orders',
            loadChildren: () =>
              import('./features/orders/orders.module').then(
                (m) => m.OrdersModule,
              ),
          },
        ],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
