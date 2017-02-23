import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import "./Header.less"

@connect(
    state => {
        return {

        }
    }
)


@withRouter
export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render() {
        var isShow = this.state.show? 'show': 'hide';
        return(
            <div id='header'>
                <div className='header-content'>
                    <div className='back' onClick={this.back}>back</div>
                    <div>{this.props.titleContent}</div>
                    <div className='more' onClick={this.more}>more</div>
                    <div className={`moreList ${isShow}`} onClick={this.more}>
                            <ul className='moreListContent'>
                                <li className='border-bottom'>1</li>
                                <li>2</li>
                            </ul>
                    </div>
                </div>                
            </div>
        )
    };

    back = () => {
        this.props.router.go(-1);
    };

    more = () =>{
        this.setState({show: !this.state.show});
    };
}
