import { Component, OnInit } from '@angular/core';
import { FileupService } from '../fileup.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
    file: File = null; // Variable to store file
  
  constructor(private fileupService:FileupService) { }

  ngOnInit() {
  }

  onChange(event) {
    this.file = event.target.files[0];
}

// OnClick of button Upload
onUpload() {
    console.log(this.file);
    this.fileupService.upload(this.file)
    .subscribe(
      (res) => {
        console.log('file uploaded',res);
});
}
}