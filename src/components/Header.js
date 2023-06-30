import React from "react";

function Header(props) {
    const asideStyle = {
        background: "azure",
        width: "calc(30% - 10px)",
        marginLeft: "10px"
    }
    return <aside style={asideStyle}>
        <h1> Hello there indeed, {props.name} and {props.color} </h1>
    </aside>

}

export default Header;