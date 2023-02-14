import React from "react";
import Avata from "./Avata";
export default function BannerRight(){
    return(
        <div className="banner__right">
            <Avata className={"avata avata-1"} img={"/img/avata1.png"} icon={"/img/icon1.svg"} classNameContent={"content--red"} text_top={"3.000 +"} text_bottom={"Free Courses"}/>
            <Avata className={"avata avata-2"} img={"/img/avata3.png"} icon={"/img/icon2.svg"} classNameContent={"content--blue"} text_top={"Congrats!"} text_bottom={"Your Admission Completed"}/>
            <Avata className={"avata avata-3"} img={"/img/avata2.png"} icon={"/img/icon4.png"} text_top={"Ali Tufan"} text_bottom={"UX/UI Designer"}/>
        </div>
    )
}