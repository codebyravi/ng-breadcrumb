import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1, Component2, Component3, Component4 } from './app.component';
import { routingModule, appRoutingProviders }  from './app.routing';

import { NgBreadcrumbModule } from './components/breadcrumb/breadcrumb.module';


@NgModule({
  declarations: [
    AppComponent,
    Component1,
    Component2,
    Component3,
    Component4    
  ],
  imports: [
    BrowserModule,
    routingModule,
    NgBreadcrumbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
