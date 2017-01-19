
import { View, Text , TextInput, Image,StyleSheet,Button } from 'react-native';
import React, {Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class LoginComponent extends Component{
	constructor(props){
		super(props);
		this.state = {
			login : "",
			pass : ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handlePassChange = this.handlePassChange.bind(this);
		this.LoginSubmit = this.LoginSubmit.bind(this);
		this.login  = this.login.bind(this);
		this.goToProps = this.goToProps.bind(this);
	}

	handleChange(login){
		this.setState({login});
	}
	handlePassChange(pass){
		this.setState({pass});
	}

	componentDidMount() {
		// this.refs.login.focus();
	}
	LoginSubmit(){
		this.refs.pass.focus()
	}

	componentWillUnmount() {
		this.props.setError("");
	}

	login(){
		if(!this.state.login){
			this.props.setError("Введите логин");
		}
		else if(!this.state.pass){
			this.props.setError("Введите пароль");
		}
		else if(!this.props.url){
			this.props.setError("Введите url сервера");
		}
		else{
			this.props.login(this.state.login, this.state.pass, this.props.url);
		}
		
	}

	goToProps(){
		Actions.props();
	}

	render(){

		return(
				<View style = {style.main}>
					<Image 
						style={styles_img.stretch}
						source={require('../../images/big-logo-ba.png')}
					/>
					<View  style = {style.inputsView}>
						<View style = {style.inputWrapper}>
							<TextInput 
								autoFocus = {false}
								underlineColorAndroid='transparent'
								ref = "login"
								onSubmitEditing  = {this.LoginSubmit}
								onChangeText = {this.handleChange}
								placeholder ="Логин"
								placeholderTextColor ="#c7c8ce"
								value= {this.state.login} 
								style = {{...style.input, 
											color : this.state.login == "Login" ?
														"#c7c8ce" : "white"}}/>
						</View>
						<View style = {style.inputWrapper}>
							<TextInput 
								ref = "pass"
								underlineColorAndroid='transparent'
								onChangeText = {this.handlePassChange}
								placeholder ="Пароль"
								placeholderTextColor ="#c7c8ce"
								value= {this.state.pass} 
								secureTextEntry ={true}
								style = {{...style.input, 
											color : this.state.pass == "Password" ?
														"#c7c8ce" : "white"}}/>
						</View>
						<Icon.Button 
							style = {style.button}
							name="sign-in" 
							size = {30}
							backgroundColor="#556167" 
							onPress={this.login}>
						  
						 </Icon.Button>
						 <Text style = {style.error}>{this.props.error || ""}</Text>
					</View>

					<Icon 
							style = {style.propsButton}
							name="cogs" 
							size = {30}
							backgroundColor="#556167" 
							onPress={this.goToProps}>
					</Icon>

						

					
				</View>
			)
	}
};

const WINDOW_WIDTH= Dimensions.get('window').width;
const WINDOW_HEIGHT= Dimensions.get('window').height;
const styles_img = StyleSheet.create({
  stretch: {
    width: 200,
    height: 50,
  }
});



style = {
	error:{
		marginTop : 7,
		color: "#f44336",
	},
	propsButton:{
		position:"absolute",
		top:5,
		right:5,
		color:"white",
	},
	button:{
		paddingLeft: 85,
		paddingRight:85,
    	height: 50,
    	borderColor:"white",
    	borderWidth: 1,
    	marginTop: 5,
	},
	image:{
        maxWidth :10,
    },
	inputsView:{
		marginTop:5,
		flex:2,
		flexDirection:"column",
		alignItems:"center",
	},
	main : {
		position:"relative",
		flex:2,
		backgroundColor:"#556167",
		paddingTop:5,
		flexDirection:"column",
		alignItems:"center",
		justifyContent:"center",
	},
	input :{
		height: 40,
		paddingLeft: 10,
		paddingTop:5,
		paddingBottom:5,

	},
	inputWrapper:{
		borderBottomWidth:1,
		borderBottomColor:"#ffffff",
		width:250,
	}
}
