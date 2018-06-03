import { Action } from '@ngrx/store';
import { EffectError} from './EffectErrors';
import { WakeupMode } from './WakeupMode';
import { GET_DEFAULT_ALARM_MODE_SUCCESS, GET_DEFAULT_ALARM_MODE_FAILED, GetDefaultAlarmModeSuccessAction, GetDefaultAlarmModeFailureAction /*, GetDefaultAlarmModeResponseAction */ } from './CatAlarmActions';

export function alarmModeReducer(state: WakeupMode = {id: 1, wakeup_mode: "Meowing loudly for food"}, 
        action: GetDefaultAlarmModeSuccessAction) {
    switch (action.type) {
        case GET_DEFAULT_ALARM_MODE_SUCCESS:
            const alarmModeFromBackend = Object.assign({}, state, {
                id: action.payload.id,
                wakeup_mode: action.payload.wakeup_mode
            });
            return alarmModeFromBackend;   
        default:
            return state;
    }
}

export function errorReducer(state: EffectError = {status: 200, error: "OK"}, 
        action: GetDefaultAlarmModeFailureAction) {
    switch (action.type) {
        case GET_DEFAULT_ALARM_MODE_FAILED:
            const errorFromBackend = Object.assign({}, state, {
                status: action.payload.status,
                error: action.payload.error
            });
            return errorFromBackend;            
        default:
            return state;
    }
}