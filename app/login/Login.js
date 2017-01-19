import React, {Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './login.actions';
import LoginComponent from './component/LoginComponent';






class Login extends Component {
	render (){
		return <LoginComponent 
					login = {this.props.login}
					url = {this.props.serverUrl}
					error = {this.props.user && this.props.user.error || ""}
					setError = {this.props.errorLogin}/>
	}
}



function mapStateToProps(state= {}) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);