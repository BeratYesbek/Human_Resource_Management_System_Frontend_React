import React from 'react'
import { Route } from "react-router";
import UserProfile from '../pages/UserProfile'
import MyApplications from '../pages/MyApplications'
import { Card, Icon, Image, Container, GridColumn, Grid } from 'semantic-ui-react'
import JobAdvertisement from './JobAdvertisement';
export default function Dashboard() {
    return (
        <div>
            <Container>
                    <Route exact path="/" component={UserProfile}/>
                    <Route exact path="/myApplications" component={MyApplications}/>
                    <Route exact path="/jobAdvertisements" component={JobAdvertisement}/>
            </Container>
        </div>
    )
}
