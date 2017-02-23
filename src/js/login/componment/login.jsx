import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import "../assets/index.less"

var phoneErrorTip = {
  '0': '',
  '1': '手机号码不能为空哦~',
  '2': '手机号码不正确哦~',
  'none': ''
};

var pwdErrorTip = {
  '0': '',
  '1': '密码不能为空哦~',
  'none': ''
};

var loginResultTip = {
  '0': '登录成功',
  '101': '登录失败',
  '9999': '网络开小差，请稍后再试哦~',
  'none': ''
}

@connect(
  state => {
    return {
    loginResult: state.login.loginResult,
    ableLogin: state.login.ableLogin
    }
  }
)
@withRouter
export default class Login extends Component {

    constructor(props) {
      super(props);
      this.state = {
        show: false,
        phone: 'none',
        pwd: 'none',
        phoneValue: '',
        pwdValue: ''
      }
    }

    render() {
      var isShow = this.state.show ? 'show' : 'hide';
    //   console.log(pwdErrorTip[this.state.pwd] || loginResultTip[this.props.loginResult] 
    //   + '---11111111111-----------' 
    //   + pwdErrorTip[this.state.pwd] 
    //   + '------------222222222--------------' 
    // + loginResultTip[this.props.loginResult]);
      return (
        <div id='login'>
            <input type="text" className='input' onChange={this.proofRole.bind(this, 'phone')} placeholder='请输入手机号码' />
            <div className='error-tip'>{`${phoneErrorTip[this.state.phone]}`}</div>
            <input type="text" className='input' onChange={this.proofRole.bind(this, 'pwd')} placeholder='请输入密码' />
            <div className='error-tip'>{`${pwdErrorTip[this.state.pwd] || loginResultTip[this.props.loginResult]}`}</div>
            <div className='login-btn' onClick={this.login}>登录</div>
            <div className='login-btn-area'>
                <div className='login-txt' onClick={this.password}>忘记密码</div>
                <div className='login-line'>|</div>
                <div className='login-txt' onClick={this.register}>注册</div>
            </div>
        </div>
      )
    };

    proofRole = (type, event) => {
      switch (type) {
        case 'phone':
          this.judgePhone(event.currentTarget.value);
          break;
        case 'pwd':
          this.judgePwd(event.currentTarget.value);
          break;
      }
    };

    judgePhone = (value) => {
      // console.log(this.refs.myPhone);  
      let userPhone;
      if (value) {
        userPhone = value;
      } else {
        userPhone = this.state.phoneValue;
      }

      if (userPhone.length > 0) {
        var judge = /^[1][0-9]{10}$/;
        if (judge.test(userPhone)) {
          this.setState({
            phone: 0,
            phoneValue: userPhone
          });
        } else {
          this.setState({
            phone: 2,
            phoneValue: userPhone
          });
        }
      } else {
        this.setState({
          phone: 1,
          phoneValue: userPhone
        });
      }
    };

    judgePwd = (value) => {
      let userPwd;
      if (value) {
        userPwd = value;
      } else {
        userPwd = this.state.pwdValue
      }

      if (userPwd.length > 0) {
        this.setState({
          pwd: 0,
          pwdValue: userPwd
        });
      } else {
        this.setState({
          pwd: 1,
          pwdValue: userPwd
        });
      }
    }

    login = () => {

      if (this.props.ableLogin == true) {
        if (this.state.phone == 0 && this.state.pwd == 0) {
          this.props.dispatch({
            type: "login/login",
            payload: {
              phone: this.state.phoneValue,
              pwd: this.state.pwdValue
            }
          })
        } else {
          this.judgePhone();
          this.judgePwd();
        }
      }


    }

    register = () => {
      this.props.router.push("/register")
    }

    password = () => {
      this.props.router.push("/password");
    }
  }

