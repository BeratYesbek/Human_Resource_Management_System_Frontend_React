import {React,useState,useEffect} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import ApplicationService from '../services/ApplicationService'
export default function MyApplications() {


    const [applications, setApplications] = useState([])

    useEffect(() => {
       let applicationService = new ApplicationService()
       applicationService.getApplicationById(1).then(result => setApplications(result.data.data))
    }, [])

    return (
        <div>
            <Card.Group>
                {applications ? applications.map((application) => (
                     <Card style={{ marginTop: "35px" }} fluid>
                     <Card.Content>
                         <Image
                             floated='right'
                             size='mini'
                             src={application.jobAdvertisements.employer.imageUrl}
                         />
                         <Card.Header>{application.jobAdvertisements.employer.companyName}</Card.Header>
                         <Card.Meta>{application.jobPosition}</Card.Meta>
                         <Card.Description>
                             <div>
                                 <strong>Description: </strong>
                                 <p>{application.jobAdvertisements.jobDescription}</p>
                                
                                <strong>Min salary - Max salary</strong>
                                <p>{application.jobAdvertisements.minSalary + "  " + application.jobAdvertisements.maxSalary}</p>

                                 <strong>Application Date : </strong>
                                 <p>{application.applicationDate}</p>

                             </div>
                         </Card.Description>
                     </Card.Content>
                     <Button color="twitter">See Your Cv</Button>
                 </Card>
                )): "You did not apply any job yet"}
               
            </Card.Group>
        </div>
    )
}
