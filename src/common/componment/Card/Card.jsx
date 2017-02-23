import React, { Component, PropTypes } from 'react'
import cx from 'classnames';

import './index.less'

class Card extends Component {
  constructor(props) {
    super(props);
  }

  static PropTypes={
  }

  renderItem(element, role) {
    if (!element) {
      return null;
    }

    return (element.type && element.type === CardChild) ?
      element : <CardChild role={role}>{element}</CardChild>;
  }

  _initTitle(title) {
    return (
      <div className='title'>
        {title}
      </div>
      );
  }

  render() {
    let {title, children, header, footer, className=''} = this.props;
    return (
      <div className={cx('card',className)}>
      
      {title ? this.renderItem(this._initTitle(title)) : this.renderItem(header)}

      <div className='card-body'>
        {this.props.children}
      </div>

      {this.renderItem(footer, 'footer')}
      
      </div>
    )
  }
}

class CardChild extends Component {
  constructor(props) {
    super(props);
  }

  static PropTypes = {
    role: PropTypes.oneOf(['header', 'footer']),
    cover: PropTypes.string,
    className: PropTypes.string
  }

  static defaultProps={
    role: 'header'
  }

  render() {
    let {role, className='', cover} = this.props;

    let style = null,
        coverClass = '';

    if (cover) {
      style = {
        backgroundImage: 'url(' + cover + ')',
      }
      coverClass = 'card-cover';
    }

    return (
      <div className={cx('card-'+role, coverClass, className)} role={`card-${role}`} style={style}>
        {this.props.children}
      </div>
      );
  }
}

Card.Child = CardChild;

export default Card;