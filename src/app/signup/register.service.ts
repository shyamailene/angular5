import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Register} from "./register";
import {Observable} from "rxjs/Observable";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class RegisterService {
  constructor(private _htc:HttpClient) { }
	saveRegister(register: Register) {
        let body = JSON.stringify(register);
        return this._htc.post('https://shaktiapp.herokuapp.com/api/signups', body, httpOptions);
    }  
}