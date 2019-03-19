import React, { Component } from 'react';
import './DrumPadHolder.css'
import DrumPad from '../DrumPad/DrumPad'

class DrumPadHolder extends Component {

    render() {
        let kit = this.props.kit.map((drumPad,i) => {
            return (
                <DrumPad 
                    drumPad={drumPad}
                    updateDisplay={(text) => this.props.updateDisplay(text)}
                    volume={this.props.volume}
                    power={this.props.power}
                    key={"drumPad-"+i}
                />
            );
        });

        return (
            <div id="drum-pad">
                {kit}
            </div>
        );
    }
}

export default DrumPadHolder;