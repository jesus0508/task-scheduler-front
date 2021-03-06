import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '../shared/layout/layout.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobAddComponent } from './job-add/job-add.component';
import { JobEditComponent } from './job-edit/job-edit.component';
import { JobShowComponent } from './job-show/job-show.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: JobListComponent },
      { path: 'create', component: JobAddComponent },
      { path: ':id/edit', component: JobEditComponent },
      { path: ':id', component: JobShowComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
