# React 事件
特点：

1、react事件，绑定事件的命名，驼峰命名法。

2、传入一个 函数 ， 而不是字符串

	React写法
	<button onClick={this.sendData}>传递helloworld给父元素</button>

	原生写法
	<button onclick='sendData'>传递helloworld给父元素</button>

事件对象：React返回的事件对象是代理的原生的事件对象，如果想要查看事件对象的具体值，必须之间输出事件对象的属性。

注意：
原生，阻止默认行为，可以直接返回 return false
在React中，阻止默认必须e.preventDefault

React事件传参
	//使用ES6箭头函数传递多个参数
	<button onClick={(e) => {this.parentEvent1('msg:helloworld', e)}}>
	
	//不使用ES6箭头函数传递多个参数
	<button onClick=(function(e){this.parentEvent('不使用es6, msg:helloworld', e)}.bind(this))>


# React 条件渲染
React 中条件渲染即和JavaScript 中，条件运算，如 if..else...三元运算符等。

1.直接通过条件运算返回要渲染的 JSX 对象

2.通过条件运算得出 jsx 对象，再将 JSX 对象渲染到模板中。
	案例1
	
	import React, { Component } from 'react';
	import ReactDOM from 'react-dom';
	
	function UserGreet(props) {
	  return (<h1>欢迎登录</h1>)
	}
	
	
	function UserLogin(props) {
	  return (<h1>请先登录</h1>)
	}
	
	
	class ParentCom extends React.Component {
	  constructor(props) {
	    super(props)
	    this.state = {
	      isLogin: false
	    }
	  }
	
	  render() {
	    if (this.state.isLogin) {
	      return (<UserGreet></UserGreet>)
	    } else {
	      return (<UserLogin></UserLogin>)
	    }
	  }
	}
	
	
	ReactDOM.render(<ParentCom />, document.querySelector("#root"))



	案例2
	
	import React, { Component } from 'react';
	import ReactDOM from 'react-dom';
	
	function UserGreet(props) {
	  return (<h1>欢迎登录</h1>)
	}
	
	
	function UserLogin(props) {
	  return (<h1>请先登录</h1>)
	}
	
	
	class ParentCom extends React.Component {
	  constructor(props) {
	    super(props)
	    this.state = {
	      isLogin: true
	    }
	  }
	
	  render() {
	    let element = null;
	    if (this.state.isLogin) {
	      element = (<UserGreet></UserGreet>)
	    } else {
	      element = (<UserLogin></UserLogin>)
	    }
	
	    return (
	      <div>
	        <h1>这是头部</h1>
	          {element}
	        <h1>这是三元运算符的操作</h1>
	        {this.state.isLogin ? <UserGreet></UserGreet> : <UserLogin></UserLogin>}
	        <h1>这是尾部</h1>
	      </div>
	    )
	  }
	
	
	}
	
	
	ReactDOM.render(<ParentCom />, document.querySelector("#root"))