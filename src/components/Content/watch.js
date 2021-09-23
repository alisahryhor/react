import React, {Component} from "react";

export default class Watch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.date
        }
    }
    render() {
        return (
            <div>
                <h3>Время {this.state.date.toLocaleString()}</h3>
            </div>
        )

    }
}

