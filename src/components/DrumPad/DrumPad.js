import React, { Component } from 'react';
import classNames from 'classnames';

class DrumPad extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActivated: false
        }

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.play = this.play.bind(this);
    }

    play() {
        if (this.props.power) {
            const { drumPad, updateDisplay } = this.props;
            this.setState({
                isActivated: false
            })
            let audio = new Audio();
            audio = document.getElementById(drumPad.name);
            audio.currentTime = 0;
            audio.volume = this.props.volume / 100;
            audio.play();
            this.setState({
                isActivated: true
            })
            setTimeout(() => this.setState({ isActivated: false}), audio.duration*1000);
            updateDisplay(drumPad.text);
        }
    }

    handleKeyPress(e) {
        if (e.keyCode === this.props.drumPad.code) {
            this.play();
        }
    }

    componentDidMount = () => {
        window.addEventListener("keydown", this.handleKeyPress);
    };
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
    }

    render() {
        const { drumPad } = this.props;
        let classes = classNames({
            'drum-pad shadow my-2': true,
            'bg-orange-darker text-orange-light': this.state.isActivated,
            'bg-orange': !this.state.isActivated
        });

        return (
            <div id={drumPad.text} className={classes} key={drumPad.text} onClick={() => this.play()}>
                <audio class="clip" id={drumPad.name} src={drumPad.url} ></audio>
                <span>{drumPad.name}</span>
            </div>
        );
    }
}

export default DrumPad;