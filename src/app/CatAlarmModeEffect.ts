import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { GetDefaultAlarmModeAction } from './CatAlarmActions';

@Injectable()
export class CatAlarmModeEffect {
  constructor(
    private http: HttpClient,
    private actions$: Actions
  ) { }

  @Effect() getSkills$ = this.actions$
      // Listen for the 'GET_DEFAULT_ALARM_MODE' action
      .ofType('GET_DEFAULT_ALARM_MODE')
      .map((action: GetDefaultAlarmModeAction) => action.payload)
      // Map the payload into JSON to use as the request body
      .switchMap(payload => 
        this.http.get('/api/wakeupMode/' + payload.id)
        // If successful, dispatch success action with result
        .map(res => ({ type: 'GET_DEFAULT_ALARM_MODE_SUCCESS', payload: res }))
        // If request fails, dispatch failed action
        .catch(() => Observable.of({ type: 'GET_DEFAULT_ALARM_MODE_FAILED' }))
      );
}
