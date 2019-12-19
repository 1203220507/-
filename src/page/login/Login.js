import React, { Component } from 'react'
import { Toast, List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import { userLogin } from '../../apis/apis'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            tel: '',
            pwd: ''
        }
    }

    changeTel = (e) => {
        this.setState({
            tel: e.target.value
        })
    }
    changePwd = (e) => {
        this.setState({
            pwd: e.target.value
        })
    }

    submit = () => {
        var telReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
        const { tel, pwd } = this.state;
        if (telReg.test(tel) && pwd) {
            userLogin({
                phoneNum: tel,
                password: pwd
            }).then(res => {
                Toast.success('登录成功！', 1);
                sessionStorage.setItem('token', res.token);
                sessionStorage.setItem('phoneNum', res.data.phoneNum);
                this.props.history.replace('/')
            })
        } else {
            Toast.fail('请正确填写手机号或密码', 1);
        }
    }
    render() {
        return (
            <div style={{ padding: '0 20px' }}>
                <img src={require('../../assest/logo.png')} width='100' alt='logo' style={{ display: 'block', margin: '40px auto' }}></img>

                <List>
                    <InputItem
                        placeholder="请输入手机号"
                        value={this.state.tel}
                        onInput={this.changeTel}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assest/phone.png')})`, backgroundSize: 'cover', height: '40px', width: '40px' }} />
                    </InputItem>
                </List>
                <WhiteSpace size="xl" />

                <List>
                    <InputItem
                        placeholder="请输入密码"
                        value={this.state.pwd}
                        onInput={this.changePwd}
                        type='password'
                    >
                        <div style={{ backgroundImage: `url(${require('../../assest/pwd.png')})`, backgroundSize: 'cover', height: '40px', width: '40px' }} />
                    </InputItem>
                </List>
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <Button type="primary" onClick={this.submit}>登录</Button>
                <WhiteSpace size="xl" />
                <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <a href='#/register' style={{ color: '#1296db' }}>注册</a>
                    <a href='#/forget' style={{ color: '#1296db' }}>忘记密码</a>
                </p>
                <a href='#/protocol'
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        textAlign: 'center',
                        marginBottom: '20px',
                        color: '#ccc'
                    }}
                >登录/注册即代表同意《源码房产用户协议》</a>
            </div>
        )
    }
}
