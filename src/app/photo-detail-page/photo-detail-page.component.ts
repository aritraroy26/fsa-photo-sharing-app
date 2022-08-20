import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../photos.service';
import { Photo } from '../types';

@Component({
  selector: 'app-photo-detail-page',
  templateUrl: './photo-detail-page.component.html',
  styleUrls: ['./photo-detail-page.component.css'],
})
export class PhotoDetailPageComponent implements OnInit {
  isLoading: boolean = true;
  photo: Photo | null = null;
  photoId: string = '';

  constructor(
    private route: ActivatedRoute,
    private photosService: PhotosService
  ) {}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.id;
    this.photosService.loadPhoto(this.photoId).subscribe((photo) => {
      this.photo = photo;
      this.isLoading = false;
    });
  }

  shareWithEmail(email: string): void {
    this.photosService
      .sharePhotoWithEmail(this.photoId, email)
      .subscribe((updatedPhoto) => {
        this.photo = updatedPhoto;
      });
  }
}
