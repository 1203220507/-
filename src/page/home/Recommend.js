import React, { Component } from 'react';
import { SearchBar, Flex } from 'antd-mobile';
import '../../assest/1.css';

export default class Recommend extends Component {
    render() {
        return (
            <div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#1296db',
                    color: '#fff',
                    padding: '0 0 0 10px'
                }}>
                    <span>房产全百科</span>
                    <SearchBar placeholder="请输入关键词" style={{ flex: 1, backgroundColor: '#1296db', color: '#fff' }} />
                </div>
                <Flex>
                    <Flex.Item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '10px 0' }}>
                        <img src={require('../../assest/dkw_daikuan-.png')} alt='我要贷款' width='30px'></img>
                        <p style={{ margin: '5px 0 0 0', textAlign: 'center', fontSize: '12px', color: '#aaa' }}>我要贷款</p>
                    </Flex.Item>
                    <Flex.Item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '10px 0' }}>
                        <img src={require('../../assest/jisuanqi.png')} alt='我要贷款' width='30px'></img>
                        <p style={{ margin: '5px 0 0 0', textAlign: 'center', fontSize: '12px', color: '#aaa' }}>我要贷款</p>
                    </Flex.Item>
                    <Flex.Item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '10px 0' }}>
                        <img src={require('../../assest/zhishi.png')} alt='我要贷款' width='30px'></img>
                        <p style={{ margin: '5px 0 0 0', textAlign: 'center', fontSize: '12px', color: '#aaa' }}>我要贷款</p>
                    </Flex.Item>
                    <Flex.Item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '10px 0' }}>
                        <img src={require('../../assest/richscan_icon.png')} alt='我要贷款' width='30px'></img>
                        <p style={{ margin: '5px 0 0 0', textAlign: 'center', fontSize: '12px', color: '#aaa' }}>我要贷款</p>
                    </Flex.Item>
                </Flex>
            </div>
        )
    }
}
