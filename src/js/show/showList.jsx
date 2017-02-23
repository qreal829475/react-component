import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Header from '../../common/componment/Header/Header'
import Group from '../../common/componment/Group/group'
import List from '../../common/componment/List/List'

import './assets/index.less'

import img1 from './img/1.jpg'
import img2 from './img/2.jpg'

const albums = [
  {
    title: '女爵',
    subTitle: '发行公司：环球唱片',
    after: '2006-12',
    href: 'http://music.163.com/#/album?id=31308',
    linked: false,
    desc: `
      她坦白了我们所虚伪的 她单纯了我们所复杂的
      五年以来…
      5年的等待，是个漫长也是耗损的过程。
      看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
      她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
      这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
      是我们唯一相信且期待杨乃文的理由。
    `
  },
  {
    title: '标题',
    subTitle: '副标题',
    after: 'AFTER',
    href: '/#',
    desc: `
      好多描述~好多描述~好多描述~好多描述~
      好多描述~好多描述~好多描述~好多描述~
      好多描述~
    `
  }
]

const img = <img className="little-img" src={img1} />;
const img80 = <img className="big-img" src={img2} />;
const img48 = <img className="middle-img" src={img2} />;

@withRouter
export default class DemoList extends Component {

  render() {
    return (
      <div>
        <Header titleContent='List组件'/>
        <div className='show-content'>
            <Group header='静态列表' noPadding={true}>
              <List>
                <List.Item role='header'>List1</List.Item>
                <List.Item title='List1 item1' />
                <List.Item title='List1 item2' />
                <List.Item title='List1 item3' />
              </List>
              <List>
                <List.Item role='header'>List2</List.Item>
                <List.Item title='List2 item1' after='After' />
                <List.Item title='List2 item2' after='2017-02' />
                <List.Item title='List2 item3' />
              </List>
            </Group>
            <Group header='带连接的列表' noPadding={true}>
              <List>
                <List.Item title='toLogin' href='#/login' />
                <List.Item title='toLogin' after='GO' href='#/login' />
              </List>
            </Group>
            <Group header='带副标题的列表' noPadding={true}>
              <List>
                <List.Item title='女爵' subTitle='副标题' />
                <List.Item title='toLogin' subTitle='跳转到登陆界面' after='GO' href='#/login' />
              </List>
            </Group>
            <Group header='带描述文字的列表' noPadding={true}>
              <List>
                {
                  albums.map((album, i) => {
                    return(
                      <List.Item {...album} key={i}/>
                      );
                  })
                }
              </List>
            </Group>
            <Group header='包含图标的列表' noPadding={true}>
              <List>
                <List.Item media={img} title='ok~' after='2017-02-13' />
                <List.Item media={img} title='ok!' after='2017-02-14' />
                <List.Item media={img} title='ok@' after='2017-02-15' />
              </List>
            </Group>
            <Group header='图文列表' noPadding={true}>
              <List>
                <List.Item media={img48} title='ok~' after='2017-02-13' subTitle='好多描述' />
                <List.Item media={img48} title='ok!' after='2017-02-14' subTitle='好多描述' href='/demo_img'/>
                <List.Item media={img48} title='ok@' after='2017-02-15' subTitle='好多描述' />
              </List>
            </Group>
            <Group header='图文详情列表' noPadding={true}>
              <List>
                {
                  albums.map((album, i) => {
                    return(
                      <List.Item {...album} media={img80} key={i}/>
                      );
                  })
                }
              </List>
            </Group>
        </div>
      </div>
      );
  }
}