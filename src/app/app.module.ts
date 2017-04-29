import { NgModule }      from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {GithubService} from './services/github.service';

import { AppComponent }  from './app.component';
import {ProfileComponent} from './components/profile.component';
@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, ProfileComponent ],
  providers: [GithubService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
