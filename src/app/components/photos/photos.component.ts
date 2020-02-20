import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { PhotosService } from '../../services/photos.service';
import { PhotoModule } from 'src/app/models/photo/photo.module';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.sass']
})
export class PhotosComponent implements OnInit {
  url = "https://jsonplaceholder.typicode.com/photos";
  photosArray: PhotoModule[];
  filteredStatus = '';
  
  constructor(private DataService: DataService,private PhotosService: PhotosService ) { 
    this.PhotosService.arrayUpdated.subscribe(
      (photos: PhotoModule[]) => {
        this.photosArray = photos;
       
      }
    );
  }

  ngOnInit() {
    this.DataService
      .getListOfGroup(this.url)
      .subscribe(
        data => {
          //console.log(data);
          this.PhotosService.getPhotos(data);
        },
        err => {
          console.log(err);
        }
      );
  }

}
