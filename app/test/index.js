import React , {Component} from 'react';
import {StyleSheet,Text, View}  from 'react-native';

import {Router , Scene } from 'react-native-router-flux';
import Scarlet from './Scarlet';
import Grey from './Grey';

import Blue from './Blue';
import Maize from './Maize';

import Black from './Black';
import Gold from './Gold';



import Modal from './Madal';




const TabIcon = ({selected,title})=>{
	return (
		<Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
	);
}

const WELCOME =  () =>{

	return (

		<Router>
			<Scene key="root">

				<Scene
					key = "tabbar"
					tabs
					tabBarStyle = {{backgroundColor :"#FFFFFF"}}
				>
					<Scene key = "osu" title = "OSU" icon = {TabIcon}>
						<Scene
							key= "scarlet"
							component={Scarlet}
							title = "Scarlet"
							initial = {true}
							
						/>
						<Scene
							key= "grey"
							component={Grey}
							title = "Grey"
						/>
					</Scene>

					<Scene key = "um" title = "UM" icon = {TabIcon}>
						<Scene
							key= "blue"
							component={Blue}
							title = "Blue"
							initial = {true}
						/>
						<Scene
							key= "maize"
							component={Maize}
							title = "Maize"
						/>
					</Scene>

					<Scene key = "vu" title = "VU" icon = {TabIcon}>
						<Scene
							key= "gold"
							component={Gold}
							title = "Gold"
							initial = {true}
						/>
						<Scene
							key= "black"
							component={Black}
							title = "Black"
						/>
					</Scene>

				</Scene>

				<Scene 
					key = "modal"
					component = {Modal}
					title = "Modal"
					direction= "vertical"
					hideNavBar

				/>

						

			</Scene>
		</Router>
	)
}


const styles = {
	container:{
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome:{
		fontSize:20,
		textAlign:'center',
		margin:10,
		color:'#000000'
	}
};



export default WELCOME;