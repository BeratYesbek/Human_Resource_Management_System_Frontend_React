import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header, Table, Rating, Button, Grid } from 'semantic-ui-react'
import JobAdvertisementService from '../services/JobAdvertisementService'
import { Link } from "react-router-dom";


export default function JobAdvertisementListByEmployer() {

    let { employerId } = useParams()

    const [jobAdvertisements, setJobAdvertisements] = useState([])
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisementByEmployer(employerId).then(result => setJobAdvertisements(result.data.data))
    })

    function removeJobAdvetisement(jobAdvertisement) {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.delete(jobAdvertisement)
    }

    return (
        <div>
            <Table style={{ marginTop: '50px' }} celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell singleLine>Id</Table.HeaderCell>
                        <Table.HeaderCell>Job Description</Table.HeaderCell>
                        <Table.HeaderCell>Job Position</Table.HeaderCell>
                        <Table.HeaderCell>Location</Table.HeaderCell>
                        <Table.HeaderCell>Number Of Position</Table.HeaderCell>
                        <Table.HeaderCell>Max Salary</Table.HeaderCell>
                        <Table.HeaderCell>Min Salary</Table.HeaderCell>
                        <Table.HeaderCell>Approve</Table.HeaderCell>
                        <Table.HeaderCell>Operation</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobAdvertisements ? jobAdvertisements.map(jobAdvertisement => (
                        <Table.Row>

                            <Table.Cell>
                                {jobAdvertisement.jobAdvertisementId}
                            </Table.Cell>
                            <Table.Cell>
                                {jobAdvertisement.jobDescription}
                            </Table.Cell>
                            <Table.Cell>
                                {jobAdvertisement.jobPosition}
                            </Table.Cell>
                            <Table.Cell>
                                {jobAdvertisement.location}
                            </Table.Cell>
                            <Table.Cell>
                                {jobAdvertisement.numberOfPosition}
                            </Table.Cell>
                            <Table.Cell>
                                {jobAdvertisement.maxSalary}
                            </Table.Cell>
                            <Table.Cell>
                                {jobAdvertisement.minSalary}
                            </Table.Cell>
                            {jobAdvertisement.approve ? (<Table.Cell style={{ color: 'green' }}>
                                Approved
                            </Table.Cell>) :
                                <Table.Cell style={{ color: 'red' }}>
                                    not approved
                                </Table.Cell>
                            }

                            <Table.Cell>
                                <Grid>
                                    <Grid.Row>
                                        <Button color="red" onClick={() => removeJobAdvetisement(jobAdvertisement)} >Remove</Button>
                                        <Link to={`/JobAdvertisement/${jobAdvertisement.jobAdvertisementId}/JobApplications`} > <Button color="blue" >See Applications</Button></Link>
                                    </Grid.Row>
                                </Grid>


                            </Table.Cell>

                        </Table.Row>
                    )) : null}


                </Table.Body>
            </Table>



        </div>
    )
}
