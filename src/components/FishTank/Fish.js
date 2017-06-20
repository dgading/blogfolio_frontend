import React from 'react';

export class Fish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {left: 100};
  }

  moveit() {
    console.log(this.state.left)
    this.setState({left: this.state.left + 50});
  }

  moveFish(currentPlace) {
    setInterval(this.setState(this.moveit(currentPlace)), 5000)
  }

  componentDidMount() {
    let currentPlace = this.state.left;
    let fishy = this.refs.fishy;
    let intervalId = setInterval(this.moveit.bind(this), 2000);
    this.setState({intervalId: intervalId});
  }

  render() {
    return(
      <span
        style={{left: this.state.left + 'px'}}
        ref="fishy"  
        className="fish-tank__fish" 
        dangerouslySetInnerHTML={{__html: this.props.fishType}} 
      />
    );
  }
}

export default Fish;