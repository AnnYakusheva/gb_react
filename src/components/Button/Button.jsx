import React, { Component, Fragment } from "react";

export class Button extends Component {
    render() {
        console.log(this.props)
       return  (
        <Fragment>
            <h3>My name is {this.props.name}</h3>
            <button>Buttton</button>
        </Fragment>
       )
    }
}