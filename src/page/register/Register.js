import React, { Component } from 'react';
import { List, InputItem, WhiteSpace, Checkbox, Button } from 'antd-mobile';

const AgreeItem = Checkbox.AgreeItem;

export default class Register extends Component {
    send = () => {
        console.log(1);
    }
    render() {
        return (
            <div style={{ padding: '40px 20px' }}>
                <List>
                    <InputItem
                        placeholder="请输入手机"
                        type='text'
                    >
                    </InputItem>
                </List>
                <WhiteSpace size="xl" />

                <List>
                    <InputItem
                        placeholder="请输入密码"
                        type='password'
                    >
                    </InputItem>
                </List>
                <WhiteSpace size="xl" />

                <List>
                    <InputItem
                        placeholder="请确认密码"
                        type='password'
                    >
                    </InputItem>
                </List>
                <WhiteSpace size="xl" />

                <List>
                    <InputItem
                        placeholder="请输入验证码"
                        type='text'
                        extra="获取验证码"
                    >
                    </InputItem>
                </List>

                <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)} style={{ margin: '20px 0 30px' }}>
                    <p style={{ margin: '0' }}>
                        我已同意
                        <a href='#/' style={{ color: '#1296db', fontSize: '14px' }}>《用户服务协议》</a>
                        及
                        <a href='#/' style={{ color: '#1296db', fontSize: '14px' }}>《隐私权政策》</a>
                    </p>
                </AgreeItem>

                <Button type="primary">注册</Button>

                <p>
                    <a href='#/login' style={{ color: '#1296db', fontSize: '14px' }}>已有帐号</a>
                </p>
            </div>
        )
    }
    componentDidMount() {
        document.getElementsByClassName('am-input-extra')[0].addEventListener('click', this.send);
    }
}
