import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-upload-photo-page',
  templateUrl: './upload-photo-page.component.html',
  styleUrls: ['./upload-photo-page.component.css'],
})
export class UploadPhotoPageComponent implements OnInit {
  titleValue: string = '';
  selectedFile: File | null = null;

  constructor(private photoService: PhotosService, private router: Router) {}

  ngOnInit(): void {}

  onFileSelect(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onClickUpload(): void {
    if (this.selectedFile) {
      const formData = new FormData(); //FormData is used to upload files
      formData.append('title', this.titleValue); //this is added to the request body and used in backend
      formData.append('file', this.selectedFile);
      this.photoService.uploadPhoto(formData).subscribe(() => {
        this.router.navigateByUrl('/');
      });
    }
  }
}
