import React from "react";

function Sidebar(props) {
    const asideStyle = {
        background: "azure",
        width: "calc(30% - 10px)",
        marginLeft: "10px"
    }
    return <aside style={asideStyle}>
        <h2>{props.greet} there sidebar</h2>
    </aside>
}

export default Sidebar; 