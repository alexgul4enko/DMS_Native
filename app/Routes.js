import React, { Component } from 'react';
import { Router, Scene, Actions ,Switch, Button,ActionConst} from 'react-native-router-flux';
import {Image,StatusBar,Text,View,Platform,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './login/Login';
import Loading from './loading/Loading';
import Welcome from './welcome/Welcome';
import Documents from './documents/Documents';
import Report from './report/Report';
import Preload from './preload/Preload';
import ServerUrl from './propsComponent/ServerUrl';
import Router_S from './routes/Routes';
import Load from './load/Load';

import { connect, Provider } from 'react-redux';

function mapStateToProps(state= {}) {
  return {routes:state.routes};
}


const RouterWithRedux = connect(mapStateToProps)(Router);

class TabIcon extends React.Component {
    render(){

        const iconTab = (title,selected) =>{
            const tabbarIconStyles = {
                color: '#ffffff',
                backgroundColor: selected? "#232627" : '#34383A',
                flex:1,
                alignSelf: 'stretch',
                textAlign: 'center',
                lineHeight:50
            }
            const FontSIZEICON = Platform.OS === 'ios' ? 24 : 18;
            switch(title){
                case "Routes":
                    return (<Icon 
                                style = {tabbarIconStyles}
                                name="map-o" 
                                size = {FontSIZEICON}

                                />);
                case "Documents":
                    return (<Icon 
                                style = {tabbarIconStyles}
                                name="file-text-o" 
                                size = {FontSIZEICON}
                            />);
                case "Report":

                    return (<Icon 
                                style = {tabbarIconStyles}
                                name="line-chart" 
                                size = {FontSIZEICON}
                            />);
                default:
                    return <Text style={tabbarIconStyles}>{title}</Text>;
            }
        }
        return iconTab (this.props.title, this.props.selected)
    }
}


const OptionKey = ()=>{
     return (
          <View stlye={styles.rightButton}>
              <Button style={{color: 'green'}}>
                 +
              </Button>
          </View>
      )
}


export default class Routes extends Component {
    constructor(props) {
        super(props);
        StatusBar.setBarStyle('light-content', true);

    }

    render() {
        return (
           <RouterWithRedux
                                    
                navigationBarStyle={styles.navBar} 
                itleStyle={styles.navBarTitle} 
                barButtonTextStyle={styles.barButtonTextStyle}
                barButtonIconStyle={styles.barButtonIconStyle}
                titleStyle={{color : "#FFF"}}>



                <Scene
                    key="root"
                    component={connect(state=>({profile:state.storeReducer}))(Switch)}
                    tabs={true}
                    unmountScenes
                    selector={props=>props.profile.storageLoaded ? "welcome" : "loading"}
                    >

                    <Scene
                        key= "loading"
                        component={Loading}
                        title = "DMS"
                        sceneStyle={styles.modal}
                    />


                   
                    <Scene 
                        key= "welcome"
                        component={connect(state=>({user:state.user}))(Switch)}
                        unmountScenes 
                        tabs={true}
                        selector={props=>props.user && props.user.loadet ? "loged" : "login"}>

                        

                        <Scene key = "login">
                                <Scene 
                                    key = "login2"
                                    renderBackButton = {()=>null}
                                    component={Login}
                                    title = "DMS"
                                    sceneStyle={styles.modal}
                                    initial
                                />
                                <Scene
                                    key = "props"
                                    component={ServerUrl}
                                    title = "DMS"
                                    sceneStyle={styles.modal}
                                    direction= "vertical"
                                />    
                        </Scene>

                        <Scene key = "loged" >
                                <Scene
                                    key = "loged3"
                                    renderBackButton = {()=>null}
                                    component={Welcome}
                                    title = "DMS"
                                    sceneStyle={styles.modal}
                                    initial
                                />

                                <Scene
                                    key = "load"
                                    component={Load}
                                    title = "DMS"
                                    sceneStyle={styles.modal}
                                    direction= "horizontal"
                                    
                                />


                                <Scene
                                    key = "tabbar"
                                    tabs = {true}
                                    direction= "vertical"
                                    tabBarStyle = {{backgroundColor :"#232627"}}
                                >
                                    <Scene 
                                        key = "tab1"  
                                        title = "Routes"  
                                        icon = {TabIcon}
                                        onPress={()=> {
                                                  Actions.routes({type: ActionConst.REFRESH});
                                                }}>
                                        <Scene
                                            key= "routes"
                                            component={Router_S}
                                            title = "DMS"
                                            initial = {true}
                                            sceneStyle={styles.container}
                                            
                                        />
                                    </Scene>
                                     <Scene 
                                        key = "tab2" 
                                        title = "Documents" 
                                        icon = {TabIcon}
                                        onPress={()=> {
                                                  Actions.documents({type: ActionConst.REFRESH});
                                                }}>
                                        <Scene
                                            key= "documents"
                                            component={Documents}
                                            title = "DMS"
                                            initial = {true}
                                            sceneStyle={styles.container}

                                        />
                                    </Scene>
                                     <Scene 
                                        key = "tab3" 
                                        title = "Report" 
                                        icon = {TabIcon}
                                        onPress={()=> {
                                                  Actions.report({type: ActionConst.REFRESH});
                                                }}>
                                        <Scene
                                            key= "report"
                                            component={Report}
                                            title = "DMS"
                                            initial = {true}
                                            sceneStyle={styles.container}
                                        />
                                    </Scene>

                                </Scene>
                        </Scene>
                    </Scene>
                </Scene>

           </RouterWithRedux>
        );
    }
}



const HEADER_HEIGHT = Platform.OS === 'ios' ? 64 : 54;
const TABBAR_HEIGHT = 50;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#556167',
        paddingTop: HEADER_HEIGHT,
        paddingBottom: TABBAR_HEIGHT
    },
    rightButton: {
        color :"#ffffff"
    },
    modal: {
        flex: 1,
        backgroundColor: '#556167',
        paddingTop: HEADER_HEIGHT,
    },
    navBar: {
        backgroundColor:'#232627',

    },
    navBarTitle:{
        color:'#ffffff',
    },
    barButtonTextStyle:{
        color:'#e8edef',
    },
    barButtonIconStyle:{
        tintColor:'rgb(255,255,255)',
    },
});


