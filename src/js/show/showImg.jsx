import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Header from '../../common/componment/Header/Header'
import Img from '../../common/componment/Image/Img'
import Card from '../../common/componment/Card/Card'
import Group from '../../common/componment/Group/group'

import './assets/index.less'

import img1 from './img/1.jpg'
import img2 from './img/2.jpg'

@withRouter
export default class DemoImg extends Component {

  render() {
    return (
      <div>
        <Header titleContent='Img组件'/>
        <div className='show-content'>
            <dt>img组件的必要参数为type、src。</dt>
            <dt>src为图片的路径</dt>
            <dt>type为图片的效果类型</dt>
            <div className='show-img'>
              <p>type: thumbnail</p>
              <Img class='' type='thumbnail' src={img2}/>
              <br/><br/>
              <p>type: circle</p>
              <Img class='' type='circle' src={img2}/>
              <br/><br/>
              <p>type: rounded</p>
              <Img class='' type='rounded' src={img2}/>
            </div>
        </div>
    </div>
      );
  }
}