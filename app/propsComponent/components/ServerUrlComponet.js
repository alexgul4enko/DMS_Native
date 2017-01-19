import React, {Component, PropTypes} from 'react';
import { View, Text , TextInput} from 'react-native';


export default class ServerUrlComponet  extends Component{

	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(url){
		this.props.setUrl(url);
    }

	render(){
		return (
			<View style ={styles.main}>
				<View style = {styles.data}>
					<Text style = {styles.title} >Укажите url сервера</Text>
					<View style = {styles.inputWrapper}>
						<TextInput 
							underlineColorAndroid='transparent'
							style = {styles.input} 
							value = {this.props.url || "https://192.168.1.3:9082/"}
							onChangeText ={this.handleChange}/>
					</View>
				</View>

			</View>
		)
	}

}


const styles = {
	main:{
		flex:1,
		backgroundColor:"#556167",
		paddingTop: 10,
	},
	data:{
		flex:2,
		alignItems:"center",
	},
	title:{
		fontSize:20,
		color:"white",
		paddingTop:10,
		paddingBottom:15,
	},
	inputWrapper:{
		borderBottomWidth:1,
		borderBottomColor:"#ffffff",
		width:250,
	},
	input :{
		height: 40,
		paddingLeft: 10,
		paddingTop:5,
		paddingBottom:5,
		color:"white",
	}

};

ServerUrlComponet.defaultProps ={
	url:"https://192.168.1.3:9082/",
}

ServerUrlComponet.propTypes = {
	url:PropTypes.string.isRequired,
	setUrl:PropTypes.func.isRequired,
}