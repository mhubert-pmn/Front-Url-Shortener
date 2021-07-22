import React from 'react';
import "./Layout.scss"

export default function Layout(props) {
    return(
        <div class="background">
            <div class="propsLayout">{props.children}</div>
            <div class="opacity"></div>
        </div>
    )
}