import React, { Component } from 'react'

export default class Index extends Component {
    render() {
        return (
            <div>
                <header style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#1296db',
                    color: '#fff'
                }}>
                    <span style={{
                        padding: '10px'
                    }}>成都市</span>
                    <div style={{
                        backgroundColor: '#fff',
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 10px',
                        borderRadius: '100px'
                    }}>
                        <img src={require('../../assest/搜索.png')} alt='搜索' width='20px' height='20px'></img>
                        <div style={{
                            color:'#ccc',
                            textIndent:'25px'
                        }}>
                            挑好房，上源码房产APP
                        </div>
                    </div>
                    <img src={require('../../assest/地图.png')} alt='地图' width='20px' height='20px' style={{
                        margin: '0 10px'
                    }}></img>
                </header>
            </div>
        )
    }
}
