import React from "react";
import "./Navbar.css";
import Title from "../Title";
import Score from "../Score";

const Navbar = props => (
    <nav className="navbar">
        <ul>
            <li className="brand">
                <a href="https://bshin19.github.io/">Rememorizer</a>
            </li>

            <li>
                <Title>Jim's Greatest Hits</Title>
            </li>

            <li>
                <Score
                    score={props.score}
                    status={props.status}
                    highScore= {props.highScore}>
                </Score>
                {/* <div className="scores">
                    <span id="message">{props.status}</span>
                    <span id="score"> Score: {props.score}</span>
                    <span> | </span>
                    <span id="highScore">High Score: {props.highScore}</span>
                </div> */}
            </li>

        </ul>
    </nav>
);

export default Navbar;