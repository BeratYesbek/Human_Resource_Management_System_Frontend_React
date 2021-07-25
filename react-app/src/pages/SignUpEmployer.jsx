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
import EmployerService from '../services/EmployerService';
export default function SignUpEmployer() {
    const [image_url, setImage_url] = useState("https://www.logodesign.net/logo/building-on-crescent-4303ld.png?size=2&industry=company")
    const initialValues = { companyName: "", companyEmail: "", webSite: "", phoneNumber: "", password: "", passwordAgain: "", imageUrl: "" }

    const schema = Yup.object({
        companyName: Yup.string().required("Company Name is required"),
        companyEmail: Yup.string().required("Comany Email is required"),
        webSite: Yup.string().required("WebSite is required"),
        phoneNumber: Yup.string().required("Phone Number is required"),
        password: Yup.string().required("Password is required"),
        passwordAgain: Yup.string().required("Password is required"),
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



    function addEmployer(value) {
        if (image_url) {
            value.imageUrl = image_url
            let employerService = new EmployerService()
            return new Promise(resolve => {
                employerService.add(value).then(result => console.log(result))
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
                    addEmployer(values)
                }}
            >
                <Form style={{ marginTop: "15px" }} className="ui form">
                    <Image style={{ marginBottom: "25px" }} src={image_url} size='medium' rounded />
                    <BCustomFileInput onChange={handleFileSelected} name="imageUrl" />

                    <Label content="Company Name" style={{ marginBottom: "5px", float: "left" }}></Label>
                    <BCustomTextInput name="companyName" placeholder="companyName" />

                    <Label content="Company Email" style={{ marginBottom: "5px", float: "left" }}></Label>
                    <BCustomTextInput name="companyEmail" placeholder="companyEmail" />

                    <Label content="Company Web Site" style={{ marginBottom: "5px", float: "left" }}></Label>
                    <BCustomTextInput name="webSite" placeholder="Company Web Site" />

                    <Label content="Phone Number" style={{ marginBottom: "5px", float: "left" }}></Label>
                    <BCustomNumberInput name="phoneNumber" placeholder="Phone Number"></BCustomNumberInput>

                    <Label content="Password" style={{ marginBottom: "5px", float: "left" }}></Label>
                    <BCustomTextInput name="password" placeholder="Password" />

                    <Label content="Password Again" style={{ marginBottom: "5px", float: "left" }}></Label>
                    <BCustomTextInput name="passwordAgain" placeholder="Password Again" />

                    <Button style={{ float: "left" }} color="blue" type="submit">Sign Up</Button>
                </Form>
            </Formik>
        </div>
    )
}
