import React, { Component } from "react";
import Game from './Game';
import Modal from "../components/Modal";
import config from "../components/configSpringfieldVice.json";
import "./start.css";

class Start extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstScreen: config.start.firstScreen,
			isModal: false,
		};
  }

	startingGame = () => {
		this.setState({ 
			firstScreen: false,
			isModal: false
		});
		this.result = 
			<Game 
				toggleModal = {() => this.toggleModal()}
			/>;
	};

  toggleModal() {
		this.setState({ 
			isModal: !this.state.isModal
		});
	}
	
	render() {
    return (
      <div id="init_div">
				<div
					className="start_div show"
					style={this.state.firstScreen === true ? { display: "block" } : { display: "none" }}
				>

          <img className="left_img" src="logo512.png" alt="Springfield Vice" />
          <img className="home_screen" src='bart-ass.png' alt='Bart Simpsons' />
          <button className="right_doh" onClick={() => this.toggleModal()}>
            <img src='homer-doh.png' alt='Homer d`oh' />
            <span className="text">Options</span>
          </button>
          <button id="start" className="right_button" onClick={() => this.startingGame()}>
            <span className="text">Catch me...<br />if you can !</span>
            <span className="logo">&#9654;</span>
          </button>
        </div>
				<div
					className={
						this.state.firstScreen === false || this.state.modal === true
						? "game_div show"
						: "game_div hide"
					}>
					{this.result}
				</div>
					<Modal
						firstScreen = {this.state.firstScreen}
						isModal = {this.state.isModal}
						toggleModal = {() => this.toggleModal()}
					/>
				<div>
					<audio
						ref="audio_tag"
						src="http://www.allard-jacquin.com/simpsons.mp3"
						controls
						autoPlay
						type="audio/mp3"
					/>
				</div>
			</div>
		);
	}
}

export default Start;