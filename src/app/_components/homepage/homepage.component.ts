import { Component, OnInit } from '@angular/core';
import { AstronomyPicture } from 'src/app/_models/astronomy-picture/astronomy-picture.model';
import { AstronomyPictureServiceService } from 'src/app/_services/astronomy-picture/astronomy-picture-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  astronomyPictureData: AstronomyPicture;

  constructor(private service: AstronomyPictureServiceService) { }

  ngOnInit() {
    this.service.getAstronomyPictureData().subscribe((astronomyPictureData: AstronomyPicture) => {
      this.astronomyPictureData = astronomyPictureData;
      console.log(astronomyPictureData);
    });
  }

}
