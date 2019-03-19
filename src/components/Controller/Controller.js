import React, { Component } from 'react';
import './Controller.css'

class Controller extends Component {
    render() {
        return (
            <div className="flex p-2 shadow rounded-lg bg-orange-light">
                <div className="w-1/5 flex justify-center items-center flex-col">
                <span className="mb-2">Power</span>
                <label className="switch">
                    <input type="checkbox" checked={this.props.power} onChange={this.props.updatePower} />
                    <span className="switch-slider"></span>
                </label>
                </div>
                <div className="w-3/5 flex justify-center items-center flex-col content-between">
                    <span className="mb-2">Volume</span>
                    <input type="range" min="1" max="100" value={this.props.volume} className="slider" id="volume" onChange={this.props.updateVolume} />
                </div>
                <div className="w-1/5 flex justify-center items-center flex-col">
                <span className="mb-2">Kit</span>
                <label className="switch">
                    <input type="checkbox" checked={this.props.kit} onChange={this.props.updateKit} />
                    <span className="switch-slider always-active"></span>
                </label>
                </div>
            </div>
        );
    }
}

export default Controller;