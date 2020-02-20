import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressModule } from '../address/address.module';
import { CompanyModule } from '../company/company.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule { 

  id: number;
  name: string;
  username: string;
  email: string;
  adress: AddressModule;
  phone: string;
  website: string;
  company: CompanyModule;
}
