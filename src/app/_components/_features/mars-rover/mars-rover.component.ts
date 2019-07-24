import { Component, OnInit } from '@angular/core';
import { MarsRoverServiceService } from 'src/app/_services/mars-rover/mars-rover-service.service';
import { MarsRover } from 'src/app/_models/mars-rover/mars-rover.model';

@Component({
  selector: 'app-mars-rover',
  templateUrl: './mars-rover.component.html',
  styleUrls: ['./mars-rover.component.scss']
})
export class MarsRoverComponent implements OnInit {

  marsRover: MarsRover;

  constructor(private service: MarsRoverServiceService) { }

  ngOnInit() {
    this.service.getMarsRoverData().subscribe((marsRoverData: MarsRover) => {
      this.marsRover = marsRoverData;
      console.log(this.marsRover);
    });
  }

}
