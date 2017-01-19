import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './serverUrl.actions';
import ServerUrlComponet from './components/ServerUrlComponet';


class ServerUrl extends Component{
	render(){
		return <ServerUrlComponet 
					url= {this.props.serverUrl}
					setUrl = {this.props.changeServer}
				/>
	}

}


function mapStateToProps(state= {}) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerUrl);


