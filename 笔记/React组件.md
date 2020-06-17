# React组件
	函数式组件与类组件的区别和使用，函数式比较简单，一般用于静态没有交互事件内容的组件页面
	类组件，一般又称为动态组件。
	
	1、函数式组件

	// 函数式组件
	function Childcom() {
	  let title = <h2>我是副标题</h2>
	  let weather = "下雨"
	  let isGo = weather == '下雨' ? "不出门" : "出门"
	  return (
	    <div>
	      <h1>函数式组件helloworld  {title}</h1>
	
	      <div>
	        <span>是否出门 {isGo} </span>
	      </div>
	    </div>
	  )
	}



	2、类组件

	// 类组件定义
	class HelloWorld extends React.Component {
	  render() {
	    return (
	      <div>
	        <h1>类组件定义HELLOWORLD</h1>
	        <h1>hello:{this.props.name}</h1>
	      </div>
	    )
	  }
	}



	3、复合组件：组件中又有其他的组件，复合组件中既可以有函数式组件，又可以有类组件

	import React from 'react';
	import ReactDOM from 'react-dom';
	import './App.css'
	import './index.css';
	
	
	
	// 函数式组件
	function Childcom() {
	  let title = <h2>我是副标题</h2>
	  let weather = "下雨"
	  let isGo = weather == '下雨' ? "不出门" : "出门"
	  return (
	    <div>
	      <h1>函数式组件helloworld  {title}</h1>
	
	      <div>
	        <span>是否出门 {isGo} </span>
	      </div>
	    </div>
	  )
	}
	
	// ReactDOM.render(<Childcom />, document.querySelector('#root'))
	
	
	
	// 类组件定义
	class HelloWorld extends React.Component {
	  render() {
	    return (
	      <div>
	        <h1>类组件定义HELLOWORLD</h1>
	        <h1>hello:{this.props.name}</h1>
	        <Childcom weather = {this.props.weather}></Childcom>
	      </div>
	    )
	  }
	}
	
	ReactDOM.render(<HelloWorld name="张三" weather = "下雨" />, document.querySelector('#root'))
	
	// serviceWorker.unregister();
