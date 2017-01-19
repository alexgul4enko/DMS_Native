import React , {Component} from 'react';
import {StyleSheet,Text, View}  from 'react-native';


import {Actions} from 'react-native-router-flux';


function Grey (props){
	return (
		<View style = {styles.container}>
			<Text 
				style = {styles.welcome}
				onPress = {()=>Actions.scarlet()}>
				Grey Screan
			</Text>
		</View>
	)
}


const styles = {
	container:{
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#666666'
	},
	welcome:{
		fontSize:20,
		textAlign:'center',
		margin:10,
		color:'#ffffff'
	}
};



export default Grey;