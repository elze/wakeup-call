import { Action } from '@ngrx/store';
import { WakeupMode } from './WakeupMode';
export const GET_DEFAULT_ALARM_MODE = 'GET_DEFAULT_ALARM_MODE';
export const GET_DEFAULT_ALARM_MODE_SUCCESS = 'GET_DEFAULT_ALARM_MODE_SUCCESS';

export class GetDefaultAlarmModeAction implements Action {
    readonly type = GET_DEFAULT_ALARM_MODE;
    constructor(public payload: WakeupMode) {}
  }

export class GetDefaultAlarmModeSuccessAction implements Action {
    readonly type = GET_DEFAULT_ALARM_MODE_SUCCESS;
    constructor(public payload: WakeupMode) {}
  }
