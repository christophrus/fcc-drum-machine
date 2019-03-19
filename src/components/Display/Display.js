import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
            <div id="display" className="text-center h-8 p-4 w-full flex items-center justify-center bg-orange-light shadow">
                <span>{this.props.display}</span>
            </div>
        );
    }
}

export default Display;