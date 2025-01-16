import React, { Component } from "react";

import UpcomingEventsComponent from "./homepage/upcomingEvents";
import DescriptionSectionComponent from "./homepage/descriptionSection";

// ================= demo
// art img:
// https://www.kazoart.com/blog/wp-content/uploads/2019/04/Pollocl-convergence.jpg
// https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/6/18/1434647790018/d0bb6745-5cbe-4f5a-993d-4c9b25ab86b8-2060x1479.jpeg?width=465&quality=45&auto=format&fit=max&dpr=2&s=446f767582a2c8b288be76dd1113a62a
// van gogh https://www.biography.com/.image/t_share/MTY2NTIzMzc4MTI2MDM4MjM5/vincent_van_gogh_self_portrait_painting_musee_dorsay_via_wikimedia_commons_promojpg.jpg

// "https://static.bimago.com/mediacache/catalog/product/cache/9/9/92599/image/1000x1000/2c7b4536f19c865c4581272714395aee/92599_1.jpg";
// "https://www.pixelle.co/wp-content/uploads/2016/12/Van-Gogh-900x660.jpg";
// "https://upload.wikimedia.org/wikipedia/commons/3/39/Leonardo_da_Vinci_043-mod.jpg";
// incognitoImg "https://www.virtosuart.com/images/2019/blog-new/main/R2_abstract-artist-gheorghe-virtosu.jpg";

let featuredImgs = [
    "https://static.bimago.com/mediacache/catalog/product/cache/9/9/92599/image/1000x1000/2c7b4536f19c865c4581272714395aee/92599_1.jpg",
    "https://www.pixelle.co/wp-content/uploads/2016/12/Van-Gogh-900x660.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/39/Leonardo_da_Vinci_043-mod.jpg",
];

// ============ end of demo

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            upcomingEvents: false,
        };
    }

    render() {
        return (
            <div>
                <div className="homepage-wrapper">
                    <div className="homepage">
                        <div className="welcome-section-wrapper">
                            <div className="welcome-section">
                                <div className="heading-wrapper">
                                    <h1 className="main-heading heading">
                                        <span className="heading-txt">G</span>
                                        <span className="heading-txt">i</span>
                                        <span className="heading-txt">l</span>
                                        <span className="heading-txt">b</span>
                                        <span className="heading-txt">e</span>
                                        <span className="heading-txt">r</span>
                                        <span className="heading-txt">t</span>
                                    </h1>
                                    <h2 className="main-subheading heading">
                                        <span className="heading-txt">g</span>
                                        <span className="heading-txt">a</span>
                                        <span className="heading-txt">l</span>
                                        <span className="heading-txt">l</span>
                                        <span className="heading-txt">e</span>
                                        <span className="heading-txt">r</span>
                                        <span className="heading-txt">y</span>
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="homepage-content-wrapper">
                            <div className="upcoming-events-wrapper">
                                {this.state.upcomingEvents ? (
                                    <UpcomingEventsComponent />
                                ) : null}
                            </div>
                            <div className="description-section-wrapper">
                                <DescriptionSectionComponent />
                            </div>
                            <div className="highlights-section-wrapper">
                                <h3 className="section-heading">
                                    featured works
                                </h3>
                                <div className="highlights-section">
                                    <div className="left-side">
                                        <div className="img-wrapper">
                                            <img
                                                src={featuredImgs[0]} // on top in "demo" comment
                                                alt="featured painting"
                                            />
                                        </div>
                                    </div>
                                    <div className="center">
                                        <div className="img-wrapper">
                                            <img
                                                src={featuredImgs[1]} // on top in "demo" comment
                                                alt="featured painting"
                                            />
                                        </div>
                                    </div>
                                    <div className="right-side">
                                        <div className="img-wrapper">
                                            <img
                                                src={featuredImgs[2]} // on top in "demo" comment
                                                alt="featured painting"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
