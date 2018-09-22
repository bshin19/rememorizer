import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className="wrapper"><div className="cardsDiv">{props.children}</div></div>;

export default Wrapper;
