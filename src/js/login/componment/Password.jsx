import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import mobiscroll from "mobiscroll"
import { ToastContainer } from "react-toastr"

import ImgCode from '../../../common/componment/CheckCode/ImgCode'
import SMSCode from '../../../common/componment/CheckCode/SMSCode'

var ReactToastr = require("react-toastr");

import "../assets/index.less"
// import "../assets/self-mobiscroll.less"

var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

const basePath = 'https://ssl.mall.changan.com.cn';
const tips = {
  'phone': {
    '1': '手机号码错误哦~',
    '2': '手机号码不能为空'
  },
  'smsBotton': {
    'none': '获取图片验证码',
    'again': '再次获取图片验证码',
    'secend': '秒后可获取'
  }
}

@connect(
  state => {
    return {
    pwdIsAbleSendSMSCode: true,
    pwdPhone: '',
    checkPhoneResult: false
    }
  }
)
@withRouter
export default class Password extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isShowImgBtn: true,
        isShowImgCode: false,
        phone: 2,
        phoneValue: '',
        pwdValue: '',
        imgCodeSrc:''
      }
    }

    // <label className={`code-area ${imgCodeArea}`}>
    //                 IMG Code
    //                 <input data-icon="pencil" placeholder='input IMG Code' onChange={this.chenkRule.bind(this, 'imgCode')} />
    //                 <div>
    //                     <button className={`right-btn ${imgCodeBtn}`} type='button' onClick={this.getImgCode} >获取图片验证码</button>
    //                     <div className={`img-code-content ${imgCodeContent}`} onClick={this.refleshImgCode}>
    //                         <img className='img-code' src={`${basePath}/main/auth/picCode?phone=${this.state.phoneValue}&theImg=${this.state.imgCodeRan}`}></img>
    //                         <button type='button' data-icon="loop2" ></button>
    //                     </div>
    //                 </div>
    //             </label>

                // <label className='code-area'>
                //     SMS Code
                //     <input data-icon="pencil" placeholder='input SMS Code' />
                //     <button className={`right-btn`} type='button' >获取验证验证码</button>
                // </label>

    render() {
      var imgCodeArea = this.state.phone == 0 ? 'img-code-area img-code-area-show mbsc-ic-left mbsc-input mbsc-control-w' : 'img-code-area img-code-area-hide mbsc-ic-left mbsc-input mbsc-control-w';
      var imgCodeContent = this.state.isShowImgCode ? 'show-inline' : 'hide';
      var imgCodeBtn = this.state.isShowImgBtn ? 'show-inline' : 'hide';
      var getImgCodeBtn = this.props.pwdIisAbleGetImgCode ? 'disabled' : '';
      return (
        <div id='password'>
            <mobiscroll.Form>
                <label>
                    Username
                    <input data-icon="user4" placeholder='input your username' onChange={this.chenkRule.bind(this, 'phone')} />
                </label>
                <ImgCode  imgCodeClass={`${imgCodeArea}`} 
                          codeCallBack={this.chenkRule.bind(this, 'imgCode')} 
                          getImgCodeFunc={this.getImgCode} 
                          refleshImgCodeFunc={this.refleshImgCode} 
                          imgCodeSrc={this.state.imgCodeSrc}
                          imgCodeBtnClass={`${imgCodeBtn}`}
                          imgCodeContentClass={`${imgCodeContent}`}
                />
                <SMSCode/>                
                <label className='pwd-input'>
                    Password
                    <input type='text' data-icon='lock2' data-password-toggle="false" data-icon-show="pencil" data-icon-hide="library" placeholder='input your password'/>
                </label>
                <label className='pwd-input'>
                    Again Password
                    <input type='text' data-icon='lock2' data-password-toggle="false" data-icon-show="pencil" data-icon-hide="library" placeholder='input your password'/>
                </label>
            </mobiscroll.Form >
            <div>
                <ToastContainer ref="container" toastMessageFactory={ToastMessageFactory} className="toast-bottom-center" />
                <button onClick={this.addAlert}>GGininder</button>
            </div>
        </div>
        );
    }

    addAlert = () => {
      this.refs.container.success(
        "Welcome!",
        "You are now home my friend.", {
          timeOut: 3000,
          extendedTimeOut: 10000
        });
    }

    getImgCode = () => {
      this.setState({
        isShowImgBtn: !this.state.isShowImgBtn,
        isShowImgCode: !this.state.isShowImgCode
      });
    }

    chenkRule = (type, event) => {
      switch (type) {
        case 'phone':
          this.judgePhone(event.currentTarget.value);
          break;
        case 'imgCode':
          this.chenkImgCode(event.currentTarget.value);
          break;
      }
    }

    judgePhone = (value) => {
      let userPhone;
      if (value) {
        userPhone = value;
      } else {
        userPhone = this.state.phoneValue;
      }

      if (userPhone.length > 0) {
        var judge = /^[1][0-9]{10}$/;
        if (judge.test(userPhone)) {
          console.log('ok-----' + userPhone);
          this.setState({
            phone: 0,
            phoneValue: userPhone
          });
          this.props.dispatch({
            type: "login/checkPhone",
            payload: {
              phone: userPhone
            }
          });
        } else {
          this.setState({
            phone: 1,
            phoneValue: userPhone
          });
        }
      } else {
        this.setState({
          phone: 2,
          phoneValue: userPhone
        });
      }
    }

    chenkImgCode=(value) => {
      let userImgCode;
      if(value){
        userImgCode = value;
      }else{
        userImgCode
      }

    }

    refleshImgCode = () => {
      if (this.state.phone == 0) {
        this.setState({
          imgCodeSrc: `${basePath}/main/auth/picCode?phone=${this.state.phoneValue}&theImg=${Math.random()}`
        });
      }

    }

  }