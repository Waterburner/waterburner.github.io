import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = (props) => {
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
        <div className="navigation-container">
            <div className="navigation-wrapper">
                <div className="navigation">
                    <div className="left">
                        {/* <div className="left">Home</div> */}
                        <NavLink exact to="/" className="nav-link">
                            <div className="navbar-link">Home</div>
                        </NavLink>
                    </div>

                    <div className="center">
                        <div className="logo">
                            {/* Hard refresh when click on logo */}
                            <a className="navbar-link" href="#">
                                Logo
                            </a>
                        </div>
                    </div>

                    <div className="right">
                        <div className="hamburger-container">
                            <div className="hamburger navbar-link">===</div>
                            <div className="hamburger-dropdown-list-container">
                                <ul className="dropdown-list">
                                    <li className="nav-dropdown-item">
                                        <NavLink
                                            to="/events"
                                            className="nav-link nav-dropdown-item"
                                        >
                                            <div className="navbar-link nav-dropdown-item">
                                                events
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="nav-dropdown-item">
                                        <NavLink
                                            to="gallery"
                                            className="nav-link nav-dropdown-item"
                                        >
                                            <div className="navbar-link nav-dropdown-item">
                                                gallery
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="nav-dropdown-item">
                                        <NavLink
                                            to="/about"
                                            className="nav-link nav-dropdown-item"
                                        >
                                            <div className="navbar-link nav-dropdown-item">
                                                about us
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="nav-dropdown-item">
                                        <NavLink
                                            to="/contact"
                                            className="nav-link nav-dropdown-item"
                                        >
                                            <div className="navbar-link nav-dropdown-item">
                                                contacts
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="nav-dropdown-item">
                                        <NavLink
                                            to="/auth"
                                            className="nav-link nav-dropdown-item"
                                        >
                                            <div className="navbar-link nav-dropdown-item">
                                                login
                                            </div>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(NavigationComponent);
