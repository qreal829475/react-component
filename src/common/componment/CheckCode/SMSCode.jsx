import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import mobiscroll from "mobiscroll"

import './index.less'

class IMGCODE extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <label className='code-area'>
                SMS Code
                <input data-icon="pencil" placeholder='input SMS Code' />
                <button className={`right-btn`} type='button' >获取验证验证码</button>
            </label>
        )
    }
}

export default IMGCODE;