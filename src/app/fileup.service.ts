import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileupService {

  
  url = "http://localhost:3000/file"
    
  constructor(private http:HttpClient) { }
  
  // Returns an observable
  upload(file){
  
      
      const formData = new FormData(); 
        
      // Store form name as "file" with file data
      formData.append("file", file,file.name);
        
      // Make http post request over api
      // with formData as req
      return this.http.post(this.url, formData)
  }
}
