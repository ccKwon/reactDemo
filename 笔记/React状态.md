# React state

相当于 Vue 中的 data，但是使用方式跟 Vue 不一样


修改方式

this.state({
	this.state.xxx = xxx
})



父组件传递数据给子组件，单向流动，不能子传递给父。
props 传值， 可以是任意类型

props 可以设置默认值
HelloMessage.defaultProps = { name:xxx, msg: xxx};

注意：props 可以传递函数，props可以传递父元素的函数，就可以修改父元素的state，从而达到传递数据给父元素

## 案例 父传子

	// 在父元素中使用 state 去控制子元素 props 从而达到父元素数据传递给子元素
	
	// 父组件
	class ParentCom extends React.Component {
	  constructor(props) {
	    super(props)
	
	    this.state = {
	      // 父元素传递给子元素的值
	      isActive: true
	    }
	    this.changeShow = this.changeShow.bind(this)
	  }
	
	  render() {
	    return (
	      <div>
	        <button onClick={this.changeShow}>控制子元素显示</button>
	
	        {/* 传值 */}
	        <ChildCom isActive={this.state.isActive} />
	      </div>
	    )
	  }
	
	  changeShow() {
	    this.setState({
	      isActive:!this.state.isActive
	    })
	  }
	}
	
	// 子组件
	class ChildCom extends React.Component {
	  constructor(props) {
	    super(props)
	
	  }
	
	  render() {
	    let strClass = null;
	    // 接受值并判断
	    if (this.props.isActive) {
	      strClass = 'active'
	    } else {
	      strClass = ''
	    }
	
	    return (
	      <div className={`content ${strClass}`}>
	        <h1>我是子元素</h1>
	      </div>
	    )
	  }
	}
	
	ReactDOM.render(<ParentCom />, document.querySelector("#root"))


## 案例 子传父（实质调用父元素传递过来的函数）

	// 在父元素中使用 state 去控制子元素 props 从而达到父元素数据传递给子元素
	
	// 父组件
	class ParentCom extends React.Component {
	    constructor(props) {
	      super(props)
	
	      this.state = {
	        childData:null
	      }
	    }
	
	    render() {
	      return(
	        <div>
	          <h1>子元素传递为父元素的数据：{this.state.childData}</h1>
	          {/* 给子元素传递父元素函数 */}
	          <ChildCom setChildData = {this.setChildData}/>
	        </div>
	      )
	    }
	
	    setChildData = (data) => {
	      this.setState({
	        childData:data
	      })
	    }
	}
	
	
	class ChildCom extends React.Component {
	    constructor(props) {
	      super(props)
	
	      this.state = {
	          msg: 'helloworld'
	      }
	    }
	
	    render() {
	      return (
	        <div>
	          <button onClick={this.sendData}>传递helloworld给父元素</button>
	        </div>
	      )
	    }
	
	    sendData = () => {
	      // console.log(this.state.msg)
	      // 将子元素的数据传递给父元素，实际就是调用父元素传递进来的父元素函数
	      this.props.setChildData(this.state.msg);
	    }
	}
	
	
	ReactDOM.render(<ParentCom/>, document.querySelector('#root'))