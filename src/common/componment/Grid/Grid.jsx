import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import classx from 'classnames'

import "./index.less"

const flexAllProp = {
  'direction': {
    'row': 'row',
    'row-reverse': 'row-reverse',
    'vAlign': 'column',
    'warp': 'column-reverse'
  },
  'hAlign': {
    'left': 'justify-start',
    'right': 'justify-end',
    'center': 'justify-center',
    'space-betwen': 'justify-space-between',
    'space-around': 'justify-space-around'
  },
  'vAlign': {
    'top': 'align-items-start',
    'end': 'align-items-end',
    'center': 'align-items-center',
    'baseline': 'align-items-baseline',
    'stretch': 'align-items-stretch'
  },
  'wrap': {
    'wrap': 'wrap',
    'nowrap': 'nowrap',
    'wrap-reverse': 'wrap-reverse'
  },
  'vsAlign': {
    'start': 'align-content-start',
    'end': 'align-content-end',
    'center': 'align-content-center',
    'space-between': 'align-content-space-between',
    'space-around': 'align-content-space-around',
    'stretch': 'align-content-stretch'
  }
}



const ItemflexAllProp = {
  'align': {
    'auto': 'align-self-auto',
    'start': 'align-self-start',
    'end': 'align-self-end',
    'center': 'align-self-center',
    'baseline': 'align-self-space-baseline',
    'stretch': 'aalign-self-stretch'
  }
}

export default class Grid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      classNames: ''
    }
  }

  static propTypes={
    col: PropTypes.number,
    hAlign: PropTypes.string,
    vAlign: PropTypes.string,
    vsAlign: PropTypes.string,
    wrap: PropTypes.string,
    bordered: PropTypes.bool,
    collapse: PropTypes.bool,
    direction: PropTypes.string,
    class: PropTypes.string
  }

  static defaultProps = {
    col: 6,
    direction: 'row',
    hAlign: 'left',
    vAlign: 'top',
    collapse: true,
    wrap: 'wrap',
    bordered: false,
    vsAlign: 'start'
  }

  getClassName = () => {
    let classNames = this.state.classNames;
    // 栅格的列的总数量
    if (this.props.col && this.props.col != 0) {
      classNames = classNames + 'avg-' + this.props.col + ' ';
    }

    // 主轴的方向   --> 4种
    classNames = classNames + flexAllProp['hAlign'][this.props.hAlign] + ' ';

    // 交叉轴对其方式  --> 5种
    classNames = classNames + flexAllProp['vAlign'][this.props.vAlign] + ' ';

    // 多轴线的对其方式
    classNames = classNames + flexAllProp['vsAlign'][this.props.vsAlign] + ' ';

    // 是否移除列默认的内边距  默认为false（有内边距）
    if (!this.props.collapse) {
      classNames += 'noneCollapse ';
    }

    //换行 + 换行的方式
    classNames += flexAllProp['wrap'][this.props.wrap] + ' ';

    this.setState({
      classNames: classNames
    });
  }

  componentWillMount() {
    this.getClassName();
  }

  render() {
    let {className} = this.props;
    return (
      <div className={classx('container-flex', this.state.classNames, className)}>
                {this.props.children}
            </div>
    )
  }
  ;
}

class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      classNames: ''
    }

  }

  static propTypes={
    col: PropTypes.number,
    align: PropTypes.string,
    offset: PropTypes.number,
    class: PropTypes.string,
    npPadded: PropTypes.bool
  }

  static defaultProps = {
    align: 'auto',
    npPadded: false
  }

  getClassNames = () => {
    let classNames = this.state.classNames;
    //占栅格的几份
    if (this.props.col) {
      classNames = classx(classNames, 'col-'+this.props.col);
    }

    //偏移量
    if (this.props.offset) {
      classNames = classx(classNames, 'col-offset-'+this.props.offset);
    }

    //单个项目的对其方式
    classNames = classx(classNames, ItemflexAllProp['align'][this.props.align]);

    //是否去掉Padding 
    classNames = classx(classNames, {
        'no-padding': this.props.npPadded ? true : false ,
    })

    this.state = {
      classNames: classNames
    }
  }

  componentWillMount() {
    this.getClassNames();
  }

  render() {
    let {className} = this.props;

    return (
      <div className={ classx('col', this.state.classNames, className)}>
          {this.props.children}
      </div>
    )
  };
}

Grid.Item = Item;
