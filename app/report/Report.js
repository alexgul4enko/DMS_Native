import React, { Component } from 'react';
import {Text,View} from 'react-native';


class Report extends Component {
	constructor(props){
		super(props);
	}
	render (){	
		console.log('------------------------REPORT RENDER-----------------------');
		return(
				<View>
					<Text>Report</Text>
				</View>
		)
	}
	componentDidMount() {


	}

	componentWillUnmount() {
	}
}


export default Report;