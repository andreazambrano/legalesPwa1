import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Service2Component } from './service2.component';

const routes: Routes = [{ path: '', component: Service2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Service2RoutingModule { }
