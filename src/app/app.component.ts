import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { GET_DEFAULT_ALARM_MODE, GET_DEFAULT_ALARM_MODE_SUCCESS } from './CatAlarmActions';
import { WakeupMode } from './WakeupMode';

interface WakeupModeState {
  currentWakeupMode: WakeupMode;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Cat Alarm';
  wakeupMode: WakeupMode;

  constructor(private wakeupModeStore: Store<WakeupModeState>) {    
    wakeupModeStore.select('currentWakeupMode').subscribe(wMode => {
      this.wakeupMode = wMode;
    });
	}

  ngOnInit() {
    this.wakeupModeStore.dispatch({ type: GET_DEFAULT_ALARM_MODE, payload: { id: 2 } });
   }    
}
