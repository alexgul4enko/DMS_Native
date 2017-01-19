import React, { Component , PropTypes} from 'react';
import {Text,View,ScrollView, Button} from 'react-native';
import styles from '../Load.style'
import LoadTitle from './LoadTitle';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions , ActionConst} from 'react-native-router-flux';
import PopupDialog, {ScaleAnimation} from 'react-native-popup-dialog';

const scaleAnimation = new ScaleAnimation();





export default class  LoadComponent extends Component {
	constructor(props){
		super(props);
		this.state = {
	      error: "SOME ERROR",
	      id: null,
	    };
	    this.openDialog = this.openDialog.bind(this);
		this.continue = this.continue.bind(this);
		this.reload = this.reload.bind(this);
	}

	continue(){
		Actions.tabbar({type: ActionConst.REPLACE});
	}
	openDialog(error,id) {
		this.setState({error,id});
		this.refs.dialog.openDialog();
	}


	reload(){
		this.refs.dialog.closeDialog();
		this.props.reloadData(this.state.id);
		switch(this.state.id){
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
		this.setState({error:'',id:null});
	}



	render (){
		return (
					<ScrollView style = {styles.scrollView}>
						{
							this.props.loaders.map((data)=>{
								if (data.id == 'finish'){
									return <Icon.Button 
												key = {data.id}
												style = {styles.finishButton}
												name="chevron-circle-right" 
												size = {30}
												backgroundColor="#556167" 
												onPress={this.continue}>
												Продолжить
											 </Icon.Button>
								}
								return <LoadTitle 
											key = {data.id} 
											title = {data.title}
											load = {data.load}
											id = {data.id}
											error = {data.err}
											getRoutes = {this.props.getRoutes}
											getTT = {this.props.getTT}
											getActions = {this.props.getActions}
											getPayForms = {this.props.getPayForms}
											getPriceList = {this.props.getPriceList}
											getTTPriceList = {this.props.getTTPriceList}
											getProducts = {this.props.getProducts}
											getTTProducts ={this.props.getTTProducts}
											getWH = {this.props.getWH}
											openDialog = {this.openDialog}/>
							})
						}
						<PopupDialog
							ref="dialog"
							dialogAnimation={scaleAnimation}
						>
							<View style={styles.dialogContentView}>
								<View style = {styles.ErrorHeader}>
									<Icon 
										name="exclamation-triangle" 
										size = {30}
										style = {styles.errorTitle}
									/>
								</View>
								<Text style = {styles.errorText}>{this.state.error}</Text>
								<Icon.Button 
									style = {styles.reloadError}
									name="refresh" 
									size = {30}
									backgroundColor="#556167" 
									onPress={this.reload}>
									Перезагрузить
								</Icon.Button>
							</View>
						</PopupDialog>
					</ScrollView>
		)
	}
}



LoadComponent.propTypes = {
	loaders : PropTypes.array.isRequired,
}