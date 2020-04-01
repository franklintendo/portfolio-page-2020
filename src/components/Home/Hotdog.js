import React, { useEffect } from 'react';
import ScrollOut from "scroll-out";

function Hotdog() {

	useEffect(() => {
		ScrollOut({
			targets: "#canvas",
			threshold: .3
        });
	});

    return(
    <div id="animation_container" style={{ backgroundColor: "rgba(255, 255, 255, 0.00)", margin: "auto", position: "relative" }}>
		<canvas id="canvas" style={{position: "absolute", display: "block", backgroundColor: "rgba(255, 255, 255, 0.00)"}}></canvas>
		<div id="dom_overlay_container" style={{pointerEvents:"none", overflow:"hidden", position: "absolute", left: "0px", top: "0px", display: "block"}}>
		</div>
	</div>
    )
}

export default Hotdog;