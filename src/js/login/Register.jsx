import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Header from '../../common/componment/Header/Header'
import Footer from '../../common/componment/Footer/Footer'


@withRouter
export default class Index extends Component {

	render() {
		return (
			<div className='page'>
				<Header titleContent='注册'/>
				<Footer />
			</div>
		);
	}
}