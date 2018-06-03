import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import {MatButtonModule, MatSnackBarModule} from '@angular/material'; 
import { StoreModule } from '@ngrx/store';

import { CatAlarmModeEffect } from './CatAlarmModeEffect';
import { alarmModeReducer, errorReducer } from './CatAlarmReducers';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot({
      currentWakeupMode: alarmModeReducer,
      currentError: errorReducer
  }),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    EffectsModule.forRoot([CatAlarmModeEffect]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
