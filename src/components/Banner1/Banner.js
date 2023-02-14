import React from "react";
import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";

export default function Banner(){
    return(
        <div className="flex-center">
            <section className="banner">
                <BannerLeft/>
                <BannerRight/>
            </section>
        </div>
    );
}