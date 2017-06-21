import React from 'react';

export class Fish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fish1: {
        position: 0,
        width: 200,
        direction: 'rtl'
      }
    };
  }

  moveit() {
    let fishPosition = this.state.fish1.position;
    let fishWidth = 100 - (this.state.fish1.width / 10);
    let fishDirection = this.state.fish1.direction;
    if(fishDirection === 'rtl') {
      if(fishPosition < fishWidth) {
        fishPosition = fishPosition + 5;
        this.setState({fish1: {position: fishPosition, width: 200, direction: 'rtl'}});
      } else {
        fishPosition = fishPosition - 5;
        this.setState({fish1: {position: fishPosition, width: 200, direction: 'ltr'}});
      }
    } else if(fishDirection === 'ltr') {
      
      if(fishPosition >= (10 - (this.state.fish1.width / 10))) {
        fishPosition = fishPosition - 5;
        this.setState({fish1: {position: fishPosition, width: 200, direction: 'ltr'}});
      } else {
        fishPosition = fishPosition + 5;
        this.setState({fish1: {position: fishPosition, width: 200, direction: 'rtl'}});
      }
    }
  }

  componentDidMount() {
    let currentPlace = this.state.fish1.position;
    let fishy = this.refs.fishy;
    let intervalId = setInterval(this.moveit.bind(this), 1000);
    this.setState({intervalId: intervalId});
  }

  render() {
    return(
      <span
        style={{left: this.state.fish1.position + '%'}}
        ref="fishy"  
        className={"fish-tank__fish " + this.state.fish1.direction }
        dangerouslySetInnerHTML={{__html: this.props.fishType}} 
      />
    );
  }
}

export default Fish;