import { View, Text } from 'react-native';
import React, {Component } from 'react';
import { Actions } from 'react-native-router-flux';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './preload.actions';


 class Preload extends Component{
	render(){
		return(
				<View >
					<Text 
						onPress={() => Actions.tabbar()}
						>THIS IS Preload</Text>
				</View>
			)
	}

	componentDidMount() {
		// this.props.rehidrate();	
	}


}


function mapStateToProps(state = {}) {
	return  state;
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Preload);
