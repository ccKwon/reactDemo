import React from 'react'

export default class ifDemo extends React.Component {


    constructor() {
        super()
        this.state = {
            isLogin: false,
            names: ['cckwon']
        }
    }

    login = () => {
        this.setState({
            isLogin:true
        })
    }

    render() {
        const { names } = this.state;
        let showView = this.state.isLogin ? 
        <div>iwen</div> :
        <div>请登录</div>
        return (
            <div>
                条件渲染：{ showView }
                <button onClick = { this.login }>登录</button>
                {
                    names.length > 0 ? 
                        <div>
                            {
                                names.map((Element, index) => {
                                return <p key = {index}> { Element }</p>
                                })
                            }
                        </div>
                        :
                        <div>数据正在请求</div>
                }
            </div>
        )
    }
}