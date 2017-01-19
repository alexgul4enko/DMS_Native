import Constances from "./Constances";



export default function loginReducer (state = {}, action){
	switch(action.type){
		case Constances.ERROR_LOGIN:
			return Object.assign({},state,{error:action.rehidrate});
		case Constances.LOGIN:
			return Object.assign({},state,action.rehidrate, {error:"",loadet:true});
		default :
			return state;
	}
}