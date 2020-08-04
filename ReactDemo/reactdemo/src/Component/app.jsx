import React from 'react'
// import Home from './Home'
// import MyNav from './MyNav'
// import State from './StateComponent'
// import Life from './Life'
// import SetStateDemo from './SetStateDemo'
// import IfDemo from './ifDemo'
import FromDemo from './FormDemo'

// 用类的形式创建组件
class App extends React.Component {

    constructor() {
        super()
        this.state = {
            title: '文本1'
        }
    }

    clickChange = () => {
        this.setState({
            title: '文本2'
        })
    }
    render() {


        const nav1 = ["首页", "视频", "学习"];
        const nav2 = ["WEB", "Java", "Node"];



        return (
            <div>
                {/*                 <h1>Hellow,React Component</h1>
                <Home></Home>
                <MyNav nav = {nav1} title = "学习导航"></MyNav>
                <MyNav nav = {nav2} title = "路径导航"></MyNav> */}

                {/* <State></State> */}
{/*                 <Life title={this.state.title}></Life>
                <button onClick={this.clickChange}>改变文本</button> */}

                {/* <IfDemo></IfDemo> */}
                <FromDemo></FromDemo>
            </div>

        )
    }
}


export default App;