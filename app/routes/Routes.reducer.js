import Constances from './Constances';

export const GPSReducer = (state = {}, action)=>{
	switch(action.type){
		case Constances.INIT_GPS_WATCHER:
			return {};
		default:
			return state;
	}
}