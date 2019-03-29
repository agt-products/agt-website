import React, { Component } from "react";
import { Route, Redirect }  from "react-router-dom";
import { urls } from "../../routes";

import PointOfPurchaseProfile from "../division-components/PointOfPurchaseProfile";
import TapesProfile from "../division-components/TapesProfile";
import InjectionMoldingProfile from "../division-components/InjectionMoldingProfile";
import ExtrusionsProfile from "../division-components/ExtrusionsProfile";
import ThermoformingProfile from "../division-components/ThermoformingProfile";
import DieCuttingProfile from "../division-components/DieCuttingProfile";

class DivisionsView extends Component {
    render() {
        return (
            <div>
                <Route path="/divisions" component={ Views } />
            </div>
        );
    }
}

class DivisionsRedirect extends Component {
    render() {
        return (
            <Redirect to={urls.divisions.default} />
        );
    }
}

const Views = ({ match }) => (
    <div>
        <Route exact path={ match.url } component={ DivisionsRedirect } />
        <Route exact path={ match.url + "/point-of-purchase" } component={ PointOfPurchaseProfile } />
        <Route path={ match.url + "/agt-tapes" } component={ TapesProfile } />
        <Route path={ match.url + "/injection-molding" } component={ InjectionMoldingProfile } />
        <Route path={ match.url + "/extrusions" } component={ ExtrusionsProfile } />
        <Route path={ match.url + "/thermoforming" } component={ ThermoformingProfile } />
        <Route path={ match.url + "/die-cutting" } component={ DieCuttingProfile } />
    </div>
);

export default DivisionsView;