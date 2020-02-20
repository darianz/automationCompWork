import { Injectable, EventEmitter } from '@angular/core';
import { PhotoModule } from '../models/photo/photo.module';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  photosArray: any[] = [];
  arrayUpdated = new EventEmitter<PhotoModule[]>();
  constructor() { }

  getPhotos (data: any){
    
    
    for (let i=0; i<data.length; i++){
      let photo: PhotoModule = new PhotoModule;
      photo.albumId = data[i]['albumId'];
      photo.id = data[i]['id'];
      photo.title = data[i]['title'];
      photo.url = data[i]['url'];
      photo.thumbnailUrl = data[i]['thumbnailUrl'];
      
      this.photosArray.push(photo);

    }
    this.arrayUpdated.emit(this.photosArray);
   
  }
}
