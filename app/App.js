import React, { Component } from 'react';
import Routes from './Routes';
import Loading from './loading/Loading';



export default function App (props){
	return (props.storeReducer && props.storeReducer.storageLoaded) ? 
				<Routes /> : 
				<Loading />
}