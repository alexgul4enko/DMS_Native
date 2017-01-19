import React, { Component } from 'react';
import LoadComponent from './components/LoadComponent';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './Load.actions';


class Load extends Component {
	render (){
		return <LoadComponent {...this.props}/>
		
	}
	componentDidMount() {
		this.props.initLoadActions();
	}

	componentWillUnmount() {
		this.props.clearLoadActions();
	}


	// post(){
	// 	fetch('http://192.168.1.39:9083/api/Routes', {
	// 				method: 'POST',
	// 				headers: {
	// 					'Accept': 'application/json',
	// 					'Content-Type': 'application/json',
	// 				},
	// 				body: JSON.stringify({
	// 							user: 'test',
	// 							pass: '1111',
	// 				})
	// 	})
	// 	.then(response => response.json())
	// 	.then(data=>{
	// 		console.log(data);
	// 	})
	// 	.catch(err=>{
	// 		console.log(err);
	// 	})
	// }
}

function mapStateToProps(state= {}) {
  return {
  	loaders : state.loaders,
  } ;

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Load);