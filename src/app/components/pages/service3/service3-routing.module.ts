import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Service3Component } from './service3.component';

const routes: Routes = [{ path: '', component: Service3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Service3RoutingModule { }
