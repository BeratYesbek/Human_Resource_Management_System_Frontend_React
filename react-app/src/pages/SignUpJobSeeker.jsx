import { React, useEffect,useState } from 'react'
import { Formik, Form } from "formik";
import {
    Button,
    Grid,
    Label,
    Select,
    Checkbox,
    Image
} from 'semantic-ui-react'
import * as Yup from "yup";
import BCustomTextInput from '../utilities/BCustomTextInput'
import BCustomNumberInput from '../utilities/BCustomNumberInput';
import BCustomDatePicker from '../utilities/BCustomDatePicker';
import BCustomFileInput from '../utilities/BCustomFileInput';
import ImageService from '../services/ImageService';
import JobSeekerService from '../services/JobSeekerService';

export default function SignUpJobSeeker() {
    const [image_url, setImage_url] = useState("https://www.logodesign.net/logo/building-on-crescent-4303ld.png?size=2&industry=company")
    const initialValues = { firstName: "", lastName: "", email: "", password: "", dateOfBirth: "", identityNumber: "", imageUrl: "" }

    const schema = Yup.object({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        identityNumber: Yup.string().required("Identity number is required"),
        email: Yup.string().required("Email is required"),
        password: Yup.string().required("Password is required"),
        dateOfBirth: Yup.date().required("Date of Birth is required"),
    })



    const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
        addImage(e)
    }

    function addImage(e) {
        const file = Array.from(e.target.files)

        return new Promise(resolve => {

            setTimeout(() => {
                let imageService = new ImageService()
                let formData = new FormData();
                formData.append('file', file[0])
                imageService.addToCloud(formData).then(result => setImage_url(result.data.data.url) , console.log(image_url))

            }, 2000);
        })
    }



    function addJobSeeker(value) {
        if(image_url){
            value.imageUrl = image_url
            let jobSeekerService = new JobSeekerService()
            return new Promise(resolve => {
                jobSeekerService.add(value).then(result => console.log(result))
                setTimeout(() => {
    
                }, 2000);
            })
        }

    }


    return (
        <div>


            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    addJobSeeker(values)
                }}
            >
                <Form style={{ marginTop: "15px" }} className="ui form">
                    <Image style={{ marginBottom: "25px" }} src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' size='medium' rounded />
                    <BCustomFileInput onChange={handleFileSelected} name="imageUrl" />
                    <Label content="First Name" style={{ marginBottom: "5px", float: "left" }}></Label>
                    <BCustomTextInput name="firstName" placeholder="First Name" />

                    <Label content="Last Name" style={{ marginBottom: "5px", float: "left" }}></Label>
                    <BCustomTextInput name="lastName" placeholder="Last Name" />


                    <Label content="Identity Number" style={{ marginBottom: "5px", float: "left" }}></Label>
                    <BCustomNumberInput name="identityNumber" placeholder="Identity Number" />

                    <Label content="Date Of Birth" style={{ marginBottom: "5px", float: "left" }}></Label>
                    <BCustomDatePicker name="dateOfBirth" placeholder="Date of Birth"></BCustomDatePicker>

                    <Label content="Email" style={{ marginBottom: "5px", float: "left" }}></Label>
                    <BCustomTextInput name="email" placeholder="Email" />

                    <Label content="Password" style={{ marginBottom: "5px", float: "left" }}></Label>
                    <BCustomTextInput name="password" placeholder="Password" />

                    <Button style={{ float: "left" }} color="blue" type="submit">Sign Up</Button>
                </Form>
            </Formik>
        </div>
    )
}
