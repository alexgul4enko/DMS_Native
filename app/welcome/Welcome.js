import React, {Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import WelcomeComponent from './WelcomeComponent';






class Welcome extends Component {
	render (){
		return (this.props.routes && this.props.routes.scene &&  this.props.routes.scene.name
		 && this.props.routes.scene.name =="loged3" )?  <WelcomeComponent {...this.props}/> :null
	}

	
}


function mapStateToProps(state= {}) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);