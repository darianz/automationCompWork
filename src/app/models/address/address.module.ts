import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeoModule } from '../geo/geo.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AddressModule {

  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoModule;

 }
