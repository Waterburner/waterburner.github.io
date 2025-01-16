// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// export default class PortfolioItem extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             portfolioItemClass: "",
//         };
//     }

//     handleMouseEnter() {
//         this.setState({ portfolioItemClass: "image-blur" });
//     }

//     handleMouseLeave() {
//         this.setState({ portfolioItemClass: "" });
//     }
//     //data that we'll need:
//     // - background pic: thumb_image_url
//     // - logo: logo_url
//     // - description: description
//     // - id: id
//     render() {
//         const { id, description, thumb_image_url, logo_url } = this.props.item;
//         return (
//             <Link to={`/portfolio/${id}`}>
//                 <div
//                     className="portfolio-item-wrapper"
//                     onMouseEnter={() => this.handleMouseEnter()}
//                     onMouseLeave={() => this.handleMouseLeave()}
//                 >
//                     <div
//                         className={
//                             "portfolio-img-background " +
//                             this.state.portfolioItemClass
//                         }
//                         style={{
//                             backgroundImage: "url(" + thumb_image_url + ")",
//                         }}
//                     />

//                     <div className="img-text-wrapper">
//                         <div className="logo-wrapper">
//                             <img src={logo_url} />
//                         </div>

//                         <div className="subtitle">{description}</div>
//                     </div>
//                 </div>
//             </Link>
//         );
//     }
// }

import React, { Component } from "react";

import fancyFrame from "../../../static/assets/imgs/gallery_frames/gold-frame-fancy-transp.png";
import modestFrame from "../../../static/assets/imgs/gallery_frames/gold-frame-simple-transp.png";

// testing
import galleryPainting from "../../../static/assets/imgs/gallery_paintings/image_892.jpg";
//end of testing
export default function () {
    return (
        <div className="galleryItem">
            <div className="galleryItem-wrapper">
                {/* <div className="gallery-item-framed-img"></div> */}
                <img
                    src={galleryPainting}
                    alt=""
                    className="gallery-item-img"
                />
            </div>
            {/* <img src={fancyFrame} alt="" className="gallery-item-frame" /> */}
        </div>
    );
}

//testing commit
