import { Action } from '@ngrx/store';
import { WakeupMode } from './WakeupMode';
import { GET_DEFAULT_ALARM_MODE_SUCCESS, GetDefaultAlarmModeSuccessAction } from './CatAlarmActions';

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
