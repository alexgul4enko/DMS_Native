

const PreloadActions = {
	rehidrate: ()=>{
		return (dispatch, getState)=>{
			setTimeout(()=>{
				dispatch(rerehidrate());
			},2000)
		}
	}
}


const rerehidrate = ()=>{
	return {
			type:"HELOO____",
	}
}


export default PreloadActions;