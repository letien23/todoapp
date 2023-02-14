import React from "react";

export default function BannerLeft(){
    return(
        <div className="banner__left">
            <h1 className="banner__left__title">Learn effective time management and task management techniques with <span><u>PLAN-F!</u></span></h1>
            <p className="banner__left__description">Come join us. So that you can learn many skills about time management and task management. With modern technologies, we believe that we will help you manage your work and time effectively and well.</p>
            <div className="banner__left__btn">
                <button className="btn--join-for-free" type="button">Join For Free</button>
                <button className="btn--video-tutorial" type="button">Video Tutorial</button>
            </div>
            <div className="banner__left__row">
                <div className="banner__left__col">
                    <img src="/img/icon-1.svg" alt="icon"/>
                    <p>More than 500,000 users</p>
                </div>
                <div className="banner__left__col">
                    <img src="/img/icon-2.svg" alt="icon"/>
                    <p>More than 15 video</p>
                </div>
                <div className="banner__left__col">
                    <img src="/img/icon-3.svg" alt="icon"/>
                    <p>More than 20 tools</p>
                </div>
            </div>
        </div>
    );
}