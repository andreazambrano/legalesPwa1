import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Service3RoutingModule } from './service3-routing.module';
import { Service3Component } from './service3.component';


@NgModule({
  declarations: [
    Service3Component
  ],
  imports: [
    CommonModule,
    Service3RoutingModule
  ]
})
export class Service3Module { }
