import { Component, OnInit } from '@angular/core';
import { AstronomyPicture } from 'src/app/_models/astronomy-picture/astronomy-picture.model';
import { AstronomyPictureServiceService } from 'src/app/_services/astronomy-picture/astronomy-picture-service.service';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  astronomyPictureData: AstronomyPicture;
  safeURL;

  constructor(
    private service: AstronomyPictureServiceService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.service.getAstronomyPictureData().subscribe((astronomyPictureData: AstronomyPicture) => {
      this.astronomyPictureData = astronomyPictureData;
      this.sanitizingURL();
    });
  }

  sanitizingURL() {
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.astronomyPictureData.url);
  }

}
