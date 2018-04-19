import { Component, OnInit } from '@angular/core';
import {RegisterService} from "./register.service";
import { Response } from '@angular/http';
import {Register} from "./register";
import { Observable } from 'rxjs/Rx';
import { AlertService } from '../_services/index';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
	providers: [RegisterService]
})
export class SignupComponent implements OnInit {
	register:Register ={firstName:'',email:'',phone:'',lastName:'',younger:true,id:null,parentFName:'',parentLName:'',parentEmail:'',parentPhone:'',line1:'',line2:'',city:'',state:'',country:'',zipcode:''};
	message:String='';
	isSaving: boolean;
    test : Date = new Date();
	age : boolean = true;
    constructor(private _data:RegisterService, private alertService: AlertService) { }

    ngOnInit() {}
	
	isYounger(){
		return this.age;
	}
	insert(){
		console.log('insert'+this.register.firstName);
		//this._data.saveRegister(this.register).subscribe(b => this.result = b);
		this.subscribeToSaveResponse(
                this._data.saveRegister(this.register));		
		
		
		this.register={firstName:'',email:'',phone:'',lastName:'',younger:true,id:null,parentFName:'',parentLName:'',parentEmail:'',parentPhone:'',line1:'',line2:'',city:'',state:'',country:'',zipcode:''};
	}
	
    private subscribeToSaveResponse(result: Observable<any>) {
        result.subscribe((res: Register) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Register) {
        //this.eventManager.broadcast({ name: 'contactusListModification', content: 'OK'});
		this.message='Successfully registered ('+result.id+')';
		this.alertService.success(''+this.message);
		console.log('result id'+ result.id);
		console.log('result id'+ JSON.stringify(result));
        this.isSaving = false;
        //this.activeModal.dismiss(result);
    }

    private onSaveError() {
		this.alertService.error('Please try again');
        this.isSaving = false;
    }

	
}
