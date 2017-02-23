import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Header from '../../common/componment/Header/Header'
import Grid from '../../common/componment/Grid/Grid'
import Icon from '../../common/componment/Icon/Icon'
import Group from '../../common/componment/Group/group'

import './assets/index.less'

const iconList = [
        'comment',
        'close',
        'heart-2',
        'wechat',
        'alipay',
        'radio-checked',
        'radio-unchecked',
        'close-fill',
        'close-2',
        'checked-fill',
        'checked-2',
        'timer',
        'category',
        'category-fill',
        'checked',
        'checked-21',
        'activity',
        'activity-fill',
        'add',
        'app-only',
        'arrow-down',
        'arrow-left',
        'arrow-right',
        'arrow-up',
        'auto-hollow',
        'auto-outline',
        'auto-solid',
        'battery',
        'cart-2',
        'cart-empty',
        'gift',
        'heart',
        'help',
        'home',
        'home-fill',
        'location',
        'location-dealer',
        'location-dealer2',
        'checked-hollow',
        'checked-solid',
        'code-verify',
        'coupon',
        'customize',
        'dealer',
        'deposit',
        'findcar',
        'fire',
        'garage',
        'parts',
        'pay',
        'phone',
        'phone-solid',
        'profile',
        'profile-fill',
        'receipt',
        'receiver',
        'search',
        'sign-in',
        'sms',
        'location-solid',
        'location-thin',
        'message',
        'minus',
        'moneybag',
        'more',
        'order',
        'sold',
        'star-2',
        'steering-wheel',
        'stock',
        'transit-fetch',
        'transiting',
        'triangle-down',
        'triangle-left',
        'triangle-up',
        'wheel',
        'wheel-hollow',
        'wheel-solid',
        'owner',
        'unpaid2',
        'camera',
        'deal-closed',
        'app-only-2',
        'location-solid-2',
        'message-2',
        'home-2',
        'share',
        'arrow-up-2',
        'arrow-down-2',
        'arrow-left-2',
        'arrow-right-2',
        'cross',
        'star',
        'cause-cancel',
        'car-parts-1',
        'union-pay',
        'deposit-2',
        'leave-message',
        'unchecked',
        'filter',
        'undelivered',
        'unpaid',
        'uncomment',
        'transited',
        'car-diy',
        'cart-fill',
        'cart',
        'dealer-locator',
        'car-parts',
        'service',
        'selected',
        'insurance',
        'refund',
        'unselectable',
        'car-buy',
        'selectable',
        'feedback',
        'dischecked',
        'filter-2',
        'filter-empty'
      ]

@withRouter
export default class DemoIcon extends Component {

  render() {
    return (
      <div>
        <Header titleContent='Icon组件'/>
        <div className='show-content show-icon'>
            <Group header='Icon组件使用方法'>
                <div>{`<Icon className='class' name='name'/>`}</div>
                <br/>
                <div>className:自定义的class(可省略)</div>
                <div>name:使用的icon的name</div>
            </Group>
            <Group header='Icon一览' noPadding={true}>
                <Grid col={3}>
                    {
                        iconList.map((list, i) => {
                            return(
                                <Grid.Item className='show-content' npPadded={true} col={1}>
                                    <Icon name={list}/>
                                    <p>{list}</p>
                                </Grid.Item>
                            );
                        })
                    }
                </Grid>
            </Group>
        </div>
    </div>
      );
  }
}