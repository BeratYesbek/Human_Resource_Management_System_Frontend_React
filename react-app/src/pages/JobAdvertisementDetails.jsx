import React, { useState, useEffect } from 'react'
import { useParams } from "react-router";
import { Card, Icon, Image, Button } from 'semantic-ui-react'

import JobAdvertisementService from '../services/JobAdvertisementService'
export default function JobAdvertisementDetails() {

    let { jobAdvertisement_id } = useParams()

    const [jobAdvertisementDetail, setJobAdvertisementDetail] = useState()
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getById(jobAdvertisement_id).then(result => setJobAdvertisementDetail(result.data.data))
    })

    const [open, setOpen] = React.useState(false);

    function updateJobAdvertisement(){
        jobAdvertisementDetail.approve = true
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.update(jobAdvertisementDetail)
    }

    return (
        <div style={{ marginTop: "25px" }}>
            {jobAdvertisementDetail ? ((
                <div>
                    <Card >
                        <Image src={jobAdvertisementDetail.employer.imageUrl} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{jobAdvertisementDetail.employer.companyName}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{jobAdvertisementDetail.employer.webSite}</span>
                            </Card.Meta>
                            <Card.Description>
                                <span className='date'>{jobAdvertisementDetail.employer.companyEmail}</span>
                                <span className='date'>{jobAdvertisementDetail.employer.phoneNumber}</span>
                            </Card.Description>
                        </Card.Content>

                    </Card>

                    <Card fluid>
                        <Card.Content>
                            <Card.Header content='Job Position' />
                            <Card.Description content={jobAdvertisementDetail.jobPosition} />
                        </Card.Content>
                    </Card>

                    <Card fluid>
                        <Card.Content>
                            <Card.Header content='Job Description' />
                            <Card.Description content={jobAdvertisementDetail.jobDescription} />
                        </Card.Content>
                    </Card>

                    <Card fluid>
                        <Card.Content>
                            <Card.Header content='Job Location' />
                            <Card.Description content={jobAdvertisementDetail.location} />
                        </Card.Content>
                    </Card >
                    <Card fluid>
                        <Card.Content>
                            <Card.Header content='Job Number Of Position' />
                            <Card.Description content={jobAdvertisementDetail.numberOfPosition} />
                        </Card.Content>
                    </Card>


                    <Card fluid>
                        <Card.Content>
                            <Card.Header content='Min And Max Salary' />
                            <Card.Description content={jobAdvertisementDetail.minSalary + "$" + " - " + jobAdvertisementDetail.maxSalary + "$"} />
                        </Card.Content>
                    </Card>

                    <Card fluid>
                        <Card.Content>
                            <Card.Header content='Application Deadline' />
                            <Card.Description content={jobAdvertisementDetail.applicationDeadline} />
                        </Card.Content>
                    </Card>

                    {jobAdvertisementDetail.approve ? (
                        <Card fluid color='green' header='approved' />

                    ) : <div>
                        <Card fluid color='red' header='not approved' />
                        <Button onClick={updateJobAdvertisement} color="green">Approve</Button>

                    </div>

                    }

                </div>

            )) : null}

        </div>
    )
}
