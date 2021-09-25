import React, {Component} from "react";

export default class Watch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.date
        }
        this.timerClock = null
    }

    componentDidMount() {
        this.timerClock = setInterval(() => this.setState({date: new Date()}), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerClock)
    }

    render() {
        return (
            <div>
                <h3>Время {this.state.date.toLocaleString()}</h3>
            </div>
        )
        }
    }


