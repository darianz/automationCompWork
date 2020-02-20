import { Injectable, EventEmitter } from '@angular/core';
import { UserModule } from '../models/user/user.module';
import { AddressModule } from '../models/address/address.module';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArray: any[] = [];
  arrayUpdated = new EventEmitter<UserModule[]>();
  
  constructor() { }

  getUsers (data: any){
    
    this.usersArray=[];
    for (let i=0; i<data.length; i++){
      let user: UserModule = new UserModule;
      let address: AddressModule = new AddressModule;
      user.id = data[i]['id'];
      user.name = data[i]['name'];
      user.username = data[i]['username'];
      user.email = data[i]['email'];
      user.website = data[i]['website'];
      address.street = data[i]['address']['street'];
      
      address.suite = data[i]['address']['suite'];
      address.city = data[i]['address']['city'];
      address.zipcode = data[i]['address']['zipcode'];
      // address.geo.lat = data[i]['address']['geo']['lat'];
      // address.geo.lng = data[i]['address']['geo']['lng'];
      user.adress = address;
      user.phone = data[i]['phone'];
      // user.company.name = data[i]['company']['name'];
      // user.company.catchPhrase = data[i]['company']['catchPhrase'];
      // user.company.bs = data[i]['company']['bs'];
      

      this.usersArray.push(user);

    }
    this.arrayUpdated.emit(this.usersArray);
   
  }


}
