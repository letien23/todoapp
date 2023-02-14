import React from "react";

export default function Avata(props){
    return(
        <div className={props.className}>
            <img src={props.img} alt="icon"/>
            <div className="banner__row">
                <img className="avata__icon" src={props.icon} alt="icon"/>
                <div className="banner__content">
                    <p className={props.classNameContent}>{props.text_top}</p>
                    <p>{props.text_bottom}</p>
                </div>
            </div>
        </div>
    );
}