import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import mobiscroll from "mobiscroll"
import List from '../../common/componment/List/List'

import "./assets/test.less"

@connect(
  state => {
    return {
    crud: state.crud || {}
    }
  }
)
@withRouter
export default class Index extends Component {

      static propTypes = {}

      render() {
        return (
          <div>
            <List>
              <List.Item role='header'>componment list</List.Item>
              <List.Item title='Login' href='/login' />
              <List.Item title="Grid"  href='/grid'/>
              <List.Item title="Icon"  href='/demo_icon' />
              <List.Item title="Img"  href='/demo_img' />
              <List.Item title="Card"  href='/demo_card' />
              <List.Item title="List"  href='/demo_list' />
              <List.Item title="Toast" href='/demo_notification' />
            </List>
          </div>
          );
      }

      add = () => {
        let nextState = this.props.crud.isFetching ? false : true;
        console.log(nextState)
        this.props.dispatch({
          type: "crud/list",
          payload: {
            isFetching: nextState,
          }
        })
      }

      nav = () => {
        this.props.router.push("/next");
      }
    }
