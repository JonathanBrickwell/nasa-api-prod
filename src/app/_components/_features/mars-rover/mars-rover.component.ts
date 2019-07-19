import { Component, OnInit } from '@angular/core';
import { MarsRoverServiceService } from 'src/app/_services/mars-rover/mars-rover-service.service';

@Component({
  selector: 'app-mars-rover',
  templateUrl: './mars-rover.component.html',
  styleUrls: ['./mars-rover.component.scss']
})
export class MarsRoverComponent implements OnInit {

  constructor(private service: MarsRoverServiceService) { }

  ngOnInit() {
    this.service.getMarsRoverData().subscribe((result: any) => {
      console.log(result);
    });
  }

}
