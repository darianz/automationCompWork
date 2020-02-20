import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UsersService } from '../../services/users.service';
import { PostsService } from '../../services/posts.service';
import { PostModule } from 'src/app/models/post/post.module';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
  url = "https://jsonplaceholder.typicode.com/posts?userId=";
  postsArray: PostModule[] ;
  userId: string;
  constructor(private DataService: DataService, private UsersService: UsersService,private PostsService: PostsService) {

    
     
      

   }

  ngOnInit() {
    this.PostsService.arrayUpdated.subscribe(
      (posts: PostModule[]) => {
        this.postsArray = posts;
       
      }
    );
  
    this.PostsService.userIdUpdated.subscribe(
      (id: string) => {
        this.userId = id;
        this.DataService
    .getListOfGroup(this.url+ this.userId)
    .subscribe(
      data => {
        this.PostsService.getPosts(data);
        // show posts
      },
      err => {
        console.log(err);
      }
    );

      }
      );
    
  }

}
