import { React, useEffect, useState } from 'react'
import { useParams } from "react-router";
import ApplicationService from '../services/ApplicationService'
import { Card, Icon, Button, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function JobApplications() {

    let { jobAdvertisementId } = useParams()

    const [applications, setApplications] = useState([])


    useEffect(() => {
        let applicationService = new ApplicationService()
        applicationService.getApplicationByJobAdvertisementId(jobAdvertisementId).then(result => setApplications(result.data.data))
    }, [])

    return (
        <div>
            <Card.Group style={{margin: "25px"}}>
                {applications ? applications.map((application) => (
                    <div >


                        <Card>
                            <Card.Content>
                                <Image
                                    floated='right'
                                    size='mini'
                                    src={application.jobSeeker.imageUrl}
                                />
                                <Card.Header>{application.jobSeeker.firstName + " " + application.jobSeeker.lastName}</Card.Header>
                                <Card.Meta>{`Date of Birth: ${application.jobSeeker.dateOfBirth.toString().slice(0, 10)}`}</Card.Meta>
                                <Card.Description>
                                    {application.jobSeeker.email}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Link to={`/jobSeeker/${application.jobSeeker.id}/cv`}>     <Button basic color='green'>
                                        See Cv
                                    </Button></Link>
                               
                                </div>
                            </Card.Content>
                        </Card>

                    </div>



                )) : null}
            </Card.Group>


        </div>
    )
}
