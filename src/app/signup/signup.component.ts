import { Component, OnInit } from '@angular/core';
import {RegisterService} from "./register.service";
import { Response } from '@angular/http';
import {Register} from "./register";
import { Observable } from 'rxjs/Rx';
import { AlertService } from '../_services/index';

declare let paypal: any;

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
	
    private subscribeToSaveResponse(result: Observable<Register>) {
        result.subscribe((res: Register) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Register) {
        //this.eventManager.broadcast({ name: 'contactusListModification', content: 'OK'});
		this.message='Successfully registered ('+result.id+')';
		this.alertService.success(''+this.message);
		console.log('result id'+ result.id);
		console.log('result id'+ JSON.stringify(result));
		//this.register = result;
        this.isSaving = false;
        //this.activeModal.dismiss(result);
    }

    private onSaveError() {
		this.alertService.error('Please try again');
        this.isSaving = false;
    }

  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = 1;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'Ad_-a7RjjbEI0tTY1rkm1BR2Z-8UZ-ndlRo0wMyw85oiQmVljRHBq3FR_FrE6C_IB7Ww9ezI90ORHxTO',
      production: '<your-production-key-here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'INR' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
		  console.log(payment);
		  console.log(data);
		  alert('test');
        //Do something when payment is successful.
      }).catch(function(err) {
		  console.error('execute error:', err);
	  });
    },
	onCancel: (data, actions) => {
          console.log('OnCancel'+JSON.stringify(data));
        },
    onError: (err) => {
          console.log('OnError');
        },  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        //paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }

	
}
