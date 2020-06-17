# React 元素渲染

	let h1 = <h1>helloworld</h1>
	使用 JSX 的写法，可以创建 JS 元素对象
	注意：JSX 元素对象，或其他组件对象，必须只有一个根元素（根节点）
	类似 vue 
		<template>
			<div></div>
		</template 


## 案例
	实现页面时刻的显示
	function clock() {
	  let time = new Date().toLocaleTimeString();
	  let element = <h1>现在的时间是{time}</h1>
	  let root = document.querySelector('#root');
	  ReactDOM.render(element,root);
	}
	
	
	clock();
	
	setInterval(clock, 1000);

### 函数式组件渲染
	// react 函数式组件
	function Clock(props) {
	  return (
	    <div>
	      <h1>现在的时间是：{props.date.toLocaleTimeString()}</h1>
	      <h2>这是副标题</h2>
	    </div>
	  )
	}
	
	
	function run() {
	  ReactDOM.render(
	    <Clock date = {new Date}/>,
	    document.querySelector('#root')
	  )
	}
	
	
	setInterval(run, 1000)

# React Jsx
	1、优点：JSX执行更快，编译为 JavaScript 代码是进行优化
	2、类型更安全，编译过程如果出错就不能编译，及时发现错误
	3、JSX 编写模板更加简单快速


	注意：
	1、JSX必须要有根节点。
	2、正常的普通 HTML 元素要小写，如果是大写，默认认为是组件

## JSX 表达式
	1、由 HTML 元素构成
	2、中间如果需要插入变量用{}
	3、{}中间可以使用表达式
	4、{}中间表达式中可以使用 JSX 对象
	5、属性和 html 内容一样都是用{}来插入内容

### 例子
	let time = new Date().toLocaleTimeString();
	let str = '当前的时间是：'
	
	let element = (
	  <div>
	    <h1>
	      helloworld
	      </h1>
	    <h2>{str + time}</h2>
	  </div>
	)
	
	let man = '发热';
	let element2 = (
	  <div>
	    <h1>今天是否隔离</h1>
	    <h2>{man == '发热' ? <button>隔离</button> : '躺床上'}</h2>
	  </div>
	)
	
	let color = 'bgRed';
	let element3 = (
	  // HTML 的样式类名要写 className，因为class 在 js当中是关键字。
	  <div className={color}>
	    背景色
	  </div>
	)
	
	ReactDOM.render(
	  element3,
	  document.querySelector('#root')
	)


## JSX_style 样式
	