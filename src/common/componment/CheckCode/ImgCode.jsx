import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import mobiscroll from "mobiscroll"

import './index.less'

class IMGCODE extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <label className={`code-area ${this.props.imgCodeClass}`}>
            IMG Code
            <input data-icon="pencil" placeholder='input IMG Code' onChange={this.props.codeCallBack} />
            <div>
                <button className={`right-btn ${this.props.imgCodeBtnClass}`} type='button' onClick={this.props.getImgCodeFunc} >获取图片验证码</button>
                <div className={`img-code-content ${this.props.imgCodeContentClass}`} onClick={this.props.refleshImgCodeFunc}>
                    <img className='img-code' src={`${this.props.imgCodeSrc}`}></img>
                    <button type='button' data-icon="loop2" ></button>
                </div>
            </div>
        </label>
    )
  }
}

export default IMGCODE;