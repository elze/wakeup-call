import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { GET_DEFAULT_ALARM_MODE, GET_DEFAULT_ALARM_MODE_SUCCESS } from './CatAlarmActions';
import { HttpStatus } from './HttpStatuses';
import { WakeupMode } from './WakeupMode';
import { EffectError} from './EffectErrors';

interface WakeupModeState {
  currentWakeupMode: WakeupMode;
  currentError: EffectError;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Cat Alarm';
  wakeupMode: WakeupMode;
  effectError: EffectError;

  constructor(private wakeupModeStore: Store<WakeupModeState>,
    public snackBar: MatSnackBar) {    
    wakeupModeStore.select('currentWakeupMode').subscribe(wMode => {
      this.wakeupMode = wMode;
    });

    wakeupModeStore.select('currentError').subscribe(eError => {
      this.effectError = eError;
      if (eError.status != HttpStatus.OK) {
        snackBar.open(eError.error, "", {
          duration: 3000
        });
      }
      
    });
    
	}

  ngOnInit() {
    // Change id to anything between 1 and 4 to stop seeing the error snackbar
    this.wakeupModeStore.dispatch({ type: GET_DEFAULT_ALARM_MODE, payload: { id: 5 } });
   }    
}
