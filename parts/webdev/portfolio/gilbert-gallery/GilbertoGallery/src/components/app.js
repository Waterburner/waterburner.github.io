import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./navigation/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import ContactContainer from "./pages/contact";
import GalleryContainer from "./pages/GalleryContainer";
import Auth from "./pages/auth";
import NoMatch from "./pages/noMatch";
import EventsContainer from "./eventsContainer";
// import Footer from "./navigation/footer";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logged_in: false,
        };
    }

    render() {
        return (
            <div className="app">
                <Router>
                    <Navbar />

                    <Switch>
                        <Route exact path="/" component={Home} />

                        <Route path="/events" component={EventsContainer} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={ContactContainer} />
                        <Route path="/gallery" component={GalleryContainer} />
                        <Route path="/auth" component={Auth} />

                        <Route component={NoMatch} />
                    </Switch>
                    {/* <Footer /> */}
                </Router>
            </div>
        );
    }
}
