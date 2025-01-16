import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const FooterComponent = () => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink to={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </div>
        );
    };
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-left">
                    <div className="footer-left-pages">
                        <NavLink exact to="/" className="nav-link">
                            Home
                        </NavLink>
                    </div>
                    <div className="footer-left-pages">
                        <NavLink to="/contact" className="nav-link">
                            Contact
                        </NavLink>
                    </div>
                </div>
                <div className="footer-center">
                    <div className="logo">Logo</div>
                    <div className="social-btns-wrapper">
                        <div className="social-left social-btns">FB</div>
                        <div className="social-center social-btns">IG</div>
                        <div className="social-right social-btns">DA</div>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-right-wrapper">
                        <div className="footer-contacts-left">
                            <div className="footer-contacts-top-row">
                                Phone:
                            </div>
                            <div className="footer-contacts-bottom-row">
                                Location:
                            </div>
                        </div>
                        <div className="footer-contacts-right">
                            <div className="footer-contacts-top-row">
                                <div className="phone-number">4091231234</div>
                            </div>
                            <div className="footer-contacts-bottom-row">
                                <div className="address">
                                    123 Tiki street <br />
                                    Tiki island, TX
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(FooterComponent);
