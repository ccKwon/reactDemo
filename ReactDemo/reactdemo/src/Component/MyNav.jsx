import React from 'react'

export default class MyNav extends React.Component{
    render() {
        console.log(this.props.nav);
        return(
            <div>
                <h3>{ this.props.title }</h3>
                <ul>
                    {
                        this.props.nav.map((Element, index) => {
                        return <li key={index}>{ Element }</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}