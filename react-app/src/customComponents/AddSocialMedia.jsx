import React from 'react'
import { Formik, Form } from "formik";
import { FaEdit } from 'react-icons/fa';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import BCustomTextInput from '../utilities/BCustomTextInput';
import BCustomNumberInput from '../utilities/BCustomNumberInput';
import SocialMediaService from '../services/SocialMediaService'
import Button from '@material-ui/core/Button';
import * as Yup from "yup";

import {
    Card, Icon, Image, Container, GridColumn, Grid, Label,
} from 'semantic-ui-react'
export default function AddSocialMedia() {

    const [open, setOpen] = React.useState(false);



    const initialValues = { gitHub: "", facebook: "",instagram: "",twitter: "",google:"", jobSeeker:{
        id: 1
    }}


    const schema = Yup.object({
        facebook: Yup.string().required("Facebook is required"),
        gitHub: Yup.string().required("GitHub is required"),
        instagram: Yup.string().required("Instagram is required"),
        twitter: Yup.string().required("Twitter is required"),
        google: Yup.string().required("Gmail is required"),


    })


    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    function AddSocialMedia(values) {
        let socialMediaService = new SocialMediaService()
        socialMediaService.add(values)
    }

    return (
        <div>
            <a onClick={handleClickOpen}><FaEdit size='30' style={{ float: 'right', margin: '10px', color: "white" }}></FaEdit></a>

            <Dialog fullWidth="1000px" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

                <DialogTitle id="form-dialog-title">Add Social Media</DialogTitle>
                <DialogContent>
                    <Formik initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            AddSocialMedia(values)
                        }}
                    >
                        <Form style={{ marginTop: "15px" }} className="ui form">

                            <Label content="GitHub Link" style={{ marginBottom: "5px", marginTop: "5px", float: "left" }}></Label>

                            <BCustomTextInput
                                name="gitHub"
                                placeholder="GitHub"
                            />

                            <Label content="Facebook Link" style={{ marginBottom: "5px", marginTop: "5px", float: "left" }}></Label>

                            <BCustomTextInput
                                name="facebook"
                                placeholder="Facebook"
                            />

                            <Label content="Instagram Link" style={{ marginBottom: "5px", marginTop: "5px", float: "left" }}></Label>
                            <BCustomTextInput
                                name="instagram"
                                placeholder="Instagram"
                            />

                            <Label content="Twitter Link" style={{ marginBottom: "5px", marginTop: "5px", float: "left" }}></Label>

                            <BCustomTextInput
                                name="twitter"
                                placeholder="Twitter"
                            />

                            <Label content="Gmail" style={{ marginBottom: "5px", marginTop: "5px", float: "left" }}></Label>

                            <BCustomTextInput
                                name="google"
                                placeholder="gmail"
                            />


                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button type="submit" color="primary">
                                    Add
                                </Button>
                            </DialogActions>
                        </Form>
                    </Formik>

                </DialogContent>

            </Dialog>

        </div>
    )
}
