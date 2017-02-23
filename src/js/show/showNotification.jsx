import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Notification from 'rc-notification'
import mobiscroll from "mobiscroll"
import Header from '../../common/componment/Header/Header'
import Group from '../../common/componment/Group/group'

// import Toast from '../../common/componment/Toast/baseToast'
import Toast from '../../common/componment/Toast/toast'

import 'rc-notification/assets/index.css';
import './assets/index.less'



var notification = Notification.newInstance();
// var toast = Toast.newInstance();

var i = 0;

@withRouter
export default class DemoNotification extends Component {

  rc_simpleFn() {
    notification.notice({
      content: <span>simple show</span>,
      onClose() {
        console.log('simple close');
      },
    });
  }

  rc_durationFn() {
    notification.notice({
      content: <span>can not close...</span>,
      duration: null,
    });
  }

  rc_closableFn() {
    notification.notice({
      content: <span>closable</span>,
      duration: null,
      onClose() {
        console.log('closable close');
      },
      closable: true,
    });
  }

  rc_close(key) {
    notification.removeNotice(key);
  }

  rc_manualClose() {
    const key = Date.now();
    notification.notice({
      content: <div>
      <p>click below button to close</p>
      <button onClick={close.bind(null, key)}>close</button>
    </div>,
      key,
      duration: null,
    });
  }

  toast_show() {
      // toast.show({
      //     content: 'toast'
      // });
      ++i;
      console.log(i);
      Toast.show({
        content: i
      });
  }

  toast_hide(){
    // toast.hide();
  }

  render() {
    return (
      <div>
        <Header titleContent='Notification组件'/>
        <div className='show-content show-notification'>
            <Group header='Notification demo'>
                <div className='btn' onClick={this.rc_simpleFn} >simple show</div><br/>
                <div className='btn' onClick={this.rc_durationFn} >duration=0</div><br/>
                <div className='btn' onClick={this.rc_closableFn} >closable</div><br/>
                <div className='btn' onClick={this.rc_manualClose} >controlled close</div>
            </Group>

            <Group header='toast demo'>
                <div className='btn' onClick={this.toast_show} >show</div>
            </Group>
        </div>
    </div>
      );
  }
}