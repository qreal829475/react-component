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

const diy_header = (
<Card.Child cover="http://lorempixel.com/1000/625/people/">
    带图文的header
  </Card.Child>
);

const diy_footer = (
<Card.Child role="footer" className='footer'>
    <a href="javascript: void(0)">Like    </a>
    <a href="javascript: void(0)">Comment    </a>
    <a href="javascript: void(0)">ReadMore    </a>
  </Card.Child>
);

@withRouter
export default class DemoCard extends Component {

  render() {
    return (
      <div>
        <Header titleContent='Card组件'/>
        <div className='show-content'>
            <Group header='简单的card' noPadding={true}>
            <Card class='' >
                我是一个内容
            </Card>
            </Group>
            <Group header='带title的Card' noPadding={true}>
            <Card className='' title='这是一个标题' >
                我是一个内容
            </Card>
            </Group>
            <Group header='带header的Card' noPadding={true}>
            <Card className='' header="Card header" >
                我是一个内容
            </Card>
            </Group>
            <Group header='带header和footer的Card' noPadding={true}>
            <Card className='' header="Card header" footer="Card footer" >
                我是一个内容
            </Card>
            </Group>
            <Group header='自定义header和footer的Card' noPadding={true}>
            <Card header={diy_header} >
                我是一个内容
            </Card>
            <Card className='' title="标题" footer={diy_footer} >
                我是一个内容
            </Card>
            </Group>
        </div>
    </div>
      );
  }
}