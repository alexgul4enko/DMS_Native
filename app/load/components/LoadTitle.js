import React, { Component , PropTypes} from 'react';
import {Text,View} from 'react-native';
import styles from '../Load.style'
import Spinner  from  'react-native-spinkit' ;
import Icon from 'react-native-vector-icons/FontAwesome';






export default class  LoadTitle extends Component {
	constructor(props){
		super(props);
		this.openDialog = this.openDialog.bind(this);
		
	}

	openDialog(){
		this.props.openDialog(this.props.error,this.props.id);
	}

	

	render(){
		return (
			<View style = {styles.loadView}>

				{
					this.props.load ? 
						this.props.error? 
							<Icon 
									style = {styles.propsButtonR}
									name="exclamation-triangle" 
									size = {30}
									onPress = {this.openDialog}
									backgroundColor="#4caf50"/>:
							<Icon 
									style = {styles.propsButton}
									name="check" 
									size = {30}
									backgroundColor="#4caf50"/>: 
						<Spinner 
							style={styles.spinner} 
							isVisible={true}
							size={30} 
							type="Wave"
							color="#FFFFFF"
							/>
				}
				<Text style = {styles.loadViewText}>{this.props.title}</Text>
			</View>
		)
	}

	componentDidMount() {
		// setTimeout(()=>{
			switch(this.props.id){
				case 'routes':
					this.props.getRoutes();
					return;
				case 'TT':
					this.props.getTT();
					return;
				case 'Actions':
					this.props.getActions();
					return;
				case 'Payforms':
					this.props.getPayForms();
					return;
				case 'pricelist':
					this.props.getPriceList();
					return;
				case 'TTpricelist':
					this.props.getTTPriceList();
					return;
				case 'products':
					this.props.getProducts();
					return;
				case 'TTProducts':
					this.props.getTTProducts();
					return;
				case 'Warehouse':
					this.props.getWH();
					return;
				default :
					return;
			}
		// },1500)
	}
}


LoadTitle.propTypes = {
	title: PropTypes.string.isRequired,
	load : PropTypes.bool.isRequired,
	id : PropTypes.string.isRequired,
	error : PropTypes.string.isRequired,
}
