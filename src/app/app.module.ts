import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { RangoliComponent } from './rangoli/rangoli.component';
import { RangolisComponent } from './rangoli/rangolis.component';
import { FundraiserComponent } from './fundraiser/fundraiser.component';
import { FundraisersComponent } from './fundraiser/fundraisers.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { EventsComponent } from './events/events.component';
import { PartnersComponent } from './partners/partners.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AlertComponent } from './_directives/index';

import { HomeModule } from './home/home.module';

import { AlertService } from './_services/index';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    RangoliComponent,
    RangolisComponent,
    FundraiserComponent,
    FundraisersComponent,
    LandingComponent,
	LogoComponent,
	EventsComponent,
	PartnersComponent,
	QuotesComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
	AlertComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
	HttpClientModule,
    HomeModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
