import Constances from './Constances'


const LoginActions = {
	login : (login, pass, url)=>{

		return (dispatch, getState)=>{
			fetch(`${url}api/login`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({login,pass,})
			})
			.then(response => {
				if(response && response.status ==401){
					throw new Error("Ошибка авторизации");
				}
				else if(response && response.status ==501){
					throw new Error("Ошибка сервера 1955");
				}
				else if(response && response.status ==200){
					return response.json();
				}
			})
			.then(data =>{
					if(data){
						dispatch(LoginActions.loginPass(data));
					}
					else{
						dispatch(LoginActions.errorLogin("Ошибка сервера 1897"));
					}
				})
			.catch((error) => {
				console.log(error);
				switch(error.message){
					case "Ошибка авторизации":
						dispatch(LoginActions.errorLogin("Ошибка авторизации"));
						break;
					case "Ошибка сервера 1955":
						dispatch(LoginActions.errorLogin("Ошибка сервера 1955"));
						break;
					default :{
						dispatch(LoginActions.errorLogin("Ошибка соединения"));
						break;
					}
				}
				
			});
		}
	},
	errorLogin: rehidrate=>{
		return {
			type:Constances.ERROR_LOGIN,
			rehidrate,
		}
	},

	loginPass: rehidrate=>{
		return {
			type:Constances.LOGIN,
			rehidrate,
		}
	},

}



export default LoginActions;



