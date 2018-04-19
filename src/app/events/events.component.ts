import { Component, OnInit } from '@angular/core';
import {EventsService} from "./events.service";
import {Events} from "./Events";
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
	providers: [EventsService,Ng4LoadingSpinnerService]
})

export class EventsComponent implements OnInit {

  events:Events[] = [];
  constructor(private _data:EventsService, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
	  this.load();
  }

  load(){
	this.spinnerService.show();
	this._data.getData().subscribe(data => {this.events = data ; this.spinnerService.hide();}, err => {this.spinnerService.hide();console.log(err);},
    () => console.log('yay'));
	console.log(this.events);
  }  
}
