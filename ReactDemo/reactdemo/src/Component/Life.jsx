import React from 'react'
import { Component } from 'react'


export default class Life extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            count : 10
        }
    }


    // 在组件渲染之前执行
    componentWillMount() {
        console.log('componentWillMount');
        console.log('在组件渲染之前执行');
    }

    // 在组件渲染之后执行
    componentDidMount() {
        console.log('componentDidMount');
        console.log('在组件渲染之后执行');
    }

    // 返回 true 和 false true代表允许改变，false代表不允许改变
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        console.log('返回 true 和 false true代表允许改变，false代表不允许改变');
        return true;
    }

    // 数据在改变之前执行（state, props）
    componentWillUpdate() {
        console.log('componentWillUpdate');
        console.log('数据在改变之前执行（state, props）');
    }

    // 数据修改完成（state, props）
    componentDidUpdate() {
        console.log('componentDidUpdate');
        console.log('数据修改完成（state, props）');
    }

    // props发生改变执行
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
        console.log('props发生改变执行');
    }

    // 组件卸载前执行
    componentWillUnmount() {
        console.log('componentWillUnmount');
        console.log('组件卸载前执行');
    }

    changeHandle = () => {
        this.setState({
            count: this.state.count += 1
        })
    }

    render() {
        const { count } = this.state
        return (
            <div>
                生命周期函数：{ count } - {this.props.title}
                <button onClick = { this.changeHandle }>增加</button>
            </div>
        )
    }
}
