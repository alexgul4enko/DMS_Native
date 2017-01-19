import Constances from './Constances';

const RouteActions = {
	initRoutes : (date = new Date())=>{
		console.log("H!!!!!!!!!!!!!!!!!!!!!!!!!!!")
		return (dispatch, getState)=>{
			const Router = getState();
			console.log(Router);
		}
	}

}

export default RouteActions;