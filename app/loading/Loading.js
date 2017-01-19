import React, { Component } from 'react';
import {Text,View} from 'react-native';

import Spinner  from  'react-native-spinkit' ;

class Loading extends Component {
	render (){
		return(
				<View style = {styles.main}>
					<Spinner 
						style={styles.spinner} 
						isVisible={true}
						size={100} 
						type="WanderingCubes"
						color="#FFFFFF"/>
				
				</View>
		)
	}
}


const styles = {
		main:{
			backgroundColor:"#556167",
			flex:1,
			flexDirection:"column",
			justifyContent:"center",
			alignItems: 'center',
		},
		spinner: {
   			// marginBottom: 50
  		}
};


export default Loading;






					