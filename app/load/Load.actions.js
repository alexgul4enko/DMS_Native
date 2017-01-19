import Constances from './Constances';

const LoadActions = {
	initLoadActions: ()=>{
		return {
			type:Constances.INIT_DATA_TO_LOAD,
		}
	},
	clearLoadActions:()=>{
		return {
			type:Constances.CLEAR_DATA_TO_LOAD,
		}
	},

	reloadData:rehidrate=>{
		return {
			type:Constances.RELOAD_DATA_TO_LOAD,
			rehidrate,
		}
	},

	getRoutes:()=>{
		return (dispatch , getState )=>{
			const state = getState();
			const {serverUrl, user } = state;
			loadRoutes(serverUrl, user)
			.then(data=>{
				dispatch(saveRoutesToStage(data));
				dispatch(finishLoadPart({'id':'routes',err:''}));
			})
			.catch(err=>{
				dispatch(finishLoadPart({'id':'routes',err}));
			})

		}
	},
	getTT:()=>{
		return (dispatch , getState )=>{
			const state = getState();
			const {serverUrl, user } = state;
			loadMagazines(serverUrl, user)
			.then(data=>{
				dispatch(saveTTToStage(data));
				dispatch(finishLoadPart({'id':'TT',err:''}));
			})
			.catch(err=>{
				dispatch(finishLoadPart({'id':'TT',err}));
			})

		}
	},
	getActions:()=>{
		return (dispatch , getState )=>{
			const state = getState();
			const {serverUrl, user } = state;
			loadActions(serverUrl, user )
			.then(data=>{
				dispatch(saveActionsToStage(data));
				dispatch(finishLoadPart({'id':'Actions',err:''}));
			})
			.catch(err=>{
				dispatch(finishLoadPart({'id':'Actions',err}));
			})

		}
	},
	getPayForms:()=>{
		return (dispatch , getState )=>{
			const state = getState();
			const {serverUrl, user } = state;
			loadPayForms(serverUrl, user )
			.then(data=>{
				dispatch(savePayFormsToStage(data));
				dispatch(finishLoadPart({'id':'Payforms',err:''}));
			})
			.catch(err=>{
				dispatch(finishLoadPart({'id':'Payforms',err}));
			})

		}
	},
	getPriceList:()=>{
		return (dispatch , getState )=>{
			const state = getState();
			const {serverUrl, user } = state;
			loadPricelist(serverUrl, user )
			.then(data=>{
				dispatch(savePriceListToStage(data));
				dispatch(finishLoadPart({'id':'pricelist',err:''}));
			})
			.catch(err=>{
				dispatch(finishLoadPart({'id':'pricelist',err}));
			})

		}
	},
	getTTPriceList:()=>{
		return (dispatch , getState )=>{
			const state = getState();
			const {serverUrl, user } = state;
			loadTTPricelist(serverUrl, user )
			.then(data=>{
				dispatch(saveTTPriceListToStage(data));
				dispatch(finishLoadPart({'id':'TTpricelist',err:''}));
			})
			.catch(err=>{
				dispatch(finishLoadPart({'id':'TTpricelist',err}));
			})

		}
	},
	getProducts:()=>{
		return (dispatch , getState )=>{
			const state = getState();
			const {serverUrl, user } = state;
			loadProducts(serverUrl, user )
			.then(data=>{
				dispatch(saveProductsToStage(data));
				dispatch(finishLoadPart({'id':'products',err:''}));
			})
			.catch(err=>{
				dispatch(finishLoadPart({'id':'products',err}));
			})

		}
	},
	getTTProducts:()=>{
		return (dispatch , getState )=>{
			const state = getState();
			const {serverUrl, user } = state;
			loadTTProducts(serverUrl, user )
			.then(data=>{
				dispatch(saveTTProductsToStage(data));
				dispatch(finishLoadPart({'id':'TTProducts',err:''}));
			})
			.catch(err=>{
				dispatch(finishLoadPart({'id':'TTProducts',err}));
			})

		}
	},
	getWH:()=>{
		return (dispatch , getState )=>{
			const state = getState();
			const {serverUrl, user } = state;
			loadWareHouse(serverUrl, user )
			.then(data=>{
				dispatch(saveWareHouseToStage(data));
				dispatch(finishLoadPart({'id':'Warehouse',err:''}));
			})
			.catch(err=>{
				dispatch(finishLoadPart({'id':'Warehouse',err}));
			})

		}
	},
}


const loadWareHouse = (serverUrl, user )=>{
	return new Promise((resolve,reject)=>{
		fetch(`${serverUrl}api/Warehouse`,{
				method: 'POST',
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body:JSON.stringify({user:user.UserLogin, pass:user.pass})
		})
		.then(response => response.json())
		.then(WH=>{
			let WareHouse = {};
			WH.map(prod=>{
				const {id,qty}= prod;
				WareHouse[id] = qty;
			})
			resolve(WareHouse);
		})
		.catch(err=>{
			reject(err.message || err);
		})
	})
}


const loadTTProducts = (serverUrl, user )=>{
	return new Promise((resolve,reject)=>{
		fetch(`${serverUrl}api/ttProducts`,{
				method: 'POST',
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body:JSON.stringify({user:user.UserLogin, pass:user.pass})
		})
		.then(response => response.json())
		.then(prods=>{
			let ttproductsList = {};
			prods.map(prod=>{
				const {ttId,ProdID,sort,col,gr}= prod;
				if(!ttproductsList[ttId]){
					ttproductsList[ttId]={};
				}
				ttproductsList[ttId][ProdID] = {sort,col,gr};

			})
			resolve(ttproductsList);
		})
		.catch(err=>{
			reject(err.message || err);
		})
	})
}

const loadProducts = (serverUrl, user )=>{
	return new Promise((resolve,reject)=>{
		fetch(`${serverUrl}api/products`,{
				method: 'POST',
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body:JSON.stringify({user:user.UserLogin, pass:user.pass})
		})
		.then(response => response.json())
		.then(prods=>{
			let productsList = {};
			prods.map(prod=>{
				const {id}= prod;
				productsList[id] = prod;
			})
			resolve(productsList);
		})
		.catch(err=>{
			reject(err.message || err);
		})
	})
}


const loadTTPricelist = (serverUrl, user )=>{
	return new Promise((resolve,reject)=>{
		fetch(`${serverUrl}api/ttPriceList`,{
				method: 'POST',
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body:JSON.stringify({user:user.UserLogin, pass:user.pass})
		})
		.then(response => {
			if (response.ok){
				return response.json();
			}
			else{
				throw new Error(response._bodyText);
			}
		})
		.then(TTPR=>{
			let TTpricelist = {};
			TTPR.map(ttpr=>{
				const {ttID,ProdId,Form,Price,Discount} = ttpr;
				if(!TTpricelist[ttID]){
					TTpricelist[ttID]={};
				}
				if(!TTpricelist[ttID][ProdId]){
					TTpricelist[ttID][ProdId]={};
				}
				TTpricelist[ttID][ProdId][Form] = {pr:Price, disc: Discount}

			})
			resolve(TTpricelist);
		})
		.catch(err=>{
			console.log(err);
			reject(err.message || err);
		})
	})
}

const loadPricelist = (serverUrl, user )=>{
	return new Promise((resolve,reject)=>{
		fetch(`${serverUrl}api/priceList`,{
				method: 'POST',
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body:JSON.stringify({user:user.UserLogin, pass:user.pass})
		})
		.then(response => response.json())
		.then(PR=>{
			let pricelist = {};
			PR.map(pr=>{
				const {ProdId,Form,Price,Discount} = pr;
				if(!pricelist[ProdId]){
					pricelist[ProdId]={};
				}
				pricelist[ProdId][Form] = {pr:Price, disc: Discount}

			})
			resolve(pricelist);
		})
		.catch(err=>{
			reject(err.message || err);
		})
	})
}


const loadPayForms = (serverUrl, user )=>{
	return new Promise((resolve,reject)=>{
		fetch(`${serverUrl}api/payforms`,{
				method: 'POST',
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body:JSON.stringify({user:user.UserLogin, pass:user.pass})
		})
		.then(response => response.json())
		.then(PAYS=>{
			let payforms = {};
			PAYS.map(pf=>{
				const {id,name} = pf;
				payforms[id] = name;
			})
			resolve(payforms);
		})
		.catch(err=>{
			reject(err.message || err);
		})
	})
}




const loadActions = (serverUrl, user )=>{
	return new Promise((resolve,reject)=>{
		fetch(`${serverUrl}api/actions`,{
				method: 'POST',
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body:JSON.stringify({user:user.UserLogin, pass:user.pass})
		})
		.then(response => response.json())
		.then(acts=>{
			let actions = {};
			acts.map(ac=>{
				const {id} = ac;
				actions[id] = ac;
			})
			resolve(actions);
		})
		.catch(err=>{
			reject(err.message || err);
		})
	})
}


const loadMagazines = (serverUrl, user )=>{
	let magazines ={} ;
	return new Promise((resolve,reject)=>{
		fetch(`${serverUrl}api/magazine`,{
				method: 'POST',
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body:JSON.stringify({user:user.UserLogin, pass:user.pass})
		})
		.then(response => response.json())
		.then(TT=>{
			TT.map(mag=>{
				const {id} = mag;
				const pf = {};
				magazines[id] = {...mag, pf };
			});
			return fetch(`${serverUrl}api/TTPayForms`,{
				method: 'POST',
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body:JSON.stringify({user:user.UserLogin, pass:user.pass})
			})
		})
		.then(response => response.json())
		.then(TTPayForms=>{
			TTPayForms.map(payform=>{
				const {ID,pf} = payform;
				if(magazines[ID]){
					magazines[ID].pf[pf]=[]
				}
			})
			return fetch(`${serverUrl}api/TTDiscounts`,{
				method: 'POST',
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body:JSON.stringify({user:user.UserLogin, pass:user.pass})
			})
		})
		.then(response => response.json())
		.then(discounts=>{
			discounts.map(di=>{
				const{ttID,pf,com,disc} = di;
				if(magazines[ttID] && magazines[ttID].pf &&
					magazines[ttID].pf[pf]){
					magazines[ttID].pf[pf].push({com,disc})
				}
			})

			resolve(magazines);

		})
		.catch(err=>{
			reject(err.message || err);
		})
	});

}

const loadRoutes  = (serverUrl, user )=>{
	let routes ;
	return new Promise((resolve,reject)=>{
		fetch(`${serverUrl}api/Routes`,{
				method: 'POST',
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body:JSON.stringify({user:user.UserLogin, pass:user.pass})
		})
		.then(response => response.json())
		.then(data=>{
			routes = data;
			return fetch(`${serverUrl}api/ttActions`,{
				method: 'POST',
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body:JSON.stringify({user:user.UserLogin, pass:user.pass})
			})
		})
		.then(response => response.json())
		.then(ttactions=>{
			let ActionsObject = {};
			ttactions.map(act_=>{
				const {rID,act,id} = act_;
				if(!ActionsObject[rID]){
					ActionsObject[rID] = [];
				}
				ActionsObject[rID].push({act,key:id});
			})

			const finalRoutes = routes.map(rr=>{
				const {id} = rr;
				const actions = ActionsObject[id] || [];
				return {...rr, actions};
			})
			resolve(finalRoutes);
		})
		.catch(err=>{
			reject(err.message || err);
		})
	})
}

const saveWareHouseToStage = rehidrate=>{
	return {
		type:Constances.SAVE_WAREHOUSE_TO_STAGE_LOAD,
		rehidrate,
	}
};

const saveTTProductsToStage = rehidrate=>{
	return {
		type:Constances.SAVE_TTPRODUCTS_TO_STAGE_LOAD,
		rehidrate,
	}
};

const saveProductsToStage = rehidrate=>{
	return {
		type:Constances.SAVE_PRODUCTS_TO_STAGE_LOAD,
		rehidrate,
	}
};

const saveTTPriceListToStage = rehidrate=>{
	return {
		type:Constances.SAVE_TTPRICELIST_TO_STAGE_LOAD,
		rehidrate,
	}
};

const savePriceListToStage = rehidrate=>{
	return {
		type:Constances.SAVE_PRICELIST_TO_STAGE_LOAD,
		rehidrate,
	}
};

const savePayFormsToStage = rehidrate=>{
	return {
		type:Constances.SAVE_PAYFORMS_TO_STAGE_LOAD,
		rehidrate,
	}
};


const saveActionsToStage = rehidrate=>{
	return {
		type:Constances.SAVE_ACTIONS_TO_STAGE_LOAD,
		rehidrate,
	}
};
const saveTTToStage = rehidrate=>{
	return {
		type:Constances.SAVE_TT_TO_STAGE_LOAD,
		rehidrate,
	}
};

const finishLoadPart = rehidrate =>{
	return {
		type:Constances.FINISH_LOAD_PART,
		rehidrate,
	}
};

const saveRoutesToStage = rehidrate=>{
	return {
		type:Constances.SAVE_ROUTES_TO_STAGE_LOAD,
		rehidrate,
	}
};












export default LoadActions;