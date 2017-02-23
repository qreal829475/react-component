import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import "./footer.less"

@connect(
    state => {
        return {

        }
    }
)


export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        var isShow = this.state.show? 'show': 'hide';
        return(
            <div id='footer'>
                <div className='footer-content'>
                </div>                
            </div>
        )
    };
}
