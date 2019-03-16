import React, { Component } from 'react';
import './App.css';
import kits from './components/data/kits';
import DrumPadHolder from './components/DrumPadHolder/DrumPadHolder';
import Key from './classes/Key';
import Controller from './components/Controller/Controller';
import Display from './components/Display/Display';

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      kit: [],
      power: true,
      display: '',
      currentKit: 'kitOne',
      volume: 50,
    }

    this.updateDisplay = this.updateDisplay.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
    this.updateKit = this.updateKit.bind(this);
    this.updatePower = this.updatePower.bind(this);

  }

  updateDisplay(text) {
    this.setState({
      display: text
    })
  }

  updateVolume(e) {
    if (this.state.power) {
      this.setState({
        volume: e.target.value
      })
      this.updateDisplay("Volume: " + e.target.value);
    }
  }

  updatePower(e) {
    this.setState({
      power: e.target.checked
    })
    let text = e.target.checked ? "On" : "Off";
    this.updateDisplay("Power: "+text);
    if (!e.target.checked) {
      setTimeout(() => this.updateDisplay(""), 1000);
    }
  }

  updateKit(e) {
    if (this.state.power) {
      let kit = !e.target.checked ? 'kitOne' : 'kitTwo';
      let text = !e.target.checked ? 'Heater Kit' : 'Smoth Piano Kit';
      this.setState({
        currentKit: kit
      })
      this.updateDisplay(text);
    }
  }

  getKit(kit) {

    let ret = [];
    kits[kit].forEach(button => ret.push( new Key(button.code, button.name, button.text, button.url) ));
    return ret;

  }

  componentDidMount() {

    this.setState({
      kit: this.getKit(this.state.currentKit)
    })

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentKit !== this.state.currentKit) {
      this.setState({
        kit: this.getKit(this.state.currentKit)
      })
    }
  }

  render() {
    const { kit, display, volume, power, currentKit  } = this.state;
    return (
      <main className="flex justify-center bg-orange-lightest items-center flex-col h-screen text-orange-darkest font-mono">
        <div className="w-full sm:w-5/6 md:w-2/3 lg:w-1/2 p-8 bg-orange-dark p-4 text-center" id="drum-machine">
          <h1 className="mb-4">Drum Machine</h1>
          <Display
            display={display}
          />
          <DrumPadHolder
            kit={kit}
            updateDisplay={text => this.updateDisplay(text)}
            volume={volume}
            power={power}
          />
          <Controller
            volume={volume}
            power={power}
            kit={currentKit !== 'kitOne' ? true : false}
            updateVolume={this.updateVolume}
            updatePower={this.updatePower}
            updateKit={this.updateKit}
          />
        </div>
      </main>
    );
  }
}

export default App;
