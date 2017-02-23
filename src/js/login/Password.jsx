import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Header from '../../common/componment/Header/Header'
import Footer from '../../common/componment/Footer/Footer'
import Password from './componment/Password'


@withRouter
export default class Index extends Component {

	render() {
		return (
			<div>
				<Header titleContent='忘记密码'/>
                <Password />
				<Footer />
			</div>
		);
	}
}