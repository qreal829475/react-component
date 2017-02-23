import React, { Component, PropTypes } from 'react'
import classx from 'classnames'
import ReactDOM from 'react-dom'

import "./style.less"

var seed = 0;
var now = Date.now();

let timer;

function getUuid() {
  return 'toast_' + now + '_' + seed++;
}

class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now_state: false,
      now_notice: {},
      end_animation: false
    };
  }

  defaultProps={
  }

  show = (notice) => {
    if (this.state.now_state == false) {
      this.setState({
        now_state: true,
        now_notice: notice,
        end_animation: false
      });
    }
  }

  close(fn) {
    if (this.state.now_state == true) {
      var _this = this;
      _this.setState({
        end_animation: true
      });
      setTimeout(function() {
        _this.setState({
          now_state: false,
          end_animation: false
        });
        if (fn) {
          fn();
        }
      }, 150);

    }
  }

  _initToastEl(now_notice) {
    let className = now_notice.className || '';
    let {now_state, end_animation} = this.state;
    className = classx(className, 'toast-content', {
      'show': now_state ? (end_animation ? false : true) : false,
      'hide': end_animation
    });

    return (
      <div className={className} >
          {now_notice.content}
      </div>
    )
  }

  render() {
    let {now_state, end_animation} = this.state;
    let itemChild;

    now_state ? itemChild = this._initToastEl(this.state.now_notice) : null ;


    return (
      <div className='toast'>
          {itemChild}
      </div>
      );
  }
}

Toast.newInstance = function newToastInstance(properties) {
  let props = properties || {};
  let el = document.createElement('div');
  document.body.appendChild(el);
  let toast = ReactDOM.render(React.createElement(Toast), el);
  return {
    show: function(noticeProps) {
      let {autoClose=true} = noticeProps
      toast.show(noticeProps);
      if (autoClose) {
        timer = setTimeout(function() {
          toast.close(noticeProps.closeCallBack);
        }, 3000);
      }
    },
    hide: function(fn) {
      toast.close(fn);
    },
    destory: function() {
      document.body.removeChild(el);
      clearTimeout(timer);
    }
  }
}

export default Toast;