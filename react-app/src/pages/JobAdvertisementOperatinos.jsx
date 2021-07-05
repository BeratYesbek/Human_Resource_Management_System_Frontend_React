import React, { useState, useEffect } from 'react'
import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react'
import JobAdvertisementService from '../services/JobAdvertisementService'

export default function JobAdvertisementOperatinos() {

    const [jobAdvertisements, setJobAdvertisement] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getAllDetail().then(result => (setJobAdvertisement(result.data.data)))

    }, [])

    return (
        <div>
            <Table style={{ marginTop: "80px" }} celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company</Table.HeaderCell>
                        <Table.HeaderCell>Position Name</Table.HeaderCell>
                        <Table.HeaderCell>Location</Table.HeaderCell>
                        <Table.HeaderCell>Is it Approved</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {jobAdvertisements ? jobAdvertisements.map((jobAdvertisement) => (
                        <Table.Row>
                            
                            <Table.Cell style={{ color: "blue" }}>{jobAdvertisement.companyName}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.jobPosition}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.location}</Table.Cell>
                            {jobAdvertisement.approve === false ? (
                                <Table.Cell style={{ color: "red" }} >{jobAdvertisement.approve.toString()}</Table.Cell>

                            ) : <Table.Cell style={{ color: "green" }} >{jobAdvertisement.approve.toString()}</Table.Cell>
                            }                            <Table.Cell>
                                <Button color="black">See Details</Button>
                            </Table.Cell>

                        </Table.Row>

                    )) : null}


                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
