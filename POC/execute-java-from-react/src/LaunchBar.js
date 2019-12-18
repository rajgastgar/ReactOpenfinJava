import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { spawn } from 'child_process'
import './LaunchBar.css'

export class LaunchBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Begin'
        }
    }

    executeJP = () => {
        console.log('Executed the JP !!');
        window.test();
    }

    render() {
        return (
            <div>
                <h1>Launch Bar</h1>
                <button className="Square"onClick={this.executeJP}>JP</button>
                
            </div>
        )
    }
}

export default LaunchBar
