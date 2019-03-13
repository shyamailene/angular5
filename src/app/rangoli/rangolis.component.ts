import { Component, OnInit, AfterViewInit } from '@angular/core';
import {RangoliService} from "./rangoli.service";
import { Response } from '@angular/http';
import {Rangoli} from "./rangoli";
import { Payment } from "./payment";
import { Observable } from 'rxjs/Rx';
import { AlertService } from '../_services/index';

declare let paypal: any;

@Component({
    selector: 'app-rangolis',
    templateUrl: './rangolis.component.html',
    styleUrls: ['./rangoli.component.scss'],
	providers: [RangoliService]
})
export class RangolisComponent implements OnInit, AfterViewInit  {
	message:String='';
	isSaving: boolean;
    test : Date = new Date();
  age : boolean = true;
  rangolisList:Rangoli[]=[{name:null,email:null,phone:null,age:null,email2:null,id:null,volunteer:null,interested:null,address:null}];
  constructor(private _data:RangoliService, private alertService: AlertService) { }

  ngOnInit() {
    console.log('test');
    this.fetch();
  }

	fetch(){
		console.log('fetch rangolis list');
		//this._data.saveRangolis(this.rangolis).subscribe(b => this.result = b);
		this.subscribeToGetResuls(
                this._data.getRangolis());		
  }

  private subscribeToGetResuls(result: Observable<Rangoli[]>) {
    result.subscribe((res: Rangoli[]) =>
        this.onResultSuccess(res), (res: Response) => this.onSaveError());
  }

  private onResultSuccess(result: Rangoli[]) {
    this.rangolisList = result;
    console.log('result id'+ JSON.stringify(this.rangolisList));
  }

  private onSaveError() {
    this.alertService.error('Please try again');
    this.isSaving = false;
    this.rangolisList=[{name:'test',email:'email@s.com',phone:null,age:null,email2:null,id:null,volunteer:null,interested:null,address:null},{name:'test',email:null,phone:null,age:null,email2:null,id:null,volunteer:null,interested:null,address:null}]
    console.log(this.rangolisList);
  }
  
  public ngAfterViewInit(){
    this.fetch();
  }
}
