import React, { Component } from "react";

// demo

let artistImg =
    "https://www.virtosuart.com/images/2019/blog-new/main/R2_abstract-artist-gheorghe-virtosu.jpg";

//  end of demo

export default function () {
    return (
        <div className="description-section">
            <div className="description-heading">
                <h3 className="section-heading">description section heading</h3>
            </div>
            <div className="description-content-wrapper">
                <div className="description-img-wrapper">
                    <img
                        className="description-img"
                        src={artistImg}
                        alt="artist's photo"
                    />
                </div>
                <div className="description-text-wrapper">
                    <p className="description-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquam impedit quaerat reiciendis ab
                        reprehenderit obcaecati necessitatibus eaque voluptas
                        maxime, nemo molestias ducimus, modi sit esse eveniet
                        iste nihil dignissimos magnam. Placeat, totam.
                    </p>
                </div>
            </div>
        </div>
    );
}
