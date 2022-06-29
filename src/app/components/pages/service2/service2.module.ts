import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Service2RoutingModule } from './service2-routing.module';
import { Service2Component } from './service2.component';


@NgModule({
  declarations: [
    Service2Component
  ],
  imports: [
    CommonModule,
    Service2RoutingModule
  ]
})
export class Service2Module { }
