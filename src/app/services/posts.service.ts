import { Injectable, EventEmitter } from '@angular/core';
import { PostModule } from '../models/post/post.module';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  userIdUpdated = new EventEmitter<string>();
  arrayUpdated = new EventEmitter<PostModule []>();
  postsArray: PostModule [] = [];
  constructor() {
  
   }

   getPosts (data: any){
    this.postsArray = [];
    for (let i=0; i<data.length; i++){
      let post: PostModule = new PostModule;
      post.id = data[i]['id'];
      post.userId = data[i]['userId'];
      post.title = data[i]['title'];
      post.body = data[i]['body'];
      // let user: UserModule = new UserModule;
      // let address: AddressModule = new AddressModule;
      // user.id = data[i]['id'];
      // user.name = data[i]['name'];
      // user.username = data[i]['username'];
     this.postsArray.push(post);
      

      // this.usersArray.push(user);

    }
    
    this.arrayUpdated.emit(this.postsArray);
    // this.arrayUpdated.emit(this.usersArray);
   
  }
}
