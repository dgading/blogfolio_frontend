import React from 'react';
import Fish from './Fish.js';
import FishSVG from './fish/fish.json';

export class FishTank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({fish: FishSVG.hammerhead});
  }

  render() {
    return(
      <div className="fish-tank-container">
        <div className="fish-tank">
          <Fish fishType={this.state.fish}/>
        </div>
        <p><a href="http://www.flaticon.com/authors/freepik">Fish designed by freepik from Flaticon</a></p>
      </div>
    );
  }
}

export default FishTank;