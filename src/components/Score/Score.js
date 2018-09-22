import React from "react";
import "./Score.css";

const Score = props => {
    console.log(props.score);
    return (
      <div className="scores">
        <span id="message">{props.status}</span>
        <span id="score"> Score: {props.score}</span>
        <span> | </span>
        <span id="topScore">High Score: {props.highScore}</span>
      </div>
    );
  };
  
  export default Score;