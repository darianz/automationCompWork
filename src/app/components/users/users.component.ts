import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UsersService } from '../../services/users.service';
import { PostsService } from '../../services/posts.service';
import { UserModule } from 'src/app/models/user/user.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  url = "https://jsonplaceholder.typicode.com/users";
  usersArray: UserModule[];
  userId: string;
  constructor(private DataService: DataService, private UsersService: UsersService, private PostsService: PostsService, private router: Router) {
    this.UsersService.arrayUpdated.subscribe(
      (users: UserModule[]) => {
        this.usersArray = users;
       
      }
    );
   }

  ngOnInit() {
    this.DataService
      .getListOfGroup(this.url)
      .subscribe(
        data => {
          
          this.UsersService.getUsers(data);
        },
        err => {
          console.log(err);
        }
      );
  }

  updateUserId(id){
    
    this.PostsService.userIdUpdated.emit(id);
    this.router.navigate(['/posts']);
  }

}
