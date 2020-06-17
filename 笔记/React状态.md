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