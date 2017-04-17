import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routing } from './app.routes';

import { AjaxService } from './service/ajax.service'
import { WebSocketService } from './service/webSocket.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NavigationComponent } from './component/navigation/navigation.component';

import { TopComponent }from './view/top/top.component'

@NgModule( {
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing,
  ],
  exports: [
  ],
  providers: [
    AjaxService,
    WebSocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
