import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Grid from '../../common/componment/Grid/Grid'
import Header from '../../common/componment/Header/Header'

import './assets/index.less'


@withRouter
export default class Index extends Component {

  render() {
    return (
      <div>
		<Header titleContent='栅格示例'/>
		<div className='paddTop show-grid'>
			<Grid direction='row-reverse' hAlign='center' vAlign='center' wrap='wrap' collapse={false} >
				<div className='item1'>1</div>
				<div className='item2'>2</div>
				<div className='item3'>3</div>
				<div className='item3'>3</div>
				<div className='item3'>3</div>
				<div className='item3'>3</div>
				<div className='item3'>3</div>
				<div className='item3'>3</div>
				<div className='item3'>3</div>
				<div className='item3'>3</div>
				<div className='item3'>3</div>
				<div className='item3'>3</div>
				<div className='item3'>3</div>
			</Grid>

			<br/><br/>

			<Grid col={0}>
				<Grid.Item></Grid.Item>
				<Grid.Item></Grid.Item>
			</Grid>
			
			<br/><br/>

			<Grid col={5}>
				<Grid.Item></Grid.Item>
				<Grid.Item></Grid.Item>
				<Grid.Item></Grid.Item>
				<Grid.Item></Grid.Item>
				<Grid.Item></Grid.Item>
				<Grid.Item></Grid.Item>
				<Grid.Item></Grid.Item>
			</Grid>
			
			<br/><br/>

			<Grid col={6}>
				<Grid.Item col={2} offset={1}></Grid.Item>
				<Grid.Item col={3}></Grid.Item>
			</Grid>
			
			<br/><br/>

			<Grid col={4}>
				<Grid.Item col={1}>
					<div>hsiuyifgreitifhgkhtkryddshkuh</div>
					<div>agfyugatiuhroiyhkutsrhyiuarhgiuratiurhylkrheayihreiuyhieray</div>
				</Grid.Item>
				<Grid.Item col={1}></Grid.Item>
				<Grid.Item col={1} align='start'>
					<div className='item4'></div>
				</Grid.Item>
				<Grid.Item col={1}></Grid.Item>
				<Grid.Item col={2}></Grid.Item>
				<Grid.Item col={3}></Grid.Item>
			</Grid>
		</div>
	</div>
      );
  }
}