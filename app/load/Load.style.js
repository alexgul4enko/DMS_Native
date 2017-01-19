import {Platform} from 'react-native';
const DIALOG_TOP = Platform.OS === 'ios' ? 1 : 31;
export default {
	scrollView:{
		flex:1,
	},
	spinner:{

	},
	loadView:{
		flex:1,
		flexDirection:'row',
		flexWrap: 'nowrap',
		padding:5,
		alignItems:'center'
	},
	loadViewText:{
		lineHeight:30,
		color:"#232627",
		paddingLeft:8,
		paddingRight:5,
		fontSize:20,
	},
	propsButton:{
		color:"#4caf50",
	},
	propsButtonR:{
		color:"#f44336",
	},
	finishButton:{
		marginLeft: 15,
		marginRight:15,
    	height: 50,
    	borderColor:"white",
    	borderWidth: 1,
    	marginTop: 5,
    	flex:1,
    	alignItems:'center',


	},
	dialogContentView:{
		flex:3,
		flexDirection:'column',
		flexWrap:'nowrap',
		justifyContent:"space-between",
		paddingTop:1,
		paddingBottom:DIALOG_TOP,
		paddingRight:2,
		paddingLeft:2,
	},
	ErrorHeader:{
		backgroundColor:"#f44336",
		alignItems:'center',
		paddingTop:5,
		paddingBottom:5,
		borderRadius:5,

	},
	errorTitle:{
		color:"white",
	},
	errorText:{
		textAlign:'center',
		fontSize:18,
	},
	reloadError:{
		backgroundColor:"#556167",
		paddingTop:5,
		paddingBottom:5,
		alignItems:'center',
		height:40,
	}
}

