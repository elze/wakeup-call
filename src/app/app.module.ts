import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import {MatButtonModule} from '@angular/material'; 
import { StoreModule } from '@ngrx/store';

import { CatAlarmModeEffect } from './CatAlarmModeEffect';
import { alarmModeReducer } from './CatAlarmReducers';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot({
      currentWakeupMode: alarmModeReducer
  }),
    BrowserModule,
    MatButtonModule,
    EffectsModule.forRoot([CatAlarmModeEffect]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
