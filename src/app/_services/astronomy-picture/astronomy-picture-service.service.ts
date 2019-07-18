import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AstronomyPicture } from 'src/app/_models/astronomy-picture/astronomy-picture.model';

@Injectable({
  providedIn: 'root'
})
export class AstronomyPictureServiceService {

  private url = 'https://api.nasa.gov/planetary/apod?api_key=oAbFeFwglLmUTUFWWYHXm1Xy61sSZmROULa45j72';
  //private jsonURL = './assets/json/video-test.json';

  constructor(private http: HttpClient) { }

  getAstronomyPictureData(): Observable<AstronomyPicture> {
    return this.http.get(this.url).pipe(
      map((result: any) => new AstronomyPicture(
        result.date,
        result.explanation,
        result.url,
        result.media_type,
        result.service_version,
        result.title
      ))
    );
  }
}
