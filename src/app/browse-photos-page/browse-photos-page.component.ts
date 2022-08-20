import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Photo } from '../types';

@Component({
  selector: 'app-browse-photos-page',
  templateUrl: './browse-photos-page.component.html',
  styleUrls: ['./browse-photos-page.component.css'],
})
export class BrowsePhotosPageComponent implements OnInit {
  isLoadingMyPhotos: boolean = true;
  isLoadingSharedPhotos: boolean = true;
  myPhotos: Photo[] = [];
  sharedPhotos: Photo[] = [];

  constructor(private photosService: PhotosService) {}

  ngOnInit(): void {
    this.photosService.loadMyPhotos().subscribe((myPhotos) => {
      this.myPhotos = myPhotos;
      this.isLoadingMyPhotos = false;
    });
    this.photosService.loadSharedPhotos().subscribe((sharedPhotos) => {
      this.sharedPhotos = sharedPhotos;
      this.isLoadingSharedPhotos = false;
    });
  }
}
