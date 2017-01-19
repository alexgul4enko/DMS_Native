import React, { Component } from 'react';
import {Text,View} from 'react-native';
import RoutesComponent from './components/RoutesComponent';
import { Actions ,ActionConst} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './Routes.actions';
import styles from './Route.styles';
import Loading from '../loading/Loading';


class Router extends Component {
	render (){
		return this.props.Magazines ? <RoutesComponent/> : <Loading/>;
	}
	componentDidMount() {
		this.props.initRoutes();
	}

	componentWillUnmount() {
	}
}


function mapStateToProps(state= {}) {
	return {
		Magazines : state.Magazines
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);

