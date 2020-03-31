import React from 'react';
// import { Container, Row, Col } from "react-bootstrap";

function Hotdog() {
    return(
    <div id="animation_container" style={{ backgroundColor: "rgba(255, 255, 255, 0.00)" }}>
		<canvas id="canvas" style={{position: "absolute", display: "block", backgroundColor: "rgba(255, 255, 255, 0.00)"}}></canvas>
		<div id="dom_overlay_container" style={{pointerEvents:"none", overflow:"hidden", position: "absolute", left: "0px", top: "0px", display: "block"}}>
		</div>
	</div>
    )
}

export default Hotdog;