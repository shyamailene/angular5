import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LogoComponent } from './logo/logo.component';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { EventsComponent } from './events/events.component';
import { PartnersComponent } from './partners/partners.component';
import { ExecutiveComponent } from './executive/executive.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
	{ path: 'logo',          	component: LogoComponent },
	{ path: 'ourstory',         component: OurstoryComponent },
	{ path: 'events',         	component: EventsComponent },
	{ path: 'partners',         component: PartnersComponent },
	{ path: 'executive',        component: ExecutiveComponent },	
	{ path: 'quotes',          	component: QuotesComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{ useHash: true })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
