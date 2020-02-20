import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PhotoModule { 
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}
