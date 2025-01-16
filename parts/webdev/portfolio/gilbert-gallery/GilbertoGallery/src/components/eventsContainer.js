import React, { Component } from "react";

import UpcomingEvents from "./events/upcomingEvents";
import PastEvents from "./events/pastEvents";

export default function () {
    return (
        <div>
            <UpcomingEvents />
            <PastEvents />
        </div>
    );
}
