import React, { useEffect, useState } from 'react'
import JobAdvertisementService from '../services/JobAdvertisementService'
import { Card, Button, Icon, Image, Container, GridColumn, Grid } from 'semantic-ui-react'
import ApplicationService from '../services/ApplicationService'
export default function JobAdvertisement() {

    const [jobAdvertisements, setJobAdvertisement] = useState([])
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getAllDetail().then(result => setJobAdvertisement(result.data.data))
    }, [])

    function applyJob(jobAdvertisement) {
        let application = {
            jobAdvertisements: {
                jobAdvertisementId: jobAdvertisement.jobAdvertisement_id
            },
            jobSeeker: {
                id: 1
            },
            applicationDate: Date.now()
        }

        let applicationService = new ApplicationService()
        applicationService.add(application)


    }

    return (
        <div>
            <Container>
                {jobAdvertisements ? jobAdvertisements.map((jobAdvertisement) => (
                    <Card style={{ marginTop: '20px' }} fluid="100%">
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
                                            src={jobAdvertisement.imageUrl}
                                        />
                                    </GridColumn>
                                </Grid.Row>
                            </Grid>



                        </Card.Content>

                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button onClick={() => applyJob(jobAdvertisement)} basic color='green'>
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
