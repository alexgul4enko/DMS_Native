import React, { Component } from 'react';
import {Text,View, TouchableHighlight} from 'react-native';

import { Actions ,ActionConst} from 'react-native-router-flux';

export default  class WelcomeComponent extends Component {

	render (){
		return(
				<View style = {style_welcome.main__ } key = {this.props.routes.scene.name}>
					<Text 
						style = {style_welcome.input_stile}
						onPress={() => Actions.tabbar()}>
						{'Продолжить'}
					</Text>
					<Text 
						style = {style_welcome.input_stile}
						onPress={() => Actions.load()}>
						Синхронизироваться

						
					</Text>

				</View>
		)
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}


}

const style_welcome ={
	main__ :{
		position:"relative",
		flex:2,
		backgroundColor:"#556167",
		paddingTop:5,
		flexDirection:"column",
	},
	input_stile:{
		color:"white",
		backgroundColor:"#232627",
		paddingTop:10,
		paddingBottom:10,
		marginBottom:5,
		textAlign: 'center',
		fontSize:18,
	}
}


