import React from 'react'
import { Route } from "react-router";
import UserProfile from '../pages/UserProfile'
import MyApplications from '../pages/MyApplications'
import { Card, Icon, Image, Container, GridColumn, Grid } from 'semantic-ui-react'
import JobAdvertisement from './JobAdvertisement';
import JobAdvertisementAdd from './JobAdvertisementAdd';
import JobAdvertisementOperatinos from './JobAdvertisementOperatinos';
import JobAdvertisementDetails from './JobAdvertisementDetails';
import JobAdvertisementListByEmployer from './JobAdvertisementListByEmployer.'
import JobApplications from './JobApplications';
import JobSeekerCv from './JobSeekerCv';
import SignUpJobSeeker from './SignUpJobSeeker';
import SignUpEmployer from './SignUpEmployer';
export default function Dashboard() {
    return (
        <div>
            <Container>
                    <Route exact path="/" component={UserProfile}/>
                    <Route exact path="/myApplications" component={MyApplications}/>
                    <Route exact path="/jobAdvertisements" component={JobAdvertisement}/>
                    <Route exact path="/jobAdvertisementAdd" component={JobAdvertisementAdd}/>
                    <Route exact path="/jobAdvertisementOperations" component={JobAdvertisementOperatinos}/>
                    <Route exact path="/jobAdvertisementOperations/:jobAdvertisement_id" component={JobAdvertisementDetails}/>
                    <Route exact path="/employer/:employerId/jobAdvertisements/" component={JobAdvertisementListByEmployer}></Route>
                    <Route exact path="/jobAdvertisement/:jobAdvertisementId/JobApplications/" component={JobApplications}></Route>
                    <Route exact path="/jobSeeker/:id/cv/" component={JobSeekerCv}></Route>
                    <Route exact path="/jobSeeker/signUp/" component={SignUpJobSeeker}></Route>
                    <Route exact path="/employer/signUp/" component={SignUpEmployer}></Route>


            </Container>
        </div>
    )
}
