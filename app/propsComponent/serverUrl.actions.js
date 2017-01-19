import Constances from './Constances';


const propsActions = {
	changeServer: url =>{
		return {
			type:Constances.CHANGE_SERVER_URL,
			url,
		}
	}
}

export default propsActions;