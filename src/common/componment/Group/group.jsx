import React, { Component, PropTypes } from 'react'
import classx from 'classnames';

import './index.less'

class Group extends Component {
  constructor(props) {
    super(props);
  }

  static PropTypes={
    noPadding: PropTypes.bool,
    header: PropTypes.node
  }

  static defaultProps={
    noPadding: false
  }

  _initAddon(role) {
    role = role || 'header';
    return this.props[role] ?
      React.createElement(role, {
        className: classx('group-' + role)
      }, this.props[role]) : null;
  }

  render() {
    let {children, header, footer, noPadding, className} = this.props;
    let noPaddingClass = '';
    if(noPadding){
        className = classx(className, 'group-nopadding');
    }

    return (
      <div className={classx('group', className)}>
      
      {this._initAddon('header')}

      <div className='group-body'>
        {this.props.children}
      </div>

      {this._initAddon('footer')}
      
      </div>
    )
  }
}

export default Group;