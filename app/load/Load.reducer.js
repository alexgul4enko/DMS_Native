import  Constances from './Constances';


export const LoadReducer  =  (state=[], action)=>{
	switch (action.type){
		case Constances.INIT_DATA_TO_LOAD:
			return [
				{id:'routes', title : 'Маршруты', load : false,err:''},
				{id:'TT', title : 'ТТ', load : false,err:''},
				{id:'pricelist', title : 'Прайслист', load : false,err:''},
				{id:'TTpricelist', title : 'Спец. Прайслист', load : false,err:''},
				{id:'Actions', title : 'Задания', load : false,err:''},
				{id:'Payforms', title : 'Формы оплаты', load : false,err:''},
				{id:'products', title : 'Продукты', load : false,err:''},
				{id:'TTProducts', title : 'Спец. продукты', load : false,err:''},
				{id:'Warehouse', title : 'Склад', load : false,err:''}
			];
		case Constances.RELOAD_DATA_TO_LOAD:
			return state.map(loads=>{
				if(loads.id == action.rehidrate){
					return Object.assign({},loads,{load : false,err:''});
				}
				return loads;
			}).filter(loads=>{
				return loads.id!="finish";
			});
		case Constances.CLEAR_DATA_TO_LOAD:
			return [];
		case Constances.FINISH_LOAD_PART:
			let co_loadet=state.length;
			const {id} = action.rehidrate;
			let newLoads = state.map(ss=>{
				if(ss.load){
					co_loadet--;
				}
				if(ss.id == id){
					return Object.assign({},ss,action.rehidrate, {load: true});
					co_loadet--;
				}
				return ss;
			});
			if(co_loadet==1){
				return [...newLoads , {id:'finish', title : 'Завершить', load : false,err:''}]
			}
			return newLoads;
		default:
			return state;
	}
}


export const  initRoutesReducer  = (state = [], action) =>{
	switch (action.type){
		case Constances.SAVE_ROUTES_TO_STAGE_LOAD:
			return action.rehidrate;
		default:
			return state;
	}
}
export const  initTTReducer  = (state = {}, action) =>{
	switch (action.type){
		case Constances.SAVE_TT_TO_STAGE_LOAD:
			return action.rehidrate;
		default:
			return state;
	}
}


export const  initPayFormsReducer  = (state = {}, action) =>{
	switch (action.type){
		case Constances.SAVE_PAYFORMS_TO_STAGE_LOAD:
			return action.rehidrate;
		default:
			return state;
	}
}



export const  initPriceListReducer  = (state = {}, action) =>{
	switch (action.type){
		case Constances.SAVE_PRICELIST_TO_STAGE_LOAD:
			return action.rehidrate;
		default:
			return state;
	}
}
export const  initTTPriceListReducer  = (state = {}, action) =>{
	switch (action.type){
		case Constances.SAVE_TTPRICELIST_TO_STAGE_LOAD:
			return action.rehidrate;
		default:
			return state;
	}
}

export const  initProductsReducer  = (state = {}, action) =>{
	switch (action.type){
		case Constances.SAVE_PRODUCTS_TO_STAGE_LOAD:
			return action.rehidrate;
		default:
			return state;
	}
}

export const  initTTProductsReducer  = (state = {}, action) =>{
	switch (action.type){
		case Constances.SAVE_TTPRODUCTS_TO_STAGE_LOAD:
			return action.rehidrate;
		default:
			return state;
	}
}

export const  initWareHouseReducer  = (state = {}, action) =>{
	switch (action.type){
		case Constances.SAVE_WAREHOUSE_TO_STAGE_LOAD:
			return action.rehidrate;
		default:
			return state;
	}
}














