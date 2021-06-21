import React, { useEffect, useState } from 'react'
import JobAdvertisementService from '../services/JobAdvertisementService'
import { Card, Button, Icon, Image, Container, GridColumn, Grid } from 'semantic-ui-react'

export default function JobAdvertisement() {

    const [jobAdvertisements, setJobAdvertisement] = useState([])
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getAllDetail().then(result => setJobAdvertisement(result.data.data))
    }, [])

    return (
        <div>
            <Container>
                {jobAdvertisements ? jobAdvertisements.map((jobAdvertisement) => (
                    <Card style={{marginTop:'20px'}} fluid="100%">
                        <Card.Content>
                            <Grid>
                                <Grid.Row>
                                    <GridColumn width={12}>
                                        <Card.Header>{jobAdvertisement.jobPosition}</Card.Header>
                                        <Card.Meta>{jobAdvertisement.companyName}</Card.Meta>
                                        <Card.Meta>{jobAdvertisement.location}</Card.Meta>
                                        <Card.Description>
                                            <strong>{jobAdvertisement.minSalary}- {jobAdvertisement.maxSalary}</strong>
                                            <br></br>
                                            <p>{jobAdvertisement.jobDescription}</p>

                                        </Card.Description>
                                    </GridColumn>
                                    <GridColumn width={4}>
                                        <Image
                                            floated='right'
                                            size='small'
                                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                                        />
                                    </GridColumn>
                                </Grid.Row>
                            </Grid>



                        </Card.Content>

                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green'>
                                    Apply
                                </Button>
                            </div>
                        </Card.Content>

                    </Card>
                )) : <h1>No data</h1>}

            </Container>

        </div>
    )
}
