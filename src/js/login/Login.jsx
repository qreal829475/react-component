import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Header from '../../common/componment/Header/Header'
import Login from './componment/login'
import Footer from '../../common/componment/Footer/Footer'


@withRouter
export default class Index extends Component {

	render() {
		return (
			<div className='page'>
				<Header titleContent='登陆'/>
				<Login />
				<Footer />
			</div>
		);
	}
}