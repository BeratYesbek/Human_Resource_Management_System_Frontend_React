import React, { useState, useEffect } from "react";
import { Card, Icon, Image, Container, GridColumn, Grid } from 'semantic-ui-react'
import '../css/UserProfile.css'
import { FaLinkedin, FaGithubSquare, FaInstagram, FaFacebookSquare, FaTwitterSquare, FaGooglePlusSquare, FaEdit } from 'react-icons/fa';
import CvService from '../services/CvService';
import AbilityService from "../services/AbilityService";


export default function UserProfile() {


    const [cv, setCv] = useState([]);
    const [abilities, setAbility] = useState([]);



    useEffect(() => {
        let cvService = new CvService()
        let abilityService = new AbilityService()
        abilityService.getByJobSeekerId(1).then(result => setAbility(result.data.data));
        cvService.getByJobSeekerId(1).then(result => setCv(result.data.data));

    }, []);

    function onClickEducation() {
        return(
            <div  className="modal">

                <div className="modal-content">
                    <div className="modal-header">
                        <span class="close">&times;</span>
                        <h2>Modal Header</h2>
                    </div>
                    <div className="modal-body">
                        <p>Some text in the Modal Body</p>
                        <p>Some other text...</p>
                    </div>
                    <div className="modal-footer">
                        <h3>Modal Footer</h3>
                    </div>
                </div>

            </div>

);

    }



    return (
        <div>
            <Container>
                <div id="container">
                    <div id="box">
                        <Card className="user-profile-card">
                            <Image src='https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg'
                                wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Matthew</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Joined in 2015</span>
                                </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>

                            </Card.Content>

                        </Card>
                        <Grid>
                            <Grid.Row>
                                <GridColumn width={16}>

                                    <Card fluid="100%" width={15} className="cover-letter-box">
                                        <Card.Content header='About You' />
                                        <a onClick="" ><FaEdit size='30' style={{ float: 'right', margin: '10px' }}></FaEdit></a>

                                        <Card.Content description={cv.coverLetter ? cv.coverLetter.cover_letter_text : ""} />
                                        <Card.Content extra>
                                        </Card.Content>
                                    </Card>
                                </GridColumn>
                            </Grid.Row>
                        </Grid>


                        <div id="education" >

                            <Grid>

                                <div className='education-card'>
                                    <Grid>
                                        <Grid.Row>
                                            <GridColumn width={15}>
                                                <h4>Education</h4>

                                            </GridColumn>
                                            <a onClick={onClickEducation} ><FaEdit size='30' style={{ float: 'right', margin: '10px', color: 'white' }}></FaEdit></a>


                                        </Grid.Row>
                                    </Grid>


                                </div>
                                <Grid.Row>




                                    {cv.educations ? cv.educations.map((education) => (

                                        <GridColumn width={6} >

                                            <Card fluid="100%"
                                                color='green'
                                                className="item-box-education"
                                                href='#card-example-link-card'
                                                header={education.schoolName}
                                                description={`${education.graduateYear}`}
                                            />

                                        </GridColumn>
                                    )) : ""}
                                </Grid.Row>
                            </Grid>
                        </div>


                        <Grid>
                            <div className='experience-card'>
                                <Grid>
                                    <Grid.Row>
                                        <GridColumn width={15}>
                                            <h4>Experiences</h4>

                                        </GridColumn>
                                        <a href="" onClick="" ><FaEdit size='30' style={{ float: 'right', margin: '10px', color: 'white' }}></FaEdit></a>


                                    </Grid.Row>
                                </Grid>


                            </div>
                            <Grid.Row>
                                {cv.experiences > 0 ? cv.experiences.map((ability) => (
                                    <GridColumn width={4}>
                                        <Card
                                            className="item-box"
                                            color='yellow'

                                            href='#card-example-link-card'
                                            header='Elliot Baker'
                                            meta='Friend'
                                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                        />
                                    </GridColumn>
                                )) :
                                    <GridColumn width={16}>
                                        <p style={{ textAlign: 'center' }}>This user has no exist experience</p>
                                    </GridColumn>
                                }


                            </Grid.Row>
                        </Grid>



                        <Grid>

                            <div className='ability-card'>
                                <Grid>
                                    <Grid.Row>
                                        <GridColumn width={15}>
                                            <h4>Abilities</h4>

                                        </GridColumn>
                                        <a href="" onClick="" ><FaEdit size='30' style={{ float: 'right', margin: '10px', color: 'white' }}></FaEdit></a>


                                    </Grid.Row>
                                </Grid>


                            </div>
                            <Grid.Row>

                                {cv.abilities ? cv.abilities.map((ability) => (

                                    <GridColumn width={4}>

                                        <Card
                                            href='#card-example-link-card'
                                            header={ability.technologyName}
                                            meta={ability.rating}
                                            color='blue'


                                        />
                                    </GridColumn>
                                )) : <GridColumn width={16}>
                                    <p style={{ textAlign: 'center' }}>This user has no exist ability</p>
                                </GridColumn>}

                            </Grid.Row>
                        </Grid>



                        <Grid>

                            <div className='language-card'>
                                <Grid>
                                    <Grid.Row>
                                        <GridColumn width={15}>
                                            <h4>Languages</h4>

                                        </GridColumn>
                                        <a href="" onClick="" ><FaEdit size='30' style={{ float: 'right', margin: '10px', color: 'white' }}></FaEdit></a>


                                    </Grid.Row>
                                </Grid>


                            </div>
                            <Grid.Row>

                                {cv.languages ? cv.languages.map((language) => (
                                    <GridColumn width={4}>

                                        <Card
                                            className="item-box"

                                            href='#card-example-link-card'
                                            header={language.languageName}
                                            meta={language.rating}
                                            color='red'
                                        />
                                    </GridColumn>

                                )) : <GridColumn width={16}>
                                    <p style={{ textAlign: 'center' }}>This user has no exist language</p>
                                </GridColumn>}



                            </Grid.Row>
                        </Grid>

                        <Grid>
                            <div className='social-media-card'>
                                <Grid>
                                    <Grid.Row>
                                        <GridColumn width={15}>
                                            <h4>Social Media</h4>

                                        </GridColumn>
                                        <a href="" onClick="" ><FaEdit size='30' style={{ float: 'right', margin: '10px', color: 'white' }}></FaEdit></a>


                                    </Grid.Row>
                                </Grid>


                            </div>
                            <Grid.Row>

                                <GridColumn width={16}>
                                    {cv.socialMedia ? <a href={cv.socialMedia.gitHub}><FaGithubSquare size="50" color="#000" /></a> : ""}
                                    {cv.socialMedia ? <a href={cv.socialMedia.gitHub}><FaInstagram size="50" color="#000" /></a> : ""}
                                    {cv.socialMedia ? <a href={cv.socialMedia.gitHub}><FaFacebookSquare size="50" color="#000" /></a> : ""}
                                    {cv.socialMedia ? <a href={cv.socialMedia.gitHub}><FaTwitterSquare size="50" color="#000" /></a> : ""}
                                    {cv.socialMedia ? <a href={cv.socialMedia.gitHub}><FaGooglePlusSquare size="50" color="#000" /></a> : ""}





                                </GridColumn>


                            </Grid.Row>
                        </Grid>


                    </div>





                </div>



            </Container>



        </div>
    )
}
