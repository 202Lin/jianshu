import React, { Component } from 'react'

export default class index extends Component {
    constructor(){
        super()
        this.speak = () => {console.log(this)}
    }
    speak = () =>{
        console.log(this)
    }
    render() {
        return (
            <div>
                <button onClick={this.speak}>按钮</button>
            </div>
        )
    }
}
