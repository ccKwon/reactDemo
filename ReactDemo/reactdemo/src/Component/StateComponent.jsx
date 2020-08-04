import React from 'react';

export default class State extends React.Component {

    /* 
        组件的状态：state
        以前我们操作界面的元素的变化，都是修改DOM，操作DOM
        但是有了React优秀的框架，我们不在推荐操作DOM，页面元素的改变使用State进行处理
    */


    constructor(props) {
        super(props);
        this.state = {
            count : 10
        }
    }

    increment() {
        this.setState({
            count:this.state.count += 1
        })
    }

    decrement() {
        this.setState({
            count:this.state.count -= 1
        })
    }

    clickHandle = () => {
        console.log(this);
    }


    render() {
        return (
            <div>
                <h3>组件的state</h3>
                <p>{ this.state.count }</p>
                <button onClick = {this.increment.bind(this)}>增加</button>
                <button onClick = {this.decrement.bind(this)}>减少</button>
                <button onClick = {this.clickHandle}>关于this</button>
            </div>
        )


    }
}