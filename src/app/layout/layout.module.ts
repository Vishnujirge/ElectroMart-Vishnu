import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  exports: [
  SidebarComponent,
  HeaderComponent
]
})
export class LayoutModule { }