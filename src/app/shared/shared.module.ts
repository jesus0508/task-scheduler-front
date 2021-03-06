import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ConfirmationDialogComponentComponent } from './components/confirmation-dialog-component/confirmation-dialog-component.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    BreadcrumbComponent,
    ConfirmationDialogComponentComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    LayoutComponent,
    BreadcrumbComponent,
    ConfirmationDialogComponentComponent,
  ]
})
export class SharedModule { }
