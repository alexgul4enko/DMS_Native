import Constances from './Constances';
export default function ServerUrlReducer (state = "", action){
	switch(action.type){
		case Constances.CHANGE_SERVER_URL:
			return action.url;
		default :
			return state;
	}
}