import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';

import Index from './Index'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 0,
            TabBarList: [
                {
                    title: '首页',
                    icon: 'shouye.png',
                    selectedIcon: 'shouye-s.png'
                },
                {
                    title: '微聊',
                    icon: 'weixin.png',
                    selectedIcon: 'weixin-s.png'
                },
                {
                    title: '推荐',
                    icon: 'tuijian.png',
                    selectedIcon: 'tuijian-s.png'
                },
                {
                    title: '我的',
                    icon: 'wode.png',
                    selectedIcon: 'wode-s.png'
                }
            ]
        };
    }

    renderContent(index) {
        switch (index) {
            case 0:
                return <Index></Index>
            default:
                return
        }
    }
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    {
                        this.state.TabBarList.map((item, index) => {
                            return (
                                <TabBar.Item
                                    title={item.title}
                                    key={item.title}
                                    icon={<div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: `url(${require('../../assest/' + item.selectedIcon)}) center center /  21px 21px no-repeat`
                                    }}
                                    />
                                    }
                                    selectedIcon={<div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: `url(${require('../../assest/' + item.icon)}) center center /  21px 21px no-repeat`
                                    }}
                                    />
                                    }
                                    selected={this.state.selectedTab === index}
                                    onPress={() => {
                                        this.setState({
                                            selectedTab: index,
                                        });
                                    }}
                                >
                                    {this.renderContent(index)}
                                </TabBar.Item>
                            )
                        })
                    }
                </TabBar>
            </div>
        );
    }
}
