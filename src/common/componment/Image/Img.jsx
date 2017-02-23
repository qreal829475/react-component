import React, { Component, PropTypes } from 'react'
import classx from 'classnames'

import './index.less'

class Img extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgBorder: '',
      componentBorder: ''
    };
  }

  static PropTypes={
    type: PropTypes.string
  }

  componentWillMount() {
    let imgBorder = '';
    this.props.type? imgBorder = 'img-' + this.props.type : imgBorder = 'img-rounded';

    this.setState({
      imgBorder: imgBorder
    });
  }

  render() {
    let {className} = this.props;
    return (
      <img className={ classx(className, this.state.imgBorder)} src={`${this.props.src}`}></img>
    )
  }
}

export default Img;
